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
                return data.list.map((item, index)=>{
                    return <View style={styles.contentItemView} key={index}>
                        <View style={styles.giftItem}></View>
                        {item.theme?<Text style={{color:Colors.themeBlack, marginTop: 5}}>{item.theme}</Text>:null}
                        {item.price?<Text style={{color:Colors.themeGray, fontSize: 11, marginTop: 5, textDecorationLine:'line-through'}}>{item.price}</Text>:null}
                        {item.tip?<Text style={{color:Colors.theme, fontSize: 13, marginTop: 5}}>{item.tip}</Text>:null}
                    </View>
                });
                break;
            case 'song':
                return data.list.map((item, index)=>{
                    return <View style={styles.songView} key={index}>
                        <View style={styles.songItemView}></View>
                        <Text style={{marginTop: 5, color:Colors.themeBlack, fontSize: 12}}>{item.tip}</Text>
                    </View>
                });
                break;
            case 'store':
                return data.list.map((item, index)=>{
                    return <View style={styles.storeView} key={index}>
                        <View style={styles.storeItemView}>
                            <View style={styles.storeContent}></View>
                            <Text style={styles.storeText}>{item.theme}</Text>
                            <Text style={[styles.storeText, {fontSize: 12}]}>{item.tip}</Text>
                        </View>
                    </View>
                });
                break;
        }
    };

    render() {
        if(this.props.vipContentData){
            return this.props.vipContentData.map((item, index)=>{
                return <View style={styles.container} key={index}>
                    <View style={styles.headerTitle}>
                        <Text style={{color: Colors.themeBlack, marginLeft: 10}}>{item.title}</Text>
                        <TouchableOpacity style={{flexDirection: 'row', marginRight: 10}} activeOpacity={1}>
                            <Text style={{marginRight: 10, color: Colors.themeGray}}>查看更多</Text>
                            <Icon name={'right'} size={15} color={Colors.themeGray}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentView}>
                        {this.ContentItem(item)}
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
    },
    giftItem: {
        height: 100,
        backgroundColor: Colors.themeGray,
        borderRadius: 5,
    },
    songView:{
        flex: 1,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    songItemView: {
        height: 80,
        width: 50,
        backgroundColor: Colors.themeGray,
        borderRadius: 5,
    },
    storeView: {
        flex: 1,
        paddingHorizontal: 5,
    },
    storeItemView: {
        //height: 130,
        borderColor: Colors.themeGray,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    },
    storeText: {
        marginTop: 5,
        color:Colors.themeBlack,
    },
    storeContent: {
        height:70,
        backgroundColor: Colors.themeGray,
        borderRadius: 5,
    }
});
