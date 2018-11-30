import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import TabScreen from './modules/TabScreen';
import PageScreen from './modules/PageScreen';
import LoginScreen from './modules/LoginScreen';



const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: TabScreen,
            navigationOptions:{
                header:null,
            }
        },
        Page: {
            screen: PageScreen,
            navigationOptions:{
                header:null,
            }
        },
        Login: {
            screen: LoginScreen,
            navigationOptions:{
                header:null,
            }
        },
    },
);
export default createAppContainer(AppNavigator);