import React,{Component} from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import LoginPage from './LoginPage';
import EmptyOrder from './EmptyOrder';
import Orders from './Orders';

class OrderScreen extends Component{
    constructor(){
        super();
        this.state = {
            islogin:0,
        }
    }
    // render之前
    componentWillMount(){
        // 读取登录状态和token
        AsyncStorage.getItem('islogin',(err,d)=>{
            this.setState({
                islogin:d,
            })
        })
    }

    render() {
        // alert(this.state.islogin)
        let dom;
        //如果处在登录状态，就显示订单列表
        if (this.state.islogin==1) {
            dom = (<Orders />);
        }else{
            dom = (<LoginPage navigation={this.props.navigation} />);
        }

        return (
            <View style={{backgroundColor:'white'}}>
                {/*<EmptyOrder />*/}
                {dom}
            </View>
        )
    }
}


export default OrderScreen;

