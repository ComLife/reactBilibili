import React from 'react'
import {View, Text, SafeAreaView, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Colors from "../../config/ComStyle";
import CustomScrollView from "./testCoponents/CustomScrollView";
const screen = Dimensions.get('window');
export default class TestComponentDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {title: 'SectionList滑动组件'},
                {title: 'FlatList滑动组件'},
                {title: 'GesturePasswords九宫格密码'},
                {title: 'CustomScrollView滑动删除'},
            ]
        }
    }

    _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                style={styles.TouchView}
                activeOpacity={0.5}
                onPress={()=>this.itemClick(index)}
            >
                <Text >{item.title}</Text>
            </TouchableOpacity>
        );
    }

    itemClick = (index) => {
        console.log("itemClick = ",index);
        switch (index+1){
            case 1:
                this.props.navigation.navigate('SectionListDup');
                break;
            case 2:
                this.props.navigation.navigate('FlatListDup');
                break;
            case 4:
                this.props.navigation.navigate('CustomScrollView');
                break;
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView/>
                <FlatList
                    data={this.state.data}
                    ListHeaderComponent={() => <View style={styles.headerView}><Text style={styles.header_footer_Text}>{'组件Demo'}</Text></View>}
                    ListFooterComponent={() => <View style={styles.footerView}><Text style={styles.header_footer_Text}>{'到底啦，没有啦！'}</Text></View>}
                    renderItem={this._renderItem}
                />
            </View>

        )
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
    footerView: {
        width: screen.width,
        backgroundColor: Colors.blueTitle,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_footer_Text: {
        fontSize: 18,
        color: Colors.white,
    },
    TouchView: {
        width: screen.width,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#909090'
    },
});