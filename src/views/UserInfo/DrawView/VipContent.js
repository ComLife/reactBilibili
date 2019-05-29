import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Colors from "../../../config/ComStyle";
import Icon from "react-native-vector-icons/AntDesign";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
const screen = Dimensions.get('window');

class ContentItem extends Component {
    static propTypes = {
        ContentItemData: PropTypes.array
    };

    static defaultProps = {

    };
    constructor(props){
        super(props)
    }
    render() {
        return <View style={{width:(screen.width-50)/3}}>
            <View style={{height:50, backgroundColor: Colors.themeGray}}></View>
            <Text>鬼灭之刃</Text>
            <Text>更新至第8话</Text>
        </View>
        // if(this.props.ContentItemData){
        //     return this.props.ContentItemData.map((item, index)=>{
        //
        //     });
        // }else{
        //     return null;
        // }
    }
}

export default class VipContent extends Component {
    static propTypes = {
        vipContentData: PropTypes.array
    };

    static defaultProps = {

    };
    constructor(props){
        super(props)
    }
    render() {
        if(this.props.vipContentData){
            return this.props.vipContentData.map((item, index)=>{
                return <View style={styles.container} key={index}>
                    <View style={styles.headerTitle}>
                        <Text style={{color: Colors.themeBlack}}>{item.Type}</Text>
                        <TouchableOpacity style={{flexDirection: 'row'}} activeOpacity={1}>
                            <Text style={{marginRight: 10, color: Colors.themeGray}}>查看更多</Text>
                            <Icon name={'right'} size={15} color={Colors.themeGray}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentView}>
                        <ContentItem/>
                    </View>
                </View>
            });
        }else{
            return null;
        }
    }

}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: Colors.themeWhite,
    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    contentView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
