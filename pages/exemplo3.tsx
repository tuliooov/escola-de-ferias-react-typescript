import React, { useState } from "react";
import ContextPagina from "../components/contexts/ContextPagina";
import Footer from "../components/Footers/Footer";
import Banner from "../components/Inicio/Banner";
import Number3 from "../components/Inicio/Number3";
import Outros from "../components/Inicio/Outros";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function Exemplo3() {
  console.log('Rodei Index')

  const [ valor, setValor ] = useState(0)

  return (
    <>
      <ContextPagina.Provider value={{
        valor, setValor
      }}>
        <IndexNavbar />
        <Banner/>
        <Number3/>
        <Outros/>
        <Footer />
      </ContextPagina.Provider>
    </>
  );
}
