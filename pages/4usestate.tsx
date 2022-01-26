import React, { useState } from "react";
import Footer from "../components/Footers/Footer";
import BannerProps from "../components/Inicio/BannerProps";
import ExemploUseState from "../components/Inicio/Exemplos/ExemploUseState";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function UseState() {

  const [exibirExemploProps, setExibirExemploProps] = useState(false)

  const abrirExemplo = () => {
    setExibirExemploProps(true)
  }

  const fecharExemplo = () => {
    setExibirExemploProps(false)
  }

  return (
    <>
        <IndexNavbar />
        <BannerProps 
          title="O que é useState em React?"
          description="Em palavras simples, useState permite que nossos componentes funcionais que costumavam ser sem estado se tornem com estado"
          buttonAction={{
            text: "Abrir Exemplo",
            action: abrirExemplo
          }}
        />
        <ExemploUseState exibir={exibirExemploProps} fecharExemplo={fecharExemplo} />  
        <Footer />
    </>
  );
}