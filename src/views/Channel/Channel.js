import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../config/ComStyle";
import HeaderChannel from "../../components/HeaderChannel";
import { SafeAreaView, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import Ghome from '../Home'
const screen = Dimensions.get('window');
export default class Channel extends Component {
	constructor(props) {
		super(props);
		console.log("Channel =", this.props);
	}

    componentWillMount() {
        this.TopTab = createAppContainer(this.topTab());
    }

	topTab = ()=>createMaterialTopTabNavigator({
		tab1:{
			screen: Ghome
		},
        tab2:{
            screen: Ghome
        },
        tab3:{
            screen: Ghome
        },
        tab4:{
            screen: Ghome
        },
		tab5:{
            screen: Ghome
        },
        tab6:{
            screen: Ghome
        }
	},{

        tabBarOptions: {
            style: {
                height: 40,
				backgroundColor: Colors.themeWhite
			},
            labelStyle: {
            	color: Colors.themeText,
				marginBottom: 10,
			},
			tabStyle: {
            	width: screen.width/6
			},
            indicatorStyle: {
            	backgroundColor: Colors.theme
			},
            scrollEnabled: true


		}
	});
	render() {
		const {TopTab} = this;
		return (
			<View style={styles.container}>
				<SafeAreaView style={{backgroundColor: Colors.theme}}/>
                <HeaderChannel {...this.props}/>
				<TopTab/>
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