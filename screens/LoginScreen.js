import React from 'react';
import { View, Text, TextInput, Pressable, ImageBackground, Alert } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    withTiming,
    withDelay,
    runOnJS,
    withSequence,
    withSpring
  } from "react-native-reanimated";
import { useState } from 'react';
import styles from "my-app/components/Styles.js";
// import axios from 'axios';
import { useEffect } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
import * as SQLite from 'expo-sqlite'
import HomeScreen from './HomeScreen';
import { getDbConnection, insertTask } from '../utils/db.js';
function LoginScreen({navigation}) {

    const localImage = require("my-app/assets/logo.png")
    const imagePosition = useSharedValue(1);
    const formButtonScale = useSharedValue(1);
    const [isRegistering, setIsRegistering] = useState(true);
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null)

    
    function handleTitleChange(text){
      setTitle(text)
    }

    async function createTask(){
      if (title === ''){
        setError('Username is required');
        return;
      }
      try{
        const db = await getDbConnection();
        await insertTask(db, title);
        Alert.alert(
          'Success',
          'Welcome'
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('Home')
            }
          ],
          {cancelable: false}
        );
        db.close();
      } 
      catch (e){
   
    }
  }
    const buttonsAnimatedStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
        return {
          opacity: withTiming(imagePosition.value, { duration: 500 }),
          transform: [
            { translateY: withTiming(interpolation, { duration: 1000 }) },
          ],
        };
      });
    
      const formAnimatedStyle = useAnimatedStyle(() => {
        return {
          opacity:
            imagePosition.value === 0
              ? withDelay(400, withTiming(1, { duration: 800 }))
              : withTiming(0, { duration: 300 }),
        };
      });

      const formButtonAnimatedStyle = useAnimatedStyle(() => {
        return {
          transform: [{scale: formButtonScale.value}]
        }
      })



      const loginHandler = () => {
        imagePosition.value = 0;
        if (isRegistering) {
          runOnJS(setIsRegistering)(false);
        }
    
      };
    
      const registerHandler = () => {
        imagePosition.value = 0;
        if (!isRegistering) {
          runOnJS(setIsRegistering)(true);
        }
       
        
      };

    return (
        
   <View  style={styles.container}>

        <Text style={styles.texts}>Welcome To <Text style={styles.secondText}>QuickNews</Text></Text>
        <Animated.View style={styles.container}>
      

      <View style={styles.bottomContainer}>
      
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <TextInput
            placeholder="Username" 
            placeholderTextColor="black"
            style={styles.textInput}
            onChangeText={handleTitleChange}
            value={title}
          />

          {isRegistering && (
            <TextInput
              placeholder="Email"
              placeholderTextColor="black"
              style={styles.textInput}
            />
          )}
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            style={styles.textInput}
            // onChangeText={(value) => setPassword(value)}
          />
          <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
         
            <Pressable  onPress={createTask}> 
              <Text style={styles.buttonText}>
                {isRegistering ? "REGISTER" : "LOG IN"}
              </Text>
            </Pressable>
          </Animated.View>
          <Animated.View  style={[styles.formButton, formButtonAnimatedStyle]}>
          <Pressable  onPress={() => (imagePosition.value = 1)}>
            <Text style={styles.buttonText} >Back Home</Text>
          </Pressable>
        </Animated.View>
        </Animated.View>
      </View>
      {error && <Text>{error}</Text>}
    </Animated.View>
   
</View>
    );
}

export default LoginScreen;
