import React, {Component} from 'react';
import { StyleSheet, Text, View,SectionList,Dimensions} from 'react-native';   //引入js文件
import Colors from "../../../config/ComStyle";

const screen = Dimensions.get('window');

// 功能：点击标题A，让这一栏缩起来， 再点击，然后就展开
// 思路：缩起来的时候让sections里面的data为一个空数组，展开的时候为原本的数据
// 例： 缩起来为{ key: "A", data: [] },展开为{ key: "A", data: [{ title: "啊是啊" }, { title: "阿玛尼" }, { title: "爱你" }] },

//横向布局思路，可以修改数据结构如下
// {data: [{item: 1}, {item: 2}, {item: 3}]} // 修改之前
// {data: [[{item: 1}, {item: 2}, {item: 3}]]} 这样一个item里面就是一个数组了，想横排放几个，就在这个数组里放几个数据。
//渲染
// _renderImageItem = (item) => (
//     <View style={styles.imgContainer}>
//         {item.map((item, i) => (
//             <View key={i} style={styles.imgItemWrap}>
//                 <Image style={styles.imgItemStyle} source={require('xxx.png')} />
//             </View>
//         ))}
//     </View>
// )

export default class SectionListDup extends Component {
    constructor(props) { //构造器
        super(props);
        this.state = {
            refreshing: false,  //是否刷新,通过更改此属性来控制是否刷新
            sections:[   //数据源
                { key: "A", data: [{ title: "啊是啊" }, { title: "阿玛尼" }, { title: "爱你" }] },
                { key: "B", data: [{ title: "婊子" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
                { key: "C", data: [{ title: "陈鑫" }, { title: "吃点饭是" }] },
                { key: "D", data: [{ title: "大哥" }, { title: "地方" }, { title: "大大" },{ title: "大鸡鸡" }, { title: "大屌" }, { title: "大屌me干嘛" }] },
            ]
        };
    }
    /*刷新*/
    refresh(){
        this.setState({
            refreshing: true,
        });
        setTimeout(()=>{  //通过定时器来模拟刷新
            this.setState({
                refreshing: false,
            });
        },2000);
    }

    render() {
        return (
            <SectionList
                style={{marginTop:10,width:screen.width}}

                // contentContainerStyle={{  flexDirection: 'row',  //设置横向布局
                //     flexWrap: 'wrap',}} //设置换行显示
                // contentInset={{top:0,left:0,bottom:0,right:0}}   // 设置他的滑动范围

                keyExtractor = {this.extraUniqueKey}
                renderSectionHeader={this._sectionComp}             //区头
                renderItem={this._renderItem}                       //cell
                sections={this.state.sections}                      //数据源
                ItemSeparatorComponent={() => <View style={{backgroundColor:Colors.grayColor, height:1}}></View>}  //分割线
                stickySectionHeadersEnabled={false}                 //设置区头是否悬浮在屏幕顶部,默认是true
                ListEmptyComponent = {() => <Text>没有数据哦</Text>} // 数据为空时调用
                initialNumToRender = {2}                            //指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容
                onEndReachedThreshold = {0.001}                     //0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                onEndReached = {() => {alert(123)}}                 //当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
                setVerticalScrollBarEnabled = {false}
                setFastScrollEnabled = {false}
                refreshing={this.state.refreshing}                  // 是否刷新 ，自带刷新控件
                onRefresh={()=>{
                    this.refresh();
                }} // 刷新方法,写了此方法，下拉才会出现  刷新控件，使用此方法必须写 refreshing
                ListHeaderComponent={() => <View style={styles.headerView}><Text style={styles.header_footer_Text}>通讯录</Text></View>}
                ListFooterComponent={() => <View style={styles.footerView}><Text style={styles.header_footer_Text}>通讯录尾部</Text></View>}
            />
        );
    }
    extraUniqueKey = (item, index) => {
        return index;
    };
    _sectionComp = (info) => {
        var txt = info.section.key;
        return <View style={styles.subHeadView}><Text style={styles.subHeading}>{txt}</Text></View>
    };

    _renderItem = (info) => {
        var txt = '  ' + info.item.title;
        return <View style={styles.itemView}><Text style={styles.itemText}>{txt}</Text></View>
    };
}

const styles = StyleSheet.create({
    headerView: {
        width: screen.width,
        backgroundColor: Colors.blueTitle,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
    },
    header_footer_Text: {
        fontSize: 18,
        color: Colors.white,
    },
    footerView: {
        width: screen.width,
        backgroundColor: Colors.blueTitle,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subHeadView: {
        width: screen.width,
        height: 50,
        backgroundColor: Colors.CyanTitle,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subHeading: {
        color: 'white',
        fontSize: 30
    },
    itemView: {
        height: 50,
        justifyContent: 'center',
    },
    itemText: {
        backgroundColor: Colors.white,
        color: '#5C5C5C',
        fontSize: 15
    },
});