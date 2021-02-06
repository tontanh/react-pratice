import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Image} from 'react-native';
import Logo from './assets/mgo.jpeg';
export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  loginBtn =()=>{
alert(this.state.email)
  }
  render(){
    return (

      <View style={styles.container}>
        <Image source= {Logo}
        style={{width:150 , height: 150}}
      />
      
        <Text style={styles.logo}> ສະບາຍດີ Lago</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="ອີເມວ..." 
            placeholderTextColor="black"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="ລະຫັດ..." 
            placeholderTextColor="black"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text 
          onPress={this.email}
          style={styles.loginText}
          >ເຂົ້າສູ່ລະບົບ</Text>
          
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.regiBtn}>
          <Text 
         
         
          style={styles.regiText}>ລົງທະບຽນ</Text>    
             
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    margin:21,
    fontWeight:"bold",
    fontSize:30,
    color:"blue",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    
    backgroundColor:"#D9D7D7",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    // padding:20
    paddingLeft:20,
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
   
    width:"30%",
    backgroundColor:"blue",
  borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    
  },

  regiBtn:{
   
    width:"10%",
    backgroundColor:"white",
  borderRadius:25,
    height:50,
    // alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginLeft:'70%',
    marginBottom:10
  },

  loginText:{
    color:"white"
  },
  regiText:{
    color:"blue"
  }
});