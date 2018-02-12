import React from 'react';
import {StyleSheet,View,Text,Image,AsyncStorage,Button} from 'react-native';


export default class SideMenu extends React.Component{
    constructor(){
        super();
        this.state = {
            user:'',
            image:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('currentUser',(err,result)=>{
            this.setState({
                user: result
            });
        });
    }
    render(){
        const navigation = this.props.navigation
        return(
            <View>
                <Image source={require('./Resources/userb.png')} style={{width:150,height:150}} />
                <Text style = {{fontSize:30}}>{this.state.user}</Text>
                <Button title="Inbox" onPress={()=>navigation.navigate('Inbox')}></Button>
                <Text>-----------------------------------</Text>
                <Button title="Log Out!" onPress={this.logOut = () =>{
                                                  AsyncStorage.setItem("LoggedIn","No");
                                                  navigation.navigate('Home');
                                                 }}></Button>
            </View>
        );
    }
}
