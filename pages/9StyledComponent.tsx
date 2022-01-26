import React, { useContext } from "react";
import { ContextGlobal } from "../components/contexts/ContextGlobal";
import Footer from "../components/Footers/Footer";
import BannerProps from "../components/Inicio/BannerProps";
import ExemploStyledComponent from "../components/Inicio/Exemplos/ExemploStyledComponent";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function PaginaExemploStyledComponent() {

  console.log("Renderizei Componente PaginaExemploStyledComponent")
 
  const {
    exibir,
    abrirExemplo,
  } = useContext(ContextGlobal)

  console.log("exibirExemploProps é ", exibir)

  return (
    <>
        <IndexNavbar />
        <BannerProps 
          title="Qual é o uso de styled-components?"
          description="Componentes estilizados ajudam a manter as preocupações de estilo e arquitetura de elementos separadas e tornam os componentes mais legíveis. Além disso, quando você tem componentes que dependem do JavaScript para seu estilo, os Componentes com estilo devolvem o controle desses estados ao CSS em vez de usar uma infinidade de nomes de classes condicionais."
          buttonAction={{
            text: "Abrir Exemplo",
            action: abrirExemplo
          }}
        />
        <ExemploStyledComponent />  
        <Footer />
    </>
  );
}
