import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from 'styled-components';
import Tabs from 'my-app/screens/Tabs.js'
import LoginScreen from './LoginScreen';
import * as SQLite from 'expo-sqlite'
import { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getDbConnection, getTasks } from '../utils/db.js';
import { Items } from './LoginScreen';
import { Pressable } from 'react-native';
import { RefreshControl } from 'react-native';

const Stack = createStackNavigator();


function HomeScreen({navigation, Items}) {

      const [tasks, setTasks] = useState([]);
      const [error, setError] = useState(null);
 

      useLayoutEffect(
        function(){
          navigation.setOptions({
            headerRight: () =>(
              <Pressable  onPress={() =>{navigation.navigate('Menu')}}>
        <View style={{width: 40, height: 40, backgroundColor: 'white', borderRadius: 20}}>
           
                <Image
                style={{width: 40, height: 40}}
                 source= {require('../assets/icons8-user-100.png')}
                    // onPressItem={() => Linking.openURL(story.url)}
                  />
          
        </View>
        </Pressable>
            
            ),
          
          });
        },
        [navigation]
      )
 
    return (
        <>  
     
              <StatusBar style="auto" />
              <Tabs />
        </>
    );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
export default HomeScreen;

