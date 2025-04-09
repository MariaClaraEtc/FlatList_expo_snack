// Importa o React (necessário para componentes funcionais no React Native)
import React from "react";

// Importa o componente que exibe a lista de contatos (com FlatList)
import FlatListComponent from "./components/FlatList.jsx";

// Componente principal da aplicação
export default function App() {
  // Renderiza diretamente o componente FlatListComponent
  return <FlatListComponent />;
}
