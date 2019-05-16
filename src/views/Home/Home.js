import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from 'react-navigation';
import Colors from "../../config/ComStyle";
import HeaderHome from "../../components/HeaderHome";
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';


const screen = Dimensions.get('window');
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabShow: false,
            label: ['直播', '推荐', '热门', '追番', '影视', '70年'],
			channel: [{title: '直播', type: 1},{title: '推荐', type: 2},{title: '热门', type: 3},{title: '追番', type: 4},{title: '影视', type: 5},{title: '70年', type: 6}]
        };
    }

	render() {
		return (
			<View style={styles.container}>
				<SafeAreaView style={{backgroundColor: Colors.theme }}/>
				<HeaderHome/>
				<ScrollableTabView
                    tabBarTextStyle={{width:screen.width/6, textAlign: 'center'}}
                    renderTabBar={() =>
                        <ScrollableTabBar
                            style={{height:35}}
                            tabStyle={styles.tabStyles}
                        />
                    }
                    tabBarBackgroundColor='#fff'
                    tabBarActiveTextColor='#b4282d'
                    tabBarInactiveTextColor='#333'
                    tabBarUnderlineStyle={styles.tabBarUnderline}
                >
					{
                        this.state.channel.map((item, index) => {
							return <Text style={{fontSize:15}} tabLabel={item.title} key={item.type}>{item.title}</Text>
                            // if (item == '推荐') {
                            //     return (
                            //         <ScrollView tabLabel={item} key={index}>
                            //             <Recommend/>
                            //         </ScrollView>
                            //     )
                            // } else {
                            //     return (
                            //         <Otherpage tabLabel={item} key={index} />
                            //     )
                            // }
                        })
					}
				</ScrollableTabView>
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
    tabBarUnderline: {
        backgroundColor: Colors.theme,
        height: 2,
    },

	tabStyles: {
        height: 34,
		width:screen.width / 6,
	}

});