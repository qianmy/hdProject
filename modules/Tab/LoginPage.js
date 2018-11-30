import React,{Component} from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';


class LoginPage extends Component{
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <View style={styles.header}>
                    <Text style={styles.titleword}>未完成</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.remind}>你还没有登录，请先登录！</Text>
                    <View style={styles.btn}>
                        <Text
                            style={styles.btnword}
                            onPress={()=>this.props.navigation.navigate('Login')}
                        >登 录</Text>
                    </View>
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
        color:'rgba(0,0,0,0.4)',
        marginBottom:10,
    },
    btn:{
        backgroundColor:'#35B6FF',
        width:'28%',
        height:46,
        borderRadius:23,
        justifyContent:'center',
        alignItems:'center',
    },
    btnword:{
        color:'white',
        fontSize:15,
    }
})

export default LoginPage;

