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
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Imgs from "../config/Imgs";
import HeaderCp from "./headerCp"

export default class HeaderHome extends Component {
	render() {
		return (
			<View style={styles.container}>
                <HeaderCp/>
				<Entypo.Button name={"game-controller"} size={25} backgroundColor={Colors.theme} style={{color:Colors.themeWhite}} onPress={()=>{}}/>
				<SimpleLineIcons.Button name={"cloud-download"} size={25} backgroundColor={Colors.theme} style={{color:Colors.themeWhite}} onPress={()=>{}}/>
				<AntDesign.Button name={"message1"} size={25} backgroundColor={Colors.theme} style={{color:Colors.themeWhite}} onPress={()=>{}}/>
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

});