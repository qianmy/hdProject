/**
 * Created by qianmaoyin on 2018/11/28.
 */
//首页轮播图区域
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Service extends Component {
    render() {
        return (
            <View style={styles.cleanList}>
                <View style={[styles.cleanItem, styles.one]}>
                    <Text style={styles.cleanTitle}>洗衣</Text>
                    <Image style={styles.cleanImage} source={require('../../images/chenyi.png')}/>
                </View>
                <View style={[styles.cleanItem, styles.two]}>
                    <Text style={styles.cleanTitle}>洗鞋</Text>
                    <Image style={styles.cleanImage} source={require('../../images/xie.png')}/>
                </View>
                <View style={[styles.cleanItem, styles.three]}>
                    <Text style={styles.cleanTitle}>洗家纺</Text>
                    <Image style={styles.cleanImage} source={require('../../images/jiafang.png')}/>
                </View>
                <View style={[styles.cleanItem, styles.four]}>
                    <Text style={styles.cleanTitle}>窗帘清洗</Text>
                    <Image style={styles.cleanImage} source={require('../../images/chuanglian.png')}/>
                </View>
            </View>
        )
    }
}

//获得屏幕宽度
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({

    cleanList: {
        flexDirection: 'row',
        marginBottom: 15,
        borderBottomWidth: 10,
        borderBottomColor: '#F3F7FA',

    },
    cleanImage: {
        width: '65%',
        height: width / 4 * 0.65,//和图片宽度一样
    },
    cleanItem: {
        width: '25%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F3F6FD',
        borderLeftWidth: 0,
        paddingTop: 10,
        paddingBottom: 10,
    },
    cleanTitle: {
        width: '100%',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 10,
    },
    one: {
        backgroundColor: '#FAFDFF',
    },
    two: {
        backgroundColor: '#FFFCFC',
    },
    three: {
        backgroundColor: '#FDFBFF',
    },
    four: {
        backgroundColor: '#FAFFFF',
    },
})