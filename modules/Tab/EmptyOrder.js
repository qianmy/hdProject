import React,{Component} from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class EmptyOrder extends Component{
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <View style={styles.header}>
                    <Text style={styles.titleword}>未完成66</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.remind}>亲爱的小主，快去下单吧,</Text>
                    <Text style={styles.remind}>填满人家的心嘛~~~</Text>
                    <Ionicons
                        name={'ios-basket'}
                        size={120}
                        style={styles.icon}
                    />
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 50,
        backgroundColor:'#35B6FF',
        justifyContent:'center',
        alignItems:'center',
    },
    titleword:{
        color:'white',
        fontSize:18,
    },
    box:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:Dimensions.get('window').height-StatusBar.currentHeight-50-60,
    },
    remind:{
        color:'#35B6FF',
        fontSize:15,
    },
    icon:{
        color:'#35B6FF',
    }
})

export default EmptyOrder;

