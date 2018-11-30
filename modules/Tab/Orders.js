import React,{Component} from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, FlatList, AsyncStorage } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Orders extends Component{

    constructor(){
        super();
        this.state = {
            orderdata:'',
        }
    }
    
    // 获得订单数据
    componentWillMount(){
        let formData = new FormData();
        // 取token放到参数中
        AsyncStorage.getItem('token',(err,d)=>{//第二个参数是获取到的数据
            formData.append('token',d);
            // 获得订单数据
            fetch('https://lcrwb.com/eapi/orders.php', {
                method: 'POST',
                body: formData,
            }).then(x => {
                this.setState({
                    orderdata:JSON.parse(x._bodyInit)
                })
            })


        })
    }

    // 渲染每个区块
    _renderItem = (item)=>{
        // console.log(item.item);
        return(
            <View style={styles.item}>
                <View style={styles.itemheader}>
                    <Ionicons name={'ios-shirt'} size={22} style={styles.itemicon} />
                    <Text style={styles.itemtitle}>{item.item.title}</Text>
                </View>
                <Text style={styles.ordernumber}>订单编号：{item.item.ordernumber}</Text>
                <View style={styles.gettimebox}>
                    <Text style={styles.gettime}>取件时间：{item.item.time}</Text>
                    <Ionicons
                        name={'ios-chatboxes'}
                        size={22}
                        style={styles.timeicon}
                    />
                    <Text style={styles.timeedit}>修改</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{backgroundColor:'white',height:Dimensions.get('window').height-StatusBar.currentHeight-50}}>
                <View style={styles.header}>
                    <Text style={styles.titleword}>未完成66666</Text>
                </View>


                <FlatList
                    data={this.state.orderdata}
                    renderItem={this._renderItem}
                />



                {/*继续下单*/}
                <View style={styles.continue}>
                    <View style={styles.continuebtnbox}>
                        <Text style={styles.continuebtn}>继续下单</Text>
                    </View>
                </View>
                {/*继续下单结束*/}

                <Text style={styles.nomore}>没有更多订单了...</Text>
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
    item:{
      marginBottom:20,
    },
    itemheader:{
        alignItems:"center",
        flexDirection:'row',
        paddingLeft:20,
        paddingTop:15,
        paddingBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,0.05)',
        marginBottom:10,
    },
    itemicon:{
        color:'#FFA671',
        marginRight:10,
    },
    itemtitle:{
        fontSize:18,
        color:'rgba(0,0,0,0.8)',
    },
    ordernumber:{
        color:"rgba(0,0,0,0.6)",
        fontSize:15,
        paddingLeft:20,
    },
    gettimebox:{
        flexDirection:'row',
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,0.05)',
    },
    gettime:{
        color:"rgba(0,0,0,0.6)",
        fontSize:15,
        paddingLeft:20,
    },
    timeicon:{
        color:'#5CBEFB',
        marginLeft:20,
        marginRight:3,
    },
    timeedit:{
        color:'#5CBEFB',
    },
    continue:{
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    continuebtnbox:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10,
        borderWidth:1,
        borderColor:'#5CBEFB',
        borderRadius:5,
        marginRight:10,
    },
    continuebtn:{
        color:"#5CBEFB",
        fontSize:15,
    },
    nomore:{
        color:'rgba(0,0,0,0.2)',
        textAlign:'center',
        fontSize:15,
    }

})

export default Orders;

