import React, { Component } from 'react';
import Colors from "../config/ComStyle";
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
const screen = Dimensions.get('window');
import Swiper from 'react-native-swiper';

export default class hello extends Component {

    render() {
        console.log("screen.width", screen.width)
        return (
            <Swiper style={styles.wrapper} horizontal={true} autoplay={true}
                    autoplayTimeout={3}
                    paginationStyle={{bottom:5, left:300}}
            >
                <View style={styles.slide1}>
                    <Text style={styles.text}>第一页</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>第二页</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>第三页</Text>
                </View>
            </Swiper>

        );
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
        backgroundColor: '#9DD6EB',
        borderRadius: 10
    },

    slide2: {
        flex:1,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
        borderRadius: 10
    },

    slide3: {
        flex:1,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
        borderRadius: 10
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
});
