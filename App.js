import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from 'styled-components';
import Tabs from './screens/Tabs'
import { Dimensions } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { initDatabase } from './utils/db';
import Todo from './screens/Todo'
import MenuScreen from './screens/MenuScreen';
import { FlipOutEasyY } from 'react-native-reanimated';


const Stack = createNativeStackNavigator();


export default function App() {


  useEffect(function(){
    async function init(){
      await initDatabase();
    }
    init();
  }, []);

  

  return (

  <>


  <NavigationContainer>
        <Stack.Navigator 

          initialRouteName='Home'
          screenOptions={{
            headerStyle:{
              backgroundColor: '#FAD5A5'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold'
            },
          }}
        >
                <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Home'}}/>
                <Stack.Screen name='Todo' component={Todo} options={{title: 'Todo'}}/>
                <Stack.Screen name='Login' component={LoginScreen} options={{title: 'Login'}}/>
                <Stack.Screen name='Menu' component={MenuScreen} options={{title: 'About Me'}}/>
        </Stack.Navigator>
 
      </NavigationContainer>
            

            
     
  </>
    
   
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



