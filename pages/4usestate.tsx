import React, { useState } from "react";
import Footer from "../components/Footers/Footer";
import BannerProps from "../components/Inicio/BannerProps";
import ExemploUseState from "../components/Inicio/Exemplos/ExemploUseState";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function UseState() {

  // criar um estado exibirExemploProps boolean
  // criar uma funcao para true
  // criar uma funcao para false
  // BannerProps espera um parametro buttonAction
  // ExemploUseState espera os parametros exibir e fecharExemplo

  return (
    <>
        <IndexNavbar />
        <BannerProps 
          title="O que é useState em React?"
          description="Em palavras simples, useState permite que nossos componentes funcionais que costumavam ser sem estado se tornem com estado"
        />
        <ExemploUseState />  
        <Footer />
    </>
  );
}