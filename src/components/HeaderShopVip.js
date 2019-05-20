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

export default class HeaderShopVip extends Component {
    // 构造
    constructor (props) {
        super(props);

    }

    drawNavigator = ()=>{
        this.props.navigation.openDrawer();
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderCp navigatorClick={()=>this.drawNavigator()}/>
                <Text style={styles.text}>会员购</Text>
                <View style={styles.endView}>
                    <TouchableOpacity style={{paddingHorizontal: 30}} onPress={()=>{console.log("HeaderHome is dowmload")}}>
                        <Image source={Imgs.shopping_cart_ok} style={styles.IconSize}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{console.log("HeaderHome is game")}}>
                        <Image source={Imgs.userIcon} style={styles.IconSize}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: Colors.theme,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        width:70,
        color: Colors.themeWhite,
        position: 'absolute',
        right: screen.width/2 - 35,
        fontWeight: 'bold',
    },
    endView:{
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    IconSize:{
        width:25,
        height:25
    }

});