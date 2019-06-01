/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *
 * 此滑动组件相比sectionList滑动多了上拉加载的显示，思路知识把footer这个组件进行了更改
 */

import React, {Component} from 'react';
import { StyleSheet, View, Dimensions, FlatList, Text, ActivityIndicator } from 'react-native';
import Colors from "../../../config/ComStyle";

const screen = Dimensions.get('window');
export default class FlatListDup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},
                {name: 'FlatList滑动组件Demo'},],
            refreshing: false,
        }

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

    renderItem = ({item, index}) => {
        return (
            <View style={styles.itemView}><Text style={styles.itemText}>{item.name+index}</Text></View>
        );
    };
    _header = function () {
        return (
            <View style = {styles.headerView}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, }}>我是头部组件</Text>
            </View>
        );
    };
    loadData = ()=>{
        this.setState({data: this.state.data.concat(this.state.data)})
    };

    _footer = () => (
        <View>
            <ActivityIndicator size="small" />
            <Text style={{fontSize: 14, alignSelf: 'center'}}>到底啦，没有啦！</Text>
        </View>
    );
    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index+""}
                ListHeaderComponent={this._header}//header头部组件
                ListFooterComponent={this._footer}//footer尾部组件
                renderItem={this.renderItem}
                ItemSeparatorComponent={() => <View style={{backgroundColor:Colors.grayColor, height:1}}></View>}  //分割线
                refreshing={this.state.refreshing}                  // 是否刷新 ，自带刷新控件
                onEndReachedThreshold={0.1}
                onRefresh={()=>{
                    this.refresh();
                }} // 刷新方法,写了此方法，下拉才会出现  刷新控件，使用此方法必须写 refreshing
                onEndReached = {() => {
                    this.loadData()
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        width: screen.width,
        backgroundColor: Colors.blueTitle,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
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