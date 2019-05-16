/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * author: wangchunguang
 *
 * 频道功能
 */

import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from "react-native";
import Colors from "../config/ComStyle";
import Imgs from "../config/Imgs";
import HeaderCp from "./headerCp"

const screen = Dimensions.get('window');

export default class HeaderDynamic extends Component {
    // 构造
    constructor (props) {
        super(props);

    }

    drawNavigator = ()=>{
        console.log("drawNavigator")
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderCp navigatorClick={()=>this.drawNavigator()}/>
                <Text style={styles.text}>动态</Text>
                <View style={styles.endView}>
                    <TouchableOpacity onPress={()=>{console.log("HeaderHome is dowmload")}}>
                        <Image source={Imgs.new_direct_messageIcon} style={styles.IconSize}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: screen.width,
        height: 60,
        backgroundColor: Colors.theme,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        width:50,
        color: Colors.themeWhite,
        position: 'absolute',
        right: screen.width/2 - 25,
        fontWeight: 'bold',
    },
    endView:{
        flexDirection: 'row',
        marginRight: 15,
        justifyContent: 'space-around'
    },
    IconSize:{
        width:25,
        height:25
    }

});