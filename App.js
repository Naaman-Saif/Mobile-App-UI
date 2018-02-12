import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import { StackNavigator} from 'react-navigation';

import HomeComponent from './Home'
import LoginComponent from './LoginScreen'
import SignUpComponent from './SignUpScreen'
import ProfileNavigator from './ProfileNavigation'


const RootNavigator = StackNavigator({
    Home:{
        screen:HomeComponent,
        navigationOptions:{
            header:null
//            headerStyle:{backgroundColor: '#f15b4e',elevation: 0}
        }
    },
    Login:{
        screen:LoginComponent,
        navigationOptions:{
            header:null
//            headerStyle:{backgroundColor: '#f15b4e',elevation: 0,visible:false}
        }
    },
    SignUp:{
        screen:SignUpComponent,
        navigationOptions:{
            header:null
//            headerStyle:{backgroundColor: '#f15b4e',elevation: 0}
        }
    },
    Profile:{
        screen:ProfileNavigator,
        navigationOptions:{
            header:null
        }
    }
});

export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f15b4e',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
    header:{
        marginTop:-100
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
