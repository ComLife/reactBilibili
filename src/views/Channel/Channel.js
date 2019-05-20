import React, {Component} from "react";
import {Platform, StyleSheet, Text, View } from "react-native";
import Colors from "../../config/ComStyle";
import HeaderChannel from "../../components/HeaderChannel";
import { SafeAreaView } from 'react-navigation';

export default class Channel extends Component {
	constructor(props) {
		super(props);
		console.log("Channel =", this.props);
	}
	render() {
		return (
			<View style={styles.container}>
				<SafeAreaView style={{backgroundColor: Colors.theme}}/>
                <HeaderChannel {...this.props}/>
                <Text style={styles.welcome}>Channel!</Text>
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