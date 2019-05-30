import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Colors from "../../../config/ComStyle";
import ContentItem from "./ContentItem";
import Icon from "react-native-vector-icons/AntDesign";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
const screen = Dimensions.get('window');

export default class VipContent extends Component {
    static propTypes = {
        vipContentData: PropTypes.array
    };

    static defaultProps = {

    };
    constructor(props){
        super(props)
    }

    ContentItem = (data)=>{
        console.log("ContentItem=", data);
        switch(data.Type){
            case 'drama':
                return data.list.map((item, index)=>{
                        return <View style={styles.contentItemView} key={index}>
                            <View style={styles.contentShow}>
                                {item.isExclusive?<View style={styles.exclusiveView}>
                                    <Text style={styles.exclusiveText}>独家</Text>
                                </View>:null}
                                {item.fans?<Text style={[styles.exclusiveText,{marginLeft: 5, position: 'absolute', bottom: 5}]}>{item.fans}</Text>:null}
                            </View>
                            <Text style={{color:Colors.themeBlack, marginTop: 5}}>{item.drama}</Text>
                            {item.updata?<Text style={{color:Colors.themeText, marginTop: 5}}>{item.updata}</Text>:null}
                        </View>
                    });
                break;
            case 'gift':
                break;
            case 'song':
                break;
            case 'store':
                break;
        }
    };

    render() {
        if(this.props.vipContentData){
            return this.props.vipContentData.map((item, index)=>{
                return <View style={styles.container} key={index}>
                    <View style={styles.headerTitle}>
                        <Text style={{color: Colors.themeBlack}}>{item.title}</Text>
                        <TouchableOpacity style={{flexDirection: 'row'}} activeOpacity={1}>
                            <Text style={{marginRight: 10, color: Colors.themeGray}}>查看更多</Text>
                            <Icon name={'right'} size={15} color={Colors.themeGray}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentView}>
                        {this.ContentItem(item)}
                        {/*<ContentItem/>*/}
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
        // paddingHorizontal: 10,
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
        paddingHorizontal: 5,
        // backgroundColor: Colors.lightCyan
    },
    contentItemView: {
        flex: 1,
        paddingHorizontal: 5,
    },
    contentShow: {
        height: 140,
        backgroundColor: Colors.themeGray,
        borderRadius: 5,
        //justifyContent: 'space-between'
    },
    exclusiveView: {
        width: 45,
        height: 20,
        borderRadius: 4,
        backgroundColor: Colors.theme,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: 5,
        marginTop: 5
    },
    exclusiveText: {
        color: Colors.themeWhite,
    }
});
