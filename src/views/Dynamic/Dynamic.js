import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, SafeAreaView} from "react-native";
import Colors from "../../config/ComStyle";

export default class Dynamic extends Component {
	render() {
		return (
			<View style={styles.container}>
				<SafeAreaView/>
				<Text style={styles.welcome}>Dynamic!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.themeBackground,
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},

});