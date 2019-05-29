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

export default class ContentItem extends Component {
    static propTypes = {
        ContentItemData: PropTypes.array
    };

    static defaultProps = {

    };
    constructor(props){
        super(props)
    }
    render() {
        if(this.props.ContentItemData){
            return this.props.ContentItemData.map((item, index)=>{
                return <View style={{width:(screen.width-50)/3}}>
                    <View style={{height:50, backgroundColor: Colors.themeGray}}></View>
                    <Text>鬼灭之刃</Text>
                    <Text>更新至第8话</Text>
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

});
