/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 首页功能
 */

import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Image} from "react-native";
import Colors from "../config/ComStyle";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Imgs from "../config/Imgs";

export default class HeaderCp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<EvilIcons.Button name={"navicon"} size={25} backgroundColor={Colors.theme} onPress={()=>{}}/>
				<Image source={Imgs.headerIcon} style={{width:30, height:30, borderRadius: 15 }}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	    width: 80,
		height: 60,
		backgroundColor: Colors.theme,
		flexDirection: "row",
		alignItems: "center"
	},
});