import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput,AsyncStorage,Alert } from 'react-native';

let users = [];

export default class LoginComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            user:'',
            password:''
        }
    }
    componentDidMount(){
        getUsers.all(Users => users = Users);
    }
    onChangeUser = (value) =>{
        this.setState({
            user:value
        })
    }
    onChangePassword = (value)=>{
        this.setState({
            password:value
        })
    }
    onSubmit = () =>{
        AsyncStorage.getItem(this.state.user,(err,result)=>{
           if(result == undefined){
               Alert.alert(this.state.user+ ' not found. Want to register a  new account?')
           }else{
               if(JSON.parse(result)[0].password == this.state.password){
                   Alert.alert('Welcome ' + this.state.user);
                   AsyncStorage.setItem('currentUser',this.state.user);
                   AsyncStorage.setItem('LoggedIn',"Yes");
                   const navigation = this.props.navigation;
                   navigation.navigate('Profile');
               }
               else{
                   Alert.alert('Incorrect Password');
               }
           } 
        })
        ;
    }
    render(){
        const {navigate} = this.props.navigation;
        
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('./Resources/logo.png')}
                />
                <Text style={styles.head}>Fancy</Text>
            </View>
            <View>
                    <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:20}}>
                        <Image source={require('./Resources/user.png')} />
                        <TextInput style={styles.loginInput} placeholder='Username' onChangeText = {this.onChangeUser} placeholderTextColor="#FFF"/>
                    </View>
                    <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:20}}>
                        <Image source={require('./Resources/pass.png')} />
                        <TextInput style={styles.loginInput} placeholder='Password' placeholderTextColor="#FFF" onChangeText={this.onChangePassword} onSubmitEditing = {this.onSubmit} secureTextEntry={true}/>
                    </View>
            </View>
                <View style={{marginTop:40}}>
                    <TouchableOpacity style={styles.signUp} onPress = {this.onSubmit}><Text style={styles.signUpText}>Login!</Text></TouchableOpacity>
                </View>
                    <TouchableOpacity style={{marginTop:40}}><Text style={{color:"#FFF"}} onPress={()=>navigate('SignUp')}>Create an Account</Text></TouchableOpacity>
        </View>
    );
    }
}
let getUsers = {
    convertToArrayOfObject(Users, callback) {
        return callback(
    Users ? Users.split("||").map((user,password, i) => ({ key: i, User: user, password:password })) : []
    );
    },
    all(callback) {
        return AsyncStorage.getItem("USERS", (err, Users) =>
        this.convertToArrayOfObject(Users, callback)
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