import React, { useContext } from "react";
import { ContextGlobal } from "../components/contexts/ContextGlobal";
import Footer from "../components/Footers/Footer";
import BannerProps from "../components/Inicio/BannerProps";
import ExemploUseContextGlobal from "../components/Inicio/Exemplos/ExemploUseContextGlobal";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function PaginaExemploUseContext() {

  console.log("Renderizei Componente PaginaExemploUseContext")
 
  const {
    exibir,
    abrirExemplo,
  } = useContext(ContextGlobal)

  console.log("exibirExemploProps é ", exibir)

  return (
    <>
        <IndexNavbar />
        <BannerProps 
          title="O que é useContext no React?"
          description="é usado para criar dados comuns que podem ser acessados ​​em toda a hierarquia de componentes sem passar os props manualmente para cada nível . O contexto definido estará disponível para todos os componentes filhos sem envolver “props”."
          buttonAction={{
            text: "Abrir Exemplo",
            action: abrirExemplo
          }}
        />
        <ExemploUseContextGlobal />  
        <Footer />
    </>
  );
}
