// Importa o React e o hook useState para manipular o estado do campo de busca
import React, { useState } from "react";

// Importa componentes do React Native usados na interface
import { View, Text, TextInput, FlatList, Image, StyleSheet } from "react-native";

// Lista de contatos simulados, cada um com nome, mensagem e imagem
const contatos = [
  // Apenas os primeiros mostrados aqui — o restante são dados repetidos com id diferente
  { id: "1", nome: "(TURMA A) - 3° período manhã", imagem: require("../assets/fulano.png"), mensagem: "Igor Revoredo -: Turma, vamos para o..." },
  { id: "2", nome: "+55 86 99**-6*3* (Você)", imagem: require("../assets/fulano.png"), mensagem: "Receita bolo sem batedeira sem forno s..." },
  { id: "3", nome: "Fulano Silva", imagem: require("../assets/fulano.png"), mensagem: "Passa o pix" },
  { id: "4", nome: "John Doe", imagem: require("../assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "5", nome: "John Doe", imagem: require("../assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "6", nome: "John Doe", imagem: require("../assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "7", nome: "John Doe", imagem: require("../assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "8", nome: "John Doe", imagem: require("../assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "9", nome: "John Doe", imagem: require("../assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "10", nome: "John Doe", imagem: require("../assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "11", nome: "John Doe", imagem: require("../assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "12", nome: "John Doe", imagem: require("../assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "13", nome: "John Doe", imagem: require("../assets/fulano.png"), mensagem: "lorem ipsum" },
];

// Componente principal que exibe a FlatList
export default function FlatListComponent() {
  // Estado para armazenar o texto digitado na busca
  const [busca, setBusca] = useState("");

  return (
    <View style={styles.container}>
      {/* Campo de texto para o usuário digitar e filtrar os contatos */}
      <TextInput
        style={styles.input}
        placeholder="Pergunte ao Mato AI ou pesquise"
        placeholderTextColor="#aaa"
        value={busca}
        onChangeText={setBusca}
      />

      {/* Lista de contatos usando FlatList, que é mais performática para listas longas */}
      <FlatList
        // Filtra os contatos conforme o texto digitado
        data={contatos.filter(item =>
          item.nome.toLowerCase().includes(busca.toLowerCase())
        )}
        // Define uma chave única para cada item (obrigatório)
        keyExtractor={item => item.id}
        // Define como renderizar cada item da lista
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.imagem} style={styles.image} />
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.mensagem}>{item.mensagem}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121B22", paddingTop: 50, paddingHorizontal: 10 },
  input: {
    height: 40,
    backgroundColor: "#202C33",
    borderRadius: 20,
    paddingHorizontal: 15,
    color: "#fff",
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#121B22",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#202C33",
  },
  image: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  nome: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  mensagem: { fontSize: 14, color: "#aaa" },
});