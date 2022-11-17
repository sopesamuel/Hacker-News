import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import NewsScreen from './PostScreen';
import MenuScreen from './MenuScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
   <Tab.Navigator
         screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBorderRadius: 15,
        tabBarActiveTintColor: '#FAC898',
        tabBarStyle: { 
        position: 'relative', 
        elevation: 0,
        borderRadiusTop: 15,
        height: 60 ,
        headerTitleAlign: 'left',
        ...styles.shadow
        }
      }}
   >

     <Tab.Screen name='Newscreen' component={NewsScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../assets/menu.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height:25,
                                tintColor: focused ? '#FAC898' : '#748c94'
                            }}
                        />
                        <Text
                        style={{color: focused ? '#FAC898' : '#748c94', fontSize: 12, marginBottom: 10}}
                        >QuickNews</Text>
                    </View>
                )
            }}/>
    <Tab.Screen name='Home' component={LoginScreen}
       options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10, marginBottom: 10}}>
                        <Image 
                            source={require('../assets/login.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height:25,
                                tintColor: focused ? '#FAC898' : '#748c94'
                            }}
                        />
                        <Text
                        style={{color: focused ? '#FAC898' : '#748c94', fontSize: 12, marginBottom: 10}}
                        >Login</Text>
                    </View>
                )
            }} 
    />
    {/* <Tab.Screen name='ViewImage' component={MenuScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10, marginBottom: 10}}>
                        <Image 
                            source={require('../assets/icons8-user-100.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height:25,
                                tintColor: focused ? '#FAC898' : '#748c94'
                            }}
                        />
                        <Text
                        style={{color: focused ? '#FAC898' : '#748c94', fontSize: 12, marginBottom: 10}}
                        >About</Text>
                    </View>
                )
            }}/> */}
   </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        ShadowOffset:{
            WIDTH: 0,
            HEIGHT: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;