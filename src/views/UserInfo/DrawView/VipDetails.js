import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ImageBackground} from "react-native";
import Colors from "../../../config/ComStyle";
import { SafeAreaView } from 'react-navigation';
import LogoTitle from '../../../components/HeaderBack';
import Imgs from '../../../config/Imgs';
import SwiperCom from '../../../components/swiperCom';

const vipItem = [{title: '会员积分', level: '0分'},
        {title: '音乐下载', level: '0首'},
        {title: 'B币券', level: '0币'},
        {title: '卡券包', level: '特权礼包'}
    ];

const screen = Dimensions.get('window');
export default class VipDetails extends Component {
    static navigationOptions = ({navigation})=>{
        console.log("navigationOptions", navigation);
        return{
            headerLeft: <LogoTitle navigation={navigation}/>,
            headerStyle: {
                backgroundColor: Colors.theme
            }
        }
    };
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: Colors.theme}}/>
                <View style={{backgroundColor: Colors.themeWhite, height: 230}}>
                    <View style={styles.titleStyle}>
                    </View>
                    <View style={styles.titleBotView}>
                        {vipItem.map((item, index)=>{
                            return <View key={index} style={[styles.titleItemView, {borderRightWidth:index===3?0:1}]}>
                                <Text style={{color: Colors.themeGray}}>{item.title}</Text>
                                <Text style={{color: Colors.themeGray}}>{item.level}</Text>
                            </View>
                        })}
                    </View>
                </View>
                <View style={styles.swiperView}>
                    <SwiperCom/>
                </View>
                <Text style={styles.welcome}>VipDetails!</Text>
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
    },
    titleStyle: {
        marginTop: 10,
        width: screen.width - 20,
        height: 150,
        marginHorizontal: 10,
        backgroundColor: Colors.themeGray,
        borderRadius: 10
    },
    titleBotView: {
        flexDirection: 'row',
        height: 50,
        marginHorizontal: 10,
        marginTop: 10
    },
    titleItemView: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: (screen.width - 20) / 4,
        borderRightColor: Colors.themeGray,
        borderRightWidth: 1
    },
    swiperView: {
        marginTop: 10,
        height: 120,
        backgroundColor: Colors.themeWhite,
        paddingVertical: 10
    }
});