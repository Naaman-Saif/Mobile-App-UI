import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput,AsyncStorage } from 'react-native';

let users = [];

export default class SignUpComponent extends React.Component{
    constructor(){
        super();
        this.state={
            user:'',
            password:'',
            repeatPassword:''
        }
    }
    convertToStringWithSeparators =(Users)=> {
        return Users.map(Users => Users.user).join("||");
    }
    onChangeUser = (value) =>{
        this.setState({
           user : value 
        });
    }
    onChangePassword = (value) =>{
        this.setState({
            password:value
        });
    }
    onChangePasswordAgain = (value) =>{
        this.setState({
           repeatPassword:value 
        });
    }
    onSubmit = () =>{
        if(this.state.password != this.state.repeatPassword){
            return alert("Passwords do not match");
            this.setState({
                password:'',
                repeatPassword:''
            })
        }else{
            if(this.state.user == ''){
                return alert('User name is required!');
                this.setState({
                   password:'',
                    repeatPassword:''
                });
            }else{
            users = users.concat({key:users.length,user:this.state.user,password:this.state.password});
            console.log(this.state.user + ' is saved');
            AsyncStorage.setItem(this.state.user,JSON.stringify(users));
            console.log(users);
            users =[];
            const navigation = this.props.navigation;
            navigation.navigate('Login');
            }
        }
        
    }
    render(){
        const navigate = this.props.navigation;
    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
                source={require('./Resources/logo.png')}
            />
            <Text style={styles.head}>Fancy</Text>
        </View>
        <View>
            <TextInput style={styles.loginInput} placeholder='Username' placeholderTextColor="#FFF" onChangeText = {this.onChangeUser}/>
            <TextInput style={styles.signUpInput} placeholder='Password' placeholderTextColor="#FFF" secureTextEntry={true} onChangeText = {this.onChangePassword}/>
            <TextInput style={styles.signUpInput} placeholder='Repeat Password' placeholderTextColor="#FFF" secureTextEntry={true} onChangeText = {this.onChangePasswordAgain}/>
            <TextInput style={styles.signUpInput} placeholder='Address' placeholderTextColor="#FFF"/>
            <TextInput style={styles.signUpInput} placeholder='Contact No:' placeholderTextColor="#FFF"/>
        </View>
            <TouchableOpacity style={styles.signUp} onPress = {this.onSubmit}><Text style={styles.signUpText}>Sign Up!</Text></TouchableOpacity>
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