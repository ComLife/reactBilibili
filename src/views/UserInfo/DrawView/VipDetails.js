import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from "react-native";
import Colors from "../../../config/ComStyle";
import { SafeAreaView } from 'react-navigation';
import LogoTitle from '../../../components/HeaderBack';
import Imgs from '../../../config/Imgs';
import SwiperCom from '../../../components/swiperCom';
import Icon from "react-native-vector-icons/AntDesign";
import VipContent from './VipContent'

const vipItem = [{title: '会员积分', level: '0分'},
        {title: '音乐下载', level: '0首'},
        {title: 'B币券', level: '0币'},
        {title: '卡券包', level: '特权礼包'}
    ];

const swiperData = [
        {tip: '第一页'},
        {tip: '第二页'},
        {tip: '第三页'},
    ];

const vipContentData = [
    {Type: '番剧', list: 3},
    {Type: '国创', list: 3},
    {Type: '电影', list: 3},
    {Type: '大福袋', list: 2},
    {Type: '年度专享游戏礼包', list: 2},
    {Type: '付费音乐任性听', list: 3},
    {Type: '头像挂件兑换', list: 3},
    {Type: '卡片装饰商城', list: 2}
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

    vipData = (data) =>{
        console.log("vipData", data.title)
    };

    render() {
        return (
            <View style={styles.container}>

                <SafeAreaView style={{backgroundColor: Colors.theme}}/>
                <ScrollView>
                    <View style={{backgroundColor: Colors.themeWhite, height: 230}}>
                        <TouchableOpacity style={styles.titleStyle} activeOpacity={1}>
                            <View style={{marginLeft: 15}}>
                                <View style={styles.titleView}>
                                    <Image source={Imgs.headerIcon} style={{width:30, height:30, borderRadius: 15}}/>
                                    <Text style={styles.nickText}>昵称</Text>
                                    <Icon name={'right'} size={15} color={Colors.themeWhite} style={{marginLeft: 5}}/>
                                </View>
                                <Text style={styles.vipTipText}>升级大会员福利多多</Text>
                                <TouchableOpacity style={styles.dreVipView} activeOpacity={1}>
                                    <Text style={styles.dreVipText}>开通大会员</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.titleBotView}>
                            {vipItem.map((item, index)=>{
                                return <TouchableOpacity key={index} activeOpacity={0.5}
                                                         style={[styles.titleItemView, {borderRightWidth:index===3?0:1}]}
                                                         onPress={()=>{this.vipData(item)}}
                                >
                                    <Text style={{color: Colors.themeGray}}>{item.title}</Text>
                                    <Text style={{color: Colors.themeGray}}>{item.level}</Text>
                                </TouchableOpacity>
                            })}
                        </View>
                    </View>
                    <View style={styles.swiperView}>
                        <SwiperCom swiperData={swiperData}/>
                    </View>
                    <VipContent vipContentData={vipContentData}/>
                </ScrollView>
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
        borderRadius: 10,
        justifyContent: 'center'
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nickText: {
        marginHorizontal: 10,
        color: Colors.themeWhite,
        fontSize: 18
    },
    vipTipText: {
        color: Colors.themeWhite
    },
    dreVipView: {
        height: 35,
        width: 100,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: Colors.theme,
        justifyContent: 'center',
        alignItems: 'center'
    },

    dreVipText: {
        color: Colors.themeWhite,
        fontSize: 16,
        fontWeight: 'bold'

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
        paddingVertical: 10,
    }
});