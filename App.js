import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [idade, setIdade] = useState('');
  const [greeting, setGreeting] = useState('');

  const verificarFase = (idade) => {
    let novaFase;

    idade = parseInt(idade); // Converte a idade para um número inteiro

    if (idade <= 13) {
      novaFase = 'Criança';
    } else if (idade <= 18) {
      novaFase = 'Adolescente';
    } else if (idade <= 21) {
      novaFase = 'Jovem';
    } else if (idade <= 60){
      novaFase = 'Adulto';
    }
    else{
      novaFase = 'Idoso';
    }

    setGreeting(`Você está na fase da vida: ${novaFase}`);
  };

  const handleGreet = () => {
    verificarFase(idade);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exemplo de Variável em React Native</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={(text) => setIdade(text)}
        value={idade}
        keyboardType="numeric" // Garante que o teclado seja numérico
      />
      <Button title="APERTE" onPress={handleGreet} />
      <Text style={styles.greeting}>{greeting}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
  },
});