/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * author: wangchunguang
 *
 * 首页功能
 */

import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import Colors from "../config/ComStyle";
import Imgs from "../config/Imgs";
import HeaderCp from "./headerCp"

export default class HeaderHome extends Component {
	// 构造
	constructor (props) {
		super(props);
	}

	drawNavigator = ()=>{
		this.props.navigation.openDrawer();
	};

	render() {
		return (
			<View style={styles.container}>
                <HeaderCp navigatorClick={()=>this.drawNavigator()}/>
                <TouchableOpacity onPress={()=>{console.log("HeaderHome is seach")}}>
					<View style={styles.searchView}>
						<Image source={Imgs.searchIcon} style={{width:15, height:15, marginLeft: 5}}/>
					</View>
				</TouchableOpacity>
				<View style={styles.endView}>
					<TouchableOpacity onPress={()=>{console.log("HeaderHome is game")}}>
						<Image source={Imgs.gameIcon} style={styles.IconSize}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{console.log("HeaderHome is dowmload")}}>
						<Image source={Imgs.downloadIcon} style={styles.IconSize}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{console.log("HeaderHome is message")}}>
						<Image source={Imgs.messageIcon} style={styles.IconSize}/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 60,
		backgroundColor: Colors.theme,
		flexDirection: "row",
		alignItems: "center"
	},
	searchView: {
		height: 25,
		width: 150,
		justifyContent: 'center',
		backgroundColor: '#ffafc9',
		marginLeft: 15,
		marginRight:15,
		borderRadius: 12
	},
	endView:{
		flex:1,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	IconSize:{
		width:25,
		height:25
	}


});