/**
 * Created by qianmaoyin on 2018/11/28.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
import Flash from '../HomeScreen/Flash';
import Service from '../HomeScreen/Service';
import Icons from '../HomeScreen/Icons';
import Swiper from '../HomeScreen/Swiper';

export default class HomeScreen extends Component {

    render() {
        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                {/*轮播图区域*/}
                <Flash />
                {/*轮播图区域结束*/}

                <Text style={styles.clean}>- 专业清洗 -</Text>

                {/*横排四个分类*/}
                <Service/>
                {/*横排四个分类结束*/}

                {/*五个小图标*/}
                <Icons/>
                {/*五个小图标结束*/}

                {/*轮播图区域*/}
                <Swiper/>
                {/*轮播图区域结束*/}

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    clean: {
        textAlign: 'center',
        fontSize: 16,
        color: 'rgba(0,0,0,0.2)',
        marginTop: 15,
        marginBottom: 10,
    },
});