import React, { useState, useContext } from "react";
import ContextPagina from "../components/contexts/ContextPagina";
import Footer from "../components/Footers/Footer";
import BannerProps from "../components/Inicio/BannerProps";
import ExemploUseContext from "../components/Inicio/Exemplos/ExemploUseContext";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function PaginaExemploUseContext() {

  console.log("Renderizei Componente PaginaExemploUseContext")
 
  const [exibirExemploProps, setExibirExemploProps] = useState(false)

  console.log("exibirExemploProps é ", exibirExemploProps)

  const abrirExemplo = () => {
    setExibirExemploProps(true)
  }

  const fecharExemplo = () => {
    setExibirExemploProps(false)
  }


  return (
    <ContextPagina.Provider value={{
      exibir: exibirExemploProps,
      fecharExemplo: fecharExemplo 
    }}>
        <IndexNavbar />
        <BannerProps 
          title="O que é useContext no React?"
          description="é usado para criar dados comuns que podem ser acessados ​​em toda a hierarquia de componentes sem passar os props manualmente para cada nível . O contexto definido estará disponível para todos os componentes filhos sem envolver “props”."
          buttonAction={{
            text: "Abrir Exemplo",
            action: abrirExemplo
          }}
        />
        <ExemploUseContext />  
        <Footer />
    </ContextPagina.Provider>
  );
}
