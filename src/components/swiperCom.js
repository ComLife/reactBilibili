import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Colors from "../config/ComStyle";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
const screen = Dimensions.get('window');
import Swiper from 'react-native-swiper';

export default class SwiperCOm extends Component {
    static propTypes = {
        swiperData: PropTypes.array,
    };

    static defaultProps = {

    };
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Swiper style={styles.wrapper} horizontal={true} autoplay={true}
                    autoplayTimeout={3}
                    paginationStyle={{bottom:5, left:300}}
            >
                {this.props.swiperData.map((item, index)=>{
                    return <TouchableOpacity style={styles.slide1} key={index} activeOpacity={1} onPress={()=>{
                        this.swiperClick(item)
                    }}>
                        <Text style={styles.text}>{item.tip}</Text>
                    </TouchableOpacity>
                })}
            </Swiper>

        );
    }

    swiperClick = (data)=>{
        console.log("swiperClick is data =", data)
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 100,
    },

    slide1: {
        flex:1,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightCyan,
        borderRadius: 10
    },

    text: {
        color: Colors.themeWhite,
        fontSize: 30,
        fontWeight: 'bold'
    },
});
