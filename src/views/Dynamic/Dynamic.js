import React, {Component} from "react";
import {Platform, StyleSheet, Text, View } from "react-native";
import Colors from "../../config/ComStyle";
import { SafeAreaView } from 'react-navigation';
import HeaderDynamic from "../../components/HeaderDynamic";

export default class Dynamic extends Component {
	render() {
		return (
			<View style={styles.container}>
				<SafeAreaView style={{backgroundColor: Colors.theme}}/>
				<HeaderDynamic {...this.props}/>
				<Text style={styles.welcome}>Dynamic!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.themeBackground,
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},

});