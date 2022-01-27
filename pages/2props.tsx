import React from "react";
import Footer from "../components/Footers/Footer";
import BannerProps from "../components/Inicio/BannerProps";
import ExemploProps from "../components/Inicio/Exemplos/ExemploProps";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function Props() {

  // No BannerProps, passar parametros title e description
  // No ExemploProps passar o parametro exibir

  return (
    <>
        <IndexNavbar />
        <BannerProps /> 
        <ExemploProps />
        <Footer />
    </>
  );
}






// title="O que é o Props no React?"
//           description="As props são entradas que não podem ser alteradas dentro de um componente. Componentes devem, obrigatoriamente, apenas ler as props. Sendo assim, todos os componentes de React devem ser “puros” e não podem alterar nenhum valor das props. ... O React é uma ferramenta muito poderosa e com uma documentação"