import React, { useContext } from "react";
import { ContextGlobal } from "../components/contexts/ContextGlobal";
import Footer from "../components/Footers/Footer";
import BannerProps from "../components/Inicio/BannerProps";
import ExemploConexaoBackEnd from "../components/Inicio/Exemplos/ExemploConexaoBackEnd";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function PaginaExemploConexaoBackEnd() {

  console.log("Renderizei Componente PaginaExemploConexaoBackEnd")
 
  const {
    exibir,
    abrirExemplo,
  } = useContext(ContextGlobal)

  console.log("exibirExemploProps é ", exibir)

  return (
    <>
        <IndexNavbar />
        <BannerProps 
          title="O que é consumir uma API?"
          description="Uma API funciona como uma ponte entre duas aplicações. Geralmente, uma aplicação interessada em consumir os serviços de um Web Service fará isso através do protocolo HTTP."
          buttonAction={{
            text: "Abrir Exemplo",
            action: abrirExemplo
          }}
        />
        <ExemploConexaoBackEnd />  
        <Footer />
    </>
  );
}
