import React, { useEffect, useContext } from "react";
import { ContextGlobal } from "../components/contexts/ContextGlobal";
import Footer from "../components/Footers/Footer";
import Banner from "../components/Inicio/Banner";
import Number4 from "../components/Inicio/Number4";
import Outros from "../components/Inicio/Outros";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function Exemplo4() {
  console.log('Rodei Index')

  const {
    carregando, setCarregando
  } = useContext(ContextGlobal);

  useEffect(() => {
    window.setTimeout(function(){
      setCarregando(false)
    },2500)
  }, []);

  if(carregando === true){
    return (<h1 style={{textAlign:"center", fontSize: '48px'}}> Caregando... </h1>)
  }

  return (
    <>
        <IndexNavbar />
        <Banner/>
        <Number4/>
        <Outros/>
        <Footer />
    </>
  );
}
