import React, { useState, useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Banner from 'components/Inicio/Banner'
import Outros from 'components/Inicio/Outros'
import Number2 from 'components/Inicio/Number2'
import Footer from "components/Footers/Footer.js";

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
        <IndexNavbar fixed />
        <Banner/>
        <Number2 valor={valor} setValor={setValor}/>
        <Outros/>
        <Footer />
    </>
  );
}
