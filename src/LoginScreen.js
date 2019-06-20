import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';

export default class LoginScreen extends Component
{
  static navigationOptions = {}
  
  constructor(props)
  {
    super(props);
    this.state = {
      email:'',
      password:''
    };
    this.autentica = this.autentica.bind(this);    
  }

  autentica()
  {
    let email    = this.state.email;
    let password = this.state.password;

    if (email.trim() == 'chasinfo@gmail.com' && password.trim() == '123456') {
      this.props.navigation.navigate('lista');
    } else {
      let mensagem = "Autenticação não foi aceita\nemail: "+email+"\npassword: "+password;
      alert(mensagem);
    }
  }

  render()
  {
    return(
      <View style={{flex:1, flexDirection: "column"}}>
        <Image source={require('../assets/ti.jpg')} style={Styles.imagemTop} />
        <View justifyContent='center' style={Styles.areaImagem}>
            <Image source={require('../assets/business.png')} style={Styles.imagemLogin} />            
        </View>                
        <View style={Styles.areaCampos}>
          <Text style={Styles.tituloLogin}>Receitas Caseiras</Text>
          <Text style={Styles.subTituloLogin}>Informe o Usuário, a Senha e selecione Iniciar para ter acesso ao sistema.</Text>
          <TextInput 
            placeholder='Informe o e-mail' 
            style={Styles.inputTextLogin} 
            keyboardType='email-address' 
            onChangeText={(text)=>this.setState({email:text})}
          />
          <TextInput 
            placeholder='Informe a senha de acesso' 
            style={Styles.inputTextLogin} 
            secureTextEntry={true} 
            onChangeText={(text)=>this.setState({password:text})}
          />
        </View>
        <View>
          <Button
            title="Iniciar"
            color="#841584"            
            style={Styles.BotaoAcesso}
            onPress={this.autentica}
          />
        </View>                
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  areaImagem: {      
      height: 200,
      flex:1,      
      flexDirection:'row'      
  },
  imagemTop: {
    height: 200,    
    width: 450    
  },  
  imagemLogin: {
    height: 100,    
    width: 100,
    zIndex: 1,
    marginTop: -50,
    borderRadius: 50    
  },
  areaCampos: {    
    height: 250,
    margin: 15
  }, 
  tituloLogin: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color:'#606060'
  }, 
  subTituloLogin: {
    textAlign: 'center',
    fontSize: 16,    
    color:'#606060'
  },
  inputTextLogin: {
    margin: 10,
    borderColor:'black',    
    borderWidth:1,
    padding: 5
  },
  BotaoAcesso: {
    marginTop: 60,
  } 
});