import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

import Page1 from './page1'
import Page2 from './page2'

const icon1b = require('./assets/icon1-b.png')
const icon1r = require('./assets/icon1-r.png')
const icon2b = require('./assets/icon2-b.png')
const icon2r = require('./assets/icon2-r.png')

const styles = StyleSheet.create({
    rect21: {
        width: 21,
        height: 21
    }
})

const config = [{
    Home: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ focused }) => (<Image source={focused ? icon2r : icon2b} style={styles.rect21} />)
        }
    },
    Vip: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: 'VIP',
            tabBarIcon: ({ focused }) => (<Image source={focused ? icon1r : icon1b} style={styles.rect21} />)
        }
    }
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: '#AE9575',
        showIcon: true,
        showLabel: true
    }
}]

const mainRouter = [{
    HomeTab: {
        screen: createBottomTabNavigator(...config),
        navigationOptions: {
            header: null,
            headerBackTitle: null
        }
    }
},
{
    initialRouteName: 'HomeTab'
}]

const AppNavigator = createStackNavigator(...mainRouter);

export default createAppContainer(AppNavigator)