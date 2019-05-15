/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 首页功能
 */

import React, {Component,} from "react";
import PropTypes from 'prop-types';
import {Platform, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import Imgs from "../config/Imgs";

export default class HeaderCp extends Component {

	static defaultProps = {

	};

	static propTypes = {
		navigatorClick: PropTypes.func
	};

	// 构造
	constructor (props) {
		super(props)

	}

	render() {
		return (
			<View >
				<TouchableOpacity style={styles.headerTouchView} onPress={()=>{this.props.navigatorClick()}}>
					<Image source={Imgs.foldIcon} style={[styles.IconSize, {marginRight: 10}]}/>
					<Image source={Imgs.headerIcon} style={[styles.IconSize, {borderRadius: 15}]}/>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headerTouchView: {
		height: 60,
		flexDirection: "row",
		alignItems: "center",
	},
	IconSize: {
		width:25,
		height:25,
	}
});