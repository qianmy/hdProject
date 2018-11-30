import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar, AsyncStorage, Image, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderScreen from "./Tab/OrderScreen";

class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
            sendcodebtn: '发送验证码',//发送验证码按钮的内容
            tel: '',//手机号
            code: '',//验证码
            presssta: 1,//发送验证码的按钮是否能点的状态变量
        }
    }

    // 发送验证码后触发的方法
    _sendcode() {
        // 如果值为0，就表示不能点击（之前点过了，还没倒计时完）
        if (this.state.presssta == 0) {
            return;
        }

        this.setState({//点击之后，把值改为0，表示不能再点
            presssta: 0
        })
        // 将用户输入的手机号发送给后台接口
        fetch('http://xxxxxx.com/a.php', {
            method: 'POST',
            body: JSON.stringify({
                tel: this.state.tel,
            })
        }).then(x => {

        })
        let time = 60;

        let timer = setInterval(() => {

            this.setState({
                sendcodebtn: time + '秒',
            })
            if (time == 0) {
                this.setState({
                    sendcodebtn: '获得验证码',
                    presssta: 1,// 倒计时完，改为1，表示可以点击
                })
                clearInterval(timer);
            }
            time--;
        }, 1000)


    }

    // 用来实现登录功能的方法
    _login() {
        // 创建一个格式化的数据
        let formData = new FormData();
        formData.append('tel', this.state.tel);
        formData.append('code', this.state.code);
        //点击登录请求接口
        fetch('https://www.easy-mock.com/mock/5bd26f112d219744ff8495ad/example/hdProject/login', {
            method: 'POST',
            body: formData,
        }).then(x => {
            console.log(x);
            // 格式化返回的数据
            // let data = JSON.parse(x.data);
            // if (data.sta == 0) {
            //     alert('登录不成功！请检查输入是否有误！');
            // } else if (data.sta == 1) {
            //
            //     // 将登录成功的信息和token写入本地存储
            //     AsyncStorage.setItem('islogin', '1', () => {
            //         AsyncStorage.setItem('token', data.token, () => {
            //             // alert('登录成功啦！这里应该有后续操作！');
            //             this.props.navigation.navigate('Order');
            //         })
            //     })
            //
            //
            // }


            // 假装成功
                AsyncStorage.setItem('islogin', '1', () => {
                    AsyncStorage.setItem('token', '123456', () => {
                        // alert('登录成功啦！这里应该有后续操作！');
                        this.props.navigation.navigate('Order');
                    })
                })

        })

    }

    render() {
        return (
            <View>
                <View style={{backgroundColor: 'white'}}>
                    {/*头部*/}
                    <View style={styles.header}>
                        <Ionicons
                            name={"ios-arrow-back"}
                            style={styles.headericon}
                            onPress={() => this.props.navigation.goBack(null)}
                        />
                        <Text style={styles.titleword}>登录</Text>
                    </View>
                    {/*头部结束*/}


                    <View style={styles.main}>
                        {/*背景图*/}
                        <Image
                            source={require('../images/login_bg.jpg')}
                            style={styles.loginbg}
                            resizeMode={'cover'}
                        />
                        {/*背景图结束*/}

                        {/*登录表单*/}
                        <View style={styles.form}>
                            <View style={styles.input}>
                                <Ionicons
                                    name={"ios-megaphone"}
                                    style={styles.inputicon}
                                    size={20}
                                />
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    placeholder={'请输入手机号'}
                                    placeholderTextColor={'rgba(0,0,0,0.3)'}
                                    style={styles.textinput}
                                    onChangeText={(d) => {
                                        this.setState({
                                            tel: d
                                        })
                                    }}
                                />
                                <View style={styles.getcodebtn}>
                                    <Text
                                        style={styles.getcodebtnword}
                                        onPress={this._sendcode.bind(this)}
                                    >{this.state.sendcodebtn}</Text>
                                </View>
                            </View>

                            <View style={styles.input}>
                                <Ionicons
                                    name={"ios-pin"}
                                    style={styles.inputicon}
                                    size={20}
                                />
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    placeholder={'请输入验证码'}
                                    placeholderTextColor={'rgba(0,0,0,0.3)'}
                                    style={styles.textinput}
                                    onChangeText={(d) => {
                                        this.setState({
                                            code: d
                                        })
                                    }}
                                />
                            </View>

                            {/*登录按钮*/}
                            <View style={styles.loginbtn}>
                                <Text
                                    style={styles.loginbtncontent}
                                    onPress={this._login.bind(this)}
                                >登录</Text>
                            </View>
                            {/*登录按钮结束*/}
                            <View style={styles.loginremind}>
                                <Text style={styles.loginremindword}>点击登录，即表示您同意</Text>
                                <Text style={[styles.loginremindword, styles.link]}>用户协议</Text>
                            </View>
                        </View>
                        {/*登录表单结束*/}


                    </View>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#35B6FF',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headericon: {
        color: 'white',
        fontSize: 25,
        width: '2%',
        marginLeft: '2%',
    },
    titleword: {
        color: 'white',
        fontSize: 18,
        width: '90%',
        textAlign: 'center',
    },
    main: {
        position: 'relative',
        width: '100%',
        height: Dimensions.get('window').height - 50 - StatusBar.currentHeight,
    },
    loginbg: {
        width: '100%',
        height: '100%',
    },
    form: {
        position: 'absolute',
        top: 30,
        left: 0,
        width: '100%',
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '5%',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    inputicon: {
        color: 'rgba(0,0,0,0.3)',
    },
    textinput: {
        width: '68%',
    },
    getcodebtn: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white',
        borderColor: '#35B6FF',
        borderWidth: 1,
        borderRadius: 5,
    },
    getcodebtnword: {
        color: '#35B6FF',
        justifyContent: 'center',
        textAlign: 'center',
    },
    loginbtn: {
        width: '90%',
        height: 40,
        backgroundColor: '#35B6FF',
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 45,
    },
    loginbtncontent: {
        color: 'white',
        fontSize: 15,
    },
    loginremind: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    loginremindword: {
        color: 'rgba(0,0,0,0.7)',
    },
    link: {
        color: '#35B6FF',
        textDecorationLine: 'underline',
    }
})

export default LoginScreen;

