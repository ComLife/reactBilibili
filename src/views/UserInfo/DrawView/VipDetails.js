import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../../config/ComStyle";
import { SafeAreaView } from 'react-navigation';
import LogoTitle from '../../../components/HeaderBack'

// class LogoTitle extends React.Component {
//     render() {
//         console.log("LogoTitle=", this.props);
//         return (
//             <View style={styles.backView}>
//                 <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
//                     <Icon name={'arrowleft'} size={30} color={'#ffffff'}/>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
//                     <Icon name={'close'} size={30} color={'#ffffff'} style={{marginLeft: 30, marginRight: 20}}/>
//                 </TouchableOpacity>
//
//                 <Text style={styles.backText}>大会员</Text>
//             </View>
//
//         );
//     }
// }

export default class VipDetails extends Component {
    static navigationOptions = ({navigation})=>{
        console.log("navigationOptions", navigation);
        return{
            headerLeft: <LogoTitle navigation={navigation}/>,
            headerStyle: {
                backgroundColor: Colors.theme
            }
        }
    };
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: Colors.theme}}/>
                <Text style={styles.welcome}>VipDetails!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.themeBackground,
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    backView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    backText: {
        color: Colors.themeWhite,
        fontSize: 18,
        fontWeight: 'bold'
    }

});