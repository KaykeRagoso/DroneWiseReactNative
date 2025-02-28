import React, { useState } from 'react'; // Importando React e useState corretamente
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'; // Importando TextInput de 'react-native'
import { Button } from 'react-native-web';

export default function App() {
  const [texto, setTexto] = useState('');
  const [numero, setNumero] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textLogo}>Teste</Text>
      <StatusBar style="auto" />

      {/* Campo Login */}
      <View style={styles.login}>
        <Text style={styles.textloginName}>Login </Text>
        <TextInput
          style={styles.MeuTextInput}
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

      {/* Botão */}
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            if (texto.trim() !== "" && numero.trim() !== "") {
              alert("Login efetuado com sucesso!");
              console.log("Login:", texto, "Senha:", numero);
            } else {
              alert("Preencha todos os campos!");
            }
          }}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.textfooter}>Copyright 2025. Todos os direitos reservados.</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-star', // Centraliza tudo na tela
    padding: 20,
    
  },
  textLogo: {
    color: "white",
    fontWeight: 'bold',
    fontFamily: 'Comic Sans MS',
    fontSize: 20,
    marginTop: 50,
    marginBottom: 180, // Adiciona espaço abaixo do logo
  },
  MeuTextInput: {
    backgroundColor: 'white', // Muda para branco para ser visível
    color: 'black', // Mantém o texto visível
    height: 40,
    width: 200, // Define um tamanho adequado
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 5, // Borda arredondada
  },
  footer: {
    position: 'absolute',
    padding: 0,
    bottom: 0,
    width: '100%',
    height: 50,
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
  button: {
    width: 100,
    marginTop: 20, // Adiciona espaço acima do botão
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonStyle: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
