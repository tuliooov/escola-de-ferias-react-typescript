import React from "react";
import Footer from "../components/Footers/Footer";
import BannerProps from "../components/Inicio/BannerProps";
import ExemploTypescript from "../components/Inicio/Exemplos/ExemploTypescript";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function Typescript() {

  const exibirExemploProps = false

  return (
    <>
        <IndexNavbar />
        {/* Verificar se o componente entende que os parametros `title` e `description` */}
        <BannerProps 
          title="O que é TypeScript para React?"
          description="TypeScript é uma linguagem que estende o JavaScript adicionando definições de tipo"
        />
        {/* Verificar se o componente entende que o parametro `exibir` */}
        <ExemploTypescript exibir={exibirExemploProps} />  
        <Footer />
    </>
  );
}