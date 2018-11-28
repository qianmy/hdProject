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

export default class Swiper extends Component {
    render() {
        return (
            <View style={styles.swiper}>
                <Image style={styles.swiperBg} source={require('../../images/flashbg.jpg')}/>
                <View>

                </View>
            </View>
        )
    }
}

//获得屏幕宽度
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    swiper: {
        width: '100%',
        height: width / 3 * 1.3,
    },
    swiperBg:{
        width: '100%',
        height: width / 3 * 1.3,
        resizeMode:'cover',
        opacity:0.5,
    },
})