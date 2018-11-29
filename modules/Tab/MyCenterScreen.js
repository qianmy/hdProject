/**
 * Created by qianmaoyin on 2018/11/28.
 */
//个人中心
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ScrollView,
    StatusBar,//状态栏
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MyCenterScreen extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ScrollView style={styles.box}>
                {/*顶部*/}
                <View style={styles.top}>
                    <Image style={styles.topBg} source={require('../../images/mytopbg.jpg')}/>
                    <View style={styles.in}>
                        <View style={styles.left}>
                            <Image style={styles.userPic} source={require('../../images/1.jpg')}/>
                            <View style={styles.leftIn}>
                                <Text style={styles.goLogin}>立即登录</Text>
                                <Text style={styles.desc}>让生活多份自在</Text>
                            </View>
                        </View>
                        <Text style={styles.right}>充值></Text>
                    </View>
                </View>
                {/*顶部结束*/}

                {/*我的钱包*/}
                <View style={styles.wallet}>
                    <View style={styles.walletLeft}>
                        <Ionicons name="ios-card" size={23} style={styles.walletIcon}/>
                        <Text style={styles.myWallet}>我的钱包</Text>
                    </View>
                    <Text style={styles.walletRight}>开发票</Text>
                </View>
                {/*我的钱包结束*/}

                {/*账户信息*/}
                <View style={styles.account}>
                    <View style={styles.accountItem}>
                        <Text style={styles.accountNum}>0张</Text>
                        <Text style={styles.accountDesc}>优惠券</Text>
                    </View>
                    <View style={styles.accountItem}>
                        <Text style={styles.accountNum}>¥ 0.00</Text>
                        <Text style={styles.accountDesc}>余额</Text>
                    </View>
                    <View style={styles.accountItem}>
                        <Text style={styles.accountNum}>0张</Text>
                        <Text style={styles.accountDesc}>e卡</Text>
                    </View>
                    <View style={styles.accountItem}>
                        <Text style={styles.accountNum}>0</Text>
                        <Text style={styles.accountDesc}>积分</Text>
                    </View>
                </View>
                {/*账户信息结束*/}

                {/*其他*/}
                <View style={styles.others}>
                    <View style={styles.othersItem}>
                        <Ionicons name="ios-pin" size={23} style={[styles.othersLeftIcon,styles.othersIcon1]}/>
                        <View style={styles.othersItemRight}>
                            <Text style={styles.otherItemTitle}>常用地址</Text>
                            <Text style={styles.othersItemRr}>></Text>
                        </View>
                    </View>
                    <View style={styles.othersItem}>
                        <Ionicons name="ios-heart" size={23} style={[styles.othersLeftIcon,styles.othersIcon2]}/>
                        <View style={styles.othersItemRight}>
                            <Text style={styles.otherItemTitle}>推荐有奖</Text>
                            <Text style={styles.othersItemRr}>></Text>
                        </View>
                    </View>
                    <View style={styles.othersItem}>
                        <Ionicons name="logo-snapchat" size={23} style={[styles.othersLeftIcon,styles.othersIcon3]}/>
                        <View style={styles.othersItemRight}>
                            <Text style={styles.otherItemTitle}>积分商城</Text>
                            <Text style={styles.othersItemRr}>></Text>
                        </View>
                    </View>
                    <View style={styles.othersItem}>
                        <Ionicons name="ios-subway" size={23} style={[styles.othersLeftIcon,styles.othersIcon4]}/>
                        <View style={styles.othersItemRight}>
                            <Text style={styles.otherItemTitle}>取送小e招募</Text>
                            <Text style={styles.othersItemRr}>></Text>
                        </View>
                    </View>
                </View>
                {/*其他结束*/}

                {/*意见反馈*/}
                <View style={styles.others}>
                    <View style={styles.othersItem}>
                        <Ionicons name="logo-snapchat" size={23} style={[styles.othersLeftIcon,styles.othersIcon3]}/>
                        <View style={styles.othersItemRight}>
                            <Text style={styles.otherItemTitle}>意见反馈</Text>
                            <Text style={styles.othersItemRr}>></Text>
                        </View>
                    </View>
                    <View style={styles.othersItem}>
                        <Ionicons name="ios-subway" size={23} style={[styles.othersLeftIcon,styles.othersIcon4]}/>
                        <View style={styles.othersItemRight}>
                            <Text style={styles.otherItemTitle}>更多</Text>
                            <Text style={styles.othersItemRr}>></Text>
                        </View>
                    </View>
                </View>
                {/*意见反馈结束*/}

                {/*客服*/}
                <View style={styles.service}>
                    <Ionicons name="ios-megaphone" size={23} style={styles.megaPhone}/>
                    <Text style={styles.servicePhone}>客服电话</Text>
                </View>
                {/*客服结束*/}
            </ScrollView>
        )
    }
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    box:{
        backgroundColor:'#fff',
        height:width - 50 - StatusBar.currentHeight,//StatusBar.currentHeight状态栏的高度
    },
    top: {
        width: '100%',
        height: width / 3,
        position: 'relative',
    },
    topBg: {
        width: '100%',
        height: width / 3,
        opacity: 0.5,
    },
    in: {
        width: '100%',
        height: width / 3,
        position: 'absolute',
        left: 0,
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    left: {
        width: '40%',
        height: width / 3 / 2,//父级高度的一半
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    goLogin: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.7)',
        marginBottom: 6,
    },
    desc: {
        color: 'rgba(0,0,0,0.5)',
    },
    right: {
        //backgroundColor: 'purple',
        marginRight: 20,
        fontSize: 17,
        color: '#FE6F48',
    },
    userPic: {
        width: width / 7.6,
        height: width / 7.6,
        borderRadius: width / 14,
        marginRight: 8,
    },
    wallet: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.05)',
    },
    walletLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    walletIcon: {
        marginRight: 5,
    },
    myWallet: {
        fontSize: 16,
    },
    walletRight: {
        fontSize: 16,
        marginRight: 20,
        color: '#0EE2FB',
    },
    account: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        borderTopColor: 'rgba(0,0,0,0.1)',
        borderTopWidth: 1,
        alignItems:'center',
        borderBottomWidth:8,
        borderBottomColor:'#F3F7FA',
    },
    accountItem: {
        width: '25%',
    },
    accountNum:{
        fontSize:15,
        color:'rgba(0,0,0,0.8)',
        textAlign:'center',
    },
    accountDesc:{
        color: 'rgba(0,0,0,0.5)',
        fontSize:15,
        textAlign:'center',
    },
    others:{
        borderBottomWidth:8,
        borderBottomColor:'#F3F7FA',
    },
    othersItem:{
        width:'100%',//可以不写，默认也是100%
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    othersLeftIcon:{
        marginLeft:20,
    },
    othersItemRight:{
        width:'88%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
        height:40,
    },
    othersIcon1:{
        color:'#32CAEA',//icon颜色
    },
    othersIcon2:{
        color:'#FF93B4',
    },
    othersIcon3:{
        color:'#47D862',
    },
    othersIcon4:{
        color:'#65A6FF'
    },
    othersItemRr:{
        marginRight:20,
        color: 'rgba(0,0,0,0.3)',
        fontSize:16,
    },
    otherItemTitle:{
        fontSize:15,
        color: 'rgba(0,0,0,0.8)',
    },
    service:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:15,
        borderBottomColor:'#F3F7FA',
    },
    megaPhone:{
        color:'#32CAEA',
        marginRight:10
    },
    servicePhone:{
        fontSize:20,
        color: 'rgba(0,0,0,0.8)',
    }
});