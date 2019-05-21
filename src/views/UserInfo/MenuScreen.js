/**
 * 左边栏配置面板
 * 
 * Created by 材主<diamont1001@163.com> on 2019/04/19.
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Dimensions, Text, Image,} from "react-native";
import {SafeAreaView} from "react-navigation";
import Colors from "../../config/ComStyle";
import Imgs from "../../config/Imgs";


type Props = {};
const screen = Dimensions.get('window');
export default class MenuScreen extends Component<Props> {
  constructor(props){
    super(props);
    this.configList1 = [
      {
        title: '首页',
        icon: Imgs.homeIcon,
      },
      {
        title: '历史记录',
        icon: Imgs.historyIcon,
      },
      {
        title: '离线缓存',
        icon: Imgs.cacheIcon,
      },
      {
        title: '我的收藏',
        icon: Imgs.colletIcon,
      },
      {
        title: '稍后再看',
        icon: Imgs.laterLookIcon,
      },
    ];
    this.configList2 = [
      {
        title: '直播中心',
        icon: Imgs.ios_tvIcon,
      },
      {
        title: '免流量服务',
        icon: Imgs.flowIcon,
      },
      {
        title: '我的订单',
        icon: Imgs.orderIcon,
      },
      {
        title: '会员购中心',
        icon: Imgs.VIPIcon,
      },
      {
        title: '联系客服',
        icon: Imgs.service_fillIcon,
      },
    ]
  }

  TitleHeaderView(){
    return <View style={styles.avatarWrapper}>

    </View>
  }

  MemberBenefitsView(){
    return <View style={styles.MemberView}>

    </View>
  }

  serverView(list){
    return <View style={styles.serverView}>
      {list.map((item, i)=>{
        return <View style={styles.serverItemView} key={i}>
          <Image source={item.icon} style={{width:20, height:20, marginLeft: 20}}/>
          <Text style={{ marginLeft: 30, color: Colors.themeText }}>{item.title}</Text>
        </View>
      })}
    </View>
  }

  render() {
    console.log(" MenuScreen this.props=",this.props);
    return (
        <View style={styles.container}>
          <ScrollView
              bounces = {false}
          >
            <SafeAreaView style={{backgroundColor: Colors.theme}}/>
            {this.TitleHeaderView()}
            {this.MemberBenefitsView()}
            {this.serverView(this.configList1)}
            {this.serverView(this.configList2)}
          </ScrollView>
         <View style={{height: 60}}></View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeBackground,
    opacity: 0.9,
  },

  avatarWrapper: {
    height: screen.width*0.35,
    backgroundColor: Colors.theme,
  },
  MemberView: {
    height: 60,
    backgroundColor: Colors.themeWhite,
  },
  serverView:{
    paddingTop: 10,
    paddingBottom: 10,
    borderTopColor: Colors.themeGray,
    borderTopWidth: 0.2,
  },
  serverItemView:{
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarName: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  avatarDesc: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    opacity: .8,
  },
  configWrapper: {
    flex: 1,
    paddingTop: 20,
  },
})