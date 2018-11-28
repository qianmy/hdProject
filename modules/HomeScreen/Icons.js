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

export default class Icons extends Component {
    render() {
        return (
            <View style={styles.icons}>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons
                            name={'ios-heart'}
                            size={35}
                        />
                    </View>
                    <Text style={styles.iconTitle}>服务介绍</Text>
                </View>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons
                            name={'ios-happy'}
                            size={35}
                        />
                    </View>
                    <Text style={styles.iconTitle}>服务介绍</Text>
                </View>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons
                            name={'ios-leaf'}
                            size={35}
                        />
                    </View>
                    <Text style={styles.iconTitle}>服务介绍</Text>
                </View>
                <View style={styles.iconItem}>
                    <View style={styles.icon}>
                        <Ionicons
                            name={'ios-megaphone'}
                            size={35}
                        />
                    </View>
                    <Text style={styles.iconTitle}>服务介绍</Text>
                </View><View style={styles.iconItem}>
                <View style={styles.icon}>
                    <Ionicons
                        name={'ios-partly-sunny'}
                        size={35}
                    />
                    </View>
                    <Text style={styles.iconTitle}>服务介绍</Text>
                </View>

            </View>
        )
    }
}

//获得屏幕宽度
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    icons: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 7,
    },
    iconItem: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: '60%',
        height: width / 5 * 0.6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    iconTitle: {
        fontSize: 15,
        marginTop: 5,
    },
})