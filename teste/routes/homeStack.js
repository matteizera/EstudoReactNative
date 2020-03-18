import {createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import Info from '../screens/Info'
import React from 'react'
const screens = {
    Home:{
        screen: Home,
        navigationOptions:{
            title:'HomePage'
        }
    },
    Info:{
        screen: Info,
        navigationOptions:{
            title:'InfoPage'
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#EFEFEF',
        headerStyle:{
            backgroundColor:'#e6e6e6',height:60
        }
    }
});

export default HomeStack;