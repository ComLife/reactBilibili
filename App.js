/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "./src/config/ComStyle";
import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator,
} from "react-navigation";
import Home from "./src/views/Home/Home";
import Channel from "./src/views/Channel/Channel";
import Dynamic from "./src/views/Dynamic/Dynamic";
import ShopVip from "./src/views/ShopVip/ShopVip";

const BottomTab = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: "首页",
			tabBarIcon:({ tintColor })=>{
				return <AntDesign name={"home"} size={25} style={{color:tintColor}}/>;
			}
		}
	},
	Channel: {
		screen: Channel,
		navigationOptions: {
			tabBarLabel: "频道",
			tabBarIcon:({ tintColor })=>{
				return <AntDesign name={"appstore-o"} size={25} style={{color:tintColor}}/>;
			}
		}
	},
	Dynamic: {
		screen: Dynamic,
		navigationOptions: {
			tabBarLabel: "动态",
			tabBarIcon:({ tintColor })=>{
				return <AntDesign name={"staro"} size={25} style={{color:tintColor}}/>;
			}
		}
	},
	ShopVip: {
		screen: ShopVip,
		navigationOptions: {
			tabBarLabel: "会员购",
			tabBarIcon:({ tintColor })=>{
				return <AntDesign name={"shoppingcart"} size={25} style={{color:tintColor}}/>;
			},
		}
	},
},{
	tabBarOptions: {
		activeTintColor: Colors.theme,
		labelStyle:{
			fontSize:12,
		},

		tabStyle: {
			// 控制首页图标和字体
		},
		style: {
			backgroundColor: Colors.themeWhite
		}
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
