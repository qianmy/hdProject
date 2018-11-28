/**
 * Created by qianmaoyin on 2018/11/27.
 */
import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Tab/HomeScreen';
import OrderScreen from './Tab/OrderScreen';
import MyCenterScreen from './Tab/MyCenterScreen';

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Order: OrderScreen,
    MyCenter: MyCenterScreen,
}, {
    defaultNavigationOptions: ({navigation}) => ({
        tabBarLabel: navigation.state.routeName === 'Home' ?
            '首页' : navigation.state.routeName === 'Order' ?
                '订单' : '我的',//tabBar标题文字
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = 'ios-home';//选中与未选中使用一个图标，不同状态变颜色
            } else if (routeName === 'Order') {
                iconName = `ios-list${focused ? '' : '-box'}`;//选中与否，使用不同的图标
            } else if (routeName === 'MyCenter') {
                iconName = 'ios-person';
            }

            return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor}/>;
        },
    }),
    tabBarOptions: {
        activeTintColor: '#00DBF5',//tab标题和图标，被选中状态下的颜色
        inactiveTintColor: '#B2CBE0',//tab标题和图标，未被选中状态下的颜色
        style: {//tabBar的样式
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#B4B4B4',
            height: 50
        },
        labelStyle: {//标签栏文字的样式
            marginTop: -2,
        },
    },
});
const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;