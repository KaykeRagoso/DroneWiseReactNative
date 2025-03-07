import React, { useState } from 'react'; // Importando React e useState corretamente
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'; // Importando TextInput de 'react-native'
import { Button } from 'react-native-web';

export default function App() {
  const [texto, setTexto] = useState('');
  const [numero, setNumero] = useState('');

  return (
      <ScrollView>

          <View style={styles.container}>
            <Text style={styles.textLogo}>TESTE</Text>
            <StatusBar style="auto" />
            </View>

            {/* Campo Login */}
            <View style={styles.login}>
              <Text style={styles.textLogin}>Login</Text>
              <TextInput
                style={styles.TextInputLogin}
                value={texto}
                onChangeText={setTexto} // Corrigindo onChangeText
                placeholder="Digite seu login"
                placeholderTextColor="gray"
              />
            </View>


      {/* Campo Senha */}
      <View style={styles.login}>
        <Text style={styles.textloginName}>Senha</Text>
        <TextInput
          style={styles.MeuTextInput}
          value={numero}
          onChangeText={(text) => setNumero(text)} // Mantendo como string
          keyboardType="numeric"
          placeholder="Digite sua senha"
          placeholderTextColor="gray"
          secureTextEntry // Esconde o texto digitado
        />
      </View>

            {/* Rodapé */}
            <View style={styles.footer}>
              <Text style={styles.textfooter}>Copyright 2025. Todos os direitos reservados.</Text>
            </View>
      </ScrollView>

  );
}


const styles = StyleSheet.create({
  //Componentes
  container: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: 'red',
    flexDirection: 'row',
    position: 'relative',
    padding: 40,
    top: 25
  },
  login: {
    flex: 2,
    justifyContent: 'center', 
    display: 'flex',
    backgroundColor: 'green',
    alignItems: 'center',
    position: 'relative',
    padding: 144,

  },
  footer: {
    flex: 3,
    justifyContent: 'center', 
    display: 'flex',
    backgroundColor: 'blue',
    alignItems: 'center',
    position: 'relative',
    padding: 20,
  },


  //Textos
  textLogo: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  textLogin: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    top: 80
    
  },
  textSenha: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    bottom: 140

  },

  //Inputs
  TextInputLogin: {
    backgroundColor: 'white', // Muda para branco para ser visível
    height: 40,
    width: 175,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 5, // Borda arredondada
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  textfooter: {
    color: "white",
    fontWeight: 'bold',
    fontFamily: 'Comic Sans MS',
    fontSize: 12,
  },
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // Adiciona espaço entre os inputs
  },
  textloginName: {
    color: "white",
    fontWeight: 'bold',
    fontFamily: 'Comic Sans MS',
    fontSize: 14,
  },
});
