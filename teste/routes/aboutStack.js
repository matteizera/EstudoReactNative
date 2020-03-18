import {createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import Info from '../screens/Info'
import About from '../screens/About'
const screens = {
    About:{
        screen: About,
        navigationOptions:{
            title:'About'
        }
    }
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#EFEFEF',
        headerStyle:{
            backgroundColor:'#e6e6e6',height:60
        }
    }
});

export default AboutStack;