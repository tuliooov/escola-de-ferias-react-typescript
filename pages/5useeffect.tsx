import React, { useState, useEffect } from "react";
import Footer from "../components/Footers/Footer";
import BannerProps from "../components/Inicio/BannerProps";
import ExemploUseEffect from "../components/Inicio/Exemplos/ExemploUseEffect";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function PaginaExemploUseEffect() {

  console.log("Renderizei Componente PaginaExemploUseEffect")
 
  const [exibirExemploProps, setExibirExemploProps] = useState(false)

  console.log("exibirExemploProps é ", exibirExemploProps)

  const abrirExemplo = () => {
    setExibirExemploProps(true)
  }

  const fecharExemplo = () => {
    setExibirExemploProps(false)
  }


  // vai rodar sempre na primeira renderizacao
  // vai rodar sempre que os estados monitorados forem alterados

  return (
    <>
        <IndexNavbar />
        <BannerProps 
          title="Quando devo usar useEffect?"
          description=" A ideia de usar o hook useEffect é executar o código que precisa acontecer durante o ciclo de vida do componente em vez de interações específicas do usuário ou eventos DOM."
          buttonAction={{
            text: "Abrir Exemplo",
            action: abrirExemplo
          }}
        />
        
        <button onClick={() => {
          setExibirExemploProps(false)
        }}> Fechar Exemplo</button>
        <ExemploUseEffect exibir={exibirExemploProps} fecharExemplo={fecharExemplo} />  
        <Footer />
    </>
  );
}
