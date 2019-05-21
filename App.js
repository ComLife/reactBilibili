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
	createDrawerNavigator, SafeAreaView,
} from "react-navigation";
import Home from "./src/views/Home/Home";
import Channel from "./src/views/Channel/Channel";
import Dynamic from "./src/views/Dynamic/Dynamic";
import ShopVip from "./src/views/ShopVip/ShopVip";
import MenuScreen from './src/views/UserInfo/MenuScreen';

import {Dimensions, ScrollView, View} from "react-native";
const screen = Dimensions.get('window');

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
			backgroundColor: Colors.themeBackground
		}
	}
});

const DraWer = createDrawerNavigator({
	BottomTab: {
		screen: BottomTab,
	},

}, {
	drawerPosition: 'left',
	drawerLockMode: 'unlocked',//设置是否响应手势
	drawerWidth: screen.width * 0.7, //抽屉的宽度或返回的功能。
	contentComponent: props => (<MenuScreen {...props}/>),
});

const RootStack = createStackNavigator({
	// app: BottomTab,
	DraWer: DraWer,
}, {
	defaultNavigationOptions: {
		initialRouteName: 'DraWer',
		header: null,
		headerMode: 'none',
	}
})



export default createAppContainer(RootStack);
