import React from 'react';
import { StyleSheet, Text, View,AsyncStorage,Image } from 'react-native';

export default class LogHome extends React.Component{
    constructor(){
        super();
        this.state = {
        user:''
        }
    }
    static navigationOptions = {
        drawerLabel:'Home'
    }
    componentDidMount(){
        AsyncStorage.getItem('currentUser',(err,result)=>{
            this.setState({
                user: result
            });
        });
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Image
            source={require('./Resources/logo.png')}
        />
        <Text style={styles.head}>Fancy</Text>
        </View>
        <View style={{marginTop:70}}>
            <Text style={styles.signUpText}>Hi {this.state.user} </Text>
            <Text style={styles.signUpText}>Swipe Right To See the navigation Menu</Text>
        </View>
      </View>
    );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f15b4e',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
    header:{
        marginTop:-30
    },
    head:{
        fontSize:40,
        color:"#fff",
        marginBottom:20
    },
        signUp:{
          width:250,
          height:50,
          borderWidth: 1,
          borderRadius:50,
          borderColor: "#FFF",
        marginTop:30,
        backgroundColor:"#c2453b",
        alignItems:'center',
        justifyContent:'center'
    },
    signUpText:{
          color:'#FFF',
            alignItems: 'center',
            justifyContent: 'center',
          fontSize:25
    },
    loginInput:{
        width:250,
        fontSize:20
    },
    signUpPage:{
        width:250,
        height:50,
        borderWidth: 1,
        borderRadius:50,
        borderColor: "#FFF",
        backgroundColor:"#FFF",
        alignItems:'center'
    },
    signUpInput:{
        width:250,
        fontSize:20,
        marginTop:10
    },
});