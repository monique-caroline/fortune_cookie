import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
  } from 'react-native';

import styles from './componentes/Estilos';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./imagens/fortune-cookie-1.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.novoBiscoito = this.novoBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.', 
      'Não coloque limites em seus sonhos, coloque fé.', 
      'A gratidão é a memória do coração.', 
      'Não olhe para trás, você não está indo pra lá.', 
      'Seja a mudança que você quer ver.', 
      'Escute sempre, mas jamais perca a sua voz.', 
      'A persistência é o caminho do êxito.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];

  }
  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./imagens/fortune-cookie-2.png')
    });
  }
  
  novoBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );
  
    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./imagens/fortune-cookie-1.png')
    });
  }

  render(){
  
    return (
    <View style={styles.container}>
        <Image
        source={this.state.img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.botao} onPress={this.novoBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Novo Biscoito</Text>
        </View>
      </TouchableOpacity>  

    </View>
  );
}
}
export default App;