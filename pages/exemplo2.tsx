import React, { useState, useEffect } from "react";
import Footer from "../components/Footers/Footer";
import Banner from "../components/Inicio/Banner";
import Number2 from "../components/Inicio/Number2";
import Outros from "../components/Inicio/Outros";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function Index() {
  console.log('RODEI EXEMPLO 2')

  const [ valor, setValor ] = useState(0)
  const [ carregando, setCarregando ] = useState(true)


  useEffect(() => {
    //aguardar 2 segundos
    console.log('USE EFFECT')
    setTimeout(function(){
      setCarregando(!carregando)
    },2000)
  }, [valor])

  // if(carregando === true){
  //   return (<h1 style={{textAlign:"center", fontSize: '48px'}}> Caregando... </h1>)
  // }

  return (
    <>
        <IndexNavbar />
        <Banner/>
        <Number2 valor={valor} setValor={setValor}/>
        <Outros/>
        <Footer />
    </>
  );
}
