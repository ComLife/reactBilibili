/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {Platform, StyleSheet, Text, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator,
	createSwitchNavigator
} from "react-navigation";
import Home from "./src/Home";
import Channel from "./src/Channel";
import Dynamic from "./src/Dynamic";
import ShopVip from "./src/ShopVip";

const instructions = Platform.select({
	ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
	android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
});

const BottomTab = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: "首页",
			tabBarIcon:({ tintColor })=>{
				return <AntDesign name={"home"} size={30} style={{color:tintColor}}/>;
			}
		}
	},
	Channel: {
		screen: Channel,
		navigationOptions: {
			tabBarLabel: "频道",
			tabBarIcon:({ tintColor })=>{
				return <AntDesign name={"appstore-o"} size={30} style={{color:tintColor}}/>;
			}
		}
	},
	Dynamic: {
		screen: Dynamic,
		navigationOptions: {
			tabBarLabel: "动态",
			tabBarIcon:({ tintColor })=>{
				return <AntDesign name={"staro"} size={30} style={{color:tintColor}}/>;
			}
		}
	},
	ShopVip: {
		screen: ShopVip,
		navigationOptions: {
			tabBarLabel: "会员购",
			tabBarIcon:({ tintColor })=>{
				return <AntDesign name={"shoppingcart"} size={30} style={{color:tintColor}}/>;
			}
		}
	},
},{
	tabBarOptions: {
		activeTintColor: "#f45a8d",
		labelStyle:{
			fontSize:15,
		},
	}
});

const RootStack = createStackNavigator({
	app: BottomTab
},{
	defaultNavigationOptions: {
		header: null,
	}
});

export default createAppContainer(RootStack);
