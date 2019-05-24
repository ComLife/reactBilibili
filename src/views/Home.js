import React from 'react'
import {View, Text, Button} from 'react-native'

export default class Home extends React.Component{
    render(){
        console.log("qqqqqqqqqqqqqqqq", this.props)
        return (
            <View>
                <Text>Home</Text>
            </View>
        )
    }
}