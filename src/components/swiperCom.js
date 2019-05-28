import React, { Component } from 'react';
import Colors from "../config/ComStyle";
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window')

export default class hello extends Component {
    render() {
        return (
            <Swiper style={styles.wrapper} horizontal={true} autoplay={true}
                    dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 100,}} />}
                    autoplayTimeout={1}
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
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        flex: 1
    }
});
