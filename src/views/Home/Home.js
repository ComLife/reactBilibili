import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, SafeAreaView} from "react-native";
import Colors from "../../config/ComStyle";
import HeaderHome from "../../components/HeaderHome";

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<SafeAreaView style={{backgroundColor: Colors.theme}}/>
				<HeaderHome/>
				<Text style={styles.welcome}>Home!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		backgroundColor: Colors.themeBackground,
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},

});