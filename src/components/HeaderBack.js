import React, {Component} from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import Colors from "../config/ComStyle";

export default class LogoTitle extends Component {
	render() {
		console.log("LogoTitle=", this.props);
		return (
			<View style={styles.backView}>
				<TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
					<Icon name={'arrowleft'} size={30} color={'#ffffff'}/>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
					<Icon name={'close'} size={30} color={'#ffffff'} style={{marginLeft: 30, marginRight: 20}}/>
				</TouchableOpacity>

				<Text style={styles.backText}>大会员</Text>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	backView: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
	},
	backText: {
		color: Colors.themeWhite,
		fontSize: 18,
		fontWeight: 'bold'
	}

});