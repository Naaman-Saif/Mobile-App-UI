import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput,AsyncStorage,BackHandler } from 'react-native';

export default class HomeComponent extends React.Component{
    
    componentWillMount(){
        BackHandler.addEventListener('hadrwareBackPress',this.handleBackHandler);
        AsyncStorage.getItem("LoggedIn",(err,result)=>{
            if(result == "Yes"){
                const navigation = this.props.navigation;
                navigation.navigate('Profile');
            }
        });
    }
    handleBackHandler(){
        BackHandler.exitApp();
    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hadrwareBackPress',this.handleBackHandler);
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
            <TouchableOpacity style={styles.signUp} onPress={()=>navigate('SignUp')}
><Text style={styles.signUpText}>Sign Up!</Text></TouchableOpacity>
            <TouchableOpacity style={styles.signUp} onPress={()=>navigate('Login')}><Text style={styles.signUpText}>Login!</Text></TouchableOpacity>
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