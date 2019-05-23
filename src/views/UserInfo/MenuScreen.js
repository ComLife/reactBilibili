/**
 * 左边栏配置面板
 * 
 * Created by 材主<diamont1001@163.com> on 2019/04/19.
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Dimensions, Text, Image, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-navigation";
import Colors from "../../config/ComStyle";
import Imgs from "../../config/Imgs";


type Props = {};
const screen = Dimensions.get('window');
export default class MenuScreen extends Component<Props> {
  constructor(props){
    super(props);
    this.configList1 = [
      {title: '首页', icon: Imgs.homeIcon,},
      {title: '历史记录', icon: Imgs.historyIcon,},
      {title: '离线缓存', icon: Imgs.cacheIcon,},
      {title: '我的收藏', icon: Imgs.colletIcon,},
      {title: '稍后再看', icon: Imgs.laterLookIcon,},
    ];
    this.configList2 = [
      {title: '直播中心', icon: Imgs.ios_tvIcon,},
      {title: '免流量服务', icon: Imgs.flowIcon,},
      {title: '我的订单', icon: Imgs.orderIcon,},
      {title: '会员购中心', icon: Imgs.VIPIcon,},
      {title: '联系客服', icon: Imgs.service_fillIcon,},
    ];
    this.configList3 = [
      {title: '投稿', icon: Imgs.uploadIcon,},
      {title: '创作中心', icon: Imgs.lightBulbIcon,},
      {title: '热门活动', icon: Imgs.hotIcon,},
    ];
    this.configList4 = [
      {title: '设置', icon: Imgs.settingIcon,},
      {title: '主题', icon: Imgs.skin_fillIcon,},
      {title: '夜间', icon: Imgs.StarNightIcon,},
    ];
    this.configList5 = [
      {title: '动态' }, {title: '关注' }, {title: '粉丝' },
    ]
  }

  TitleHeaderView(){
    return <View style={styles.avatarWrapper}>

    </View>
  }

  MemberBenefitsView(){
    return <TouchableOpacity style={styles.MemberView} onPress={()=>{this.props.navigation.navigate('VipDetails')}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.memVipText}>我的大会员</Text>
        <Text style={styles.memInterText}>了解更多权益</Text>
      </View>
      <Text>开通大会员畅看番剧国创</Text>
    </TouchableOpacity>
  }

  serverView(list){
    return <View style={styles.serverView}>
      {list.map((item, index)=>{
        return <TouchableOpacity style={styles.serverItemView} key={index}>
          <Image source={item.icon} style={{width:20, height:20, marginLeft: 20}}/>
          <Text style={{ marginLeft: 30, color: Colors.themeText }}>{item.title}</Text>
        </TouchableOpacity>
      })}
    </View>
  }

  bottomView(list){
    return list.map((item, index)=>{
      return <TouchableOpacity key={index} style={styles.settingItem}>
        <Image source={item.icon} style={{width:20, height:20}}/>
        <Text style={{ marginLeft: 5, color: Colors.themeText }}>{item.title}</Text>
      </TouchableOpacity>
    })
  }

  dynamicView(list){
    return <View style={styles.daynamicView}>
      {list.map((item, index)=>{
        return <TouchableOpacity style={styles.daynamicItem} key={index}>
          <Text style={{ color: Colors.themeText, marginBottom: 8 }}>0</Text>
          <Text style={{ color: Colors.themeText }}>{item.title}</Text>
        </TouchableOpacity>
      })}
    </View>
  }

  render() {
    console.log(" MenuScreen this.props=",this.props);
    return (
        <View style={styles.container}>
          <ScrollView
              bounces = {false}
              showsVerticalScrollIndicator={false}
          >
            <SafeAreaView style={{backgroundColor: Colors.theme}}/>
            {this.TitleHeaderView()}
            {this.MemberBenefitsView()}
            {this.dynamicView(this.configList5)}
            {this.serverView(this.configList1)}
            {this.serverView(this.configList3)}
            {this.serverView(this.configList2)}
          </ScrollView>
         <View style={styles.settingView}>
           {this.bottomView(this.configList4)}
         </View>
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    borderBottomColor: Colors.themeGray,
    borderBottomWidth: 0.5,
  },
  memVipText: {
    color: Colors.theme,
    fontWeight: 'bold',
    fontSize: 16,

  },
  memInterText: {
    marginLeft: 5,
    color: Colors.themeText,
  },
  serverView:{
    paddingTop: 15,
    paddingBottom: 15,
    borderTopColor: Colors.themeGray,
    borderTopWidth: 0.5,
  },
  daynamicView: {
    flexDirection: 'row',
    height: 60,
    marginTop: 10,
    backgroundColor: Colors.themeWhite,
  },
  daynamicItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serverItemView:{
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingView: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: Colors.themeGray,
    borderTopWidth: 0.3,
  },
  settingItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});