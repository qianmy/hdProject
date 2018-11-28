import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import TabScreen from './modules/TabScreen';
import PageScreen from './modules/PageScreen';




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
    },
);
export default createAppContainer(AppNavigator);