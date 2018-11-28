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

export default class Flash extends Component {
    render() {
        return (
            <View style={styles.flash}>
                <Image style={styles.flashPic} source={require('../../images/banner.jpg')}/>
                <View style={styles.city}>
                    <Text style={styles.cityName}>北京</Text>
                    <Ionicons
                        name={'ios-arrow-down'}
                        size={16}
                    />
                </View>
            </View>
        )
    }
}

//获得屏幕宽度
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    flash: {
        width: width,
        height: width * 512 / 1024,
        position: 'relative',
    },
    flashPic: {
        width: width,
        height: width * 512 / 1024,//设置的图片宽度和高度，要与原图的宽高比一样，避免图片拉伸
    },
    city: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.6)',
        width: '16%',
        height: 28,
        left: '42%',
        top: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
    },
    cityName: {
        marginRight: 5,
    },
})