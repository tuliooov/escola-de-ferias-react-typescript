import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Banner from 'components/Inicio/Banner'
import Number1 from 'components/Inicio/Number1'
import Footer from "components/Footers/Footer.js";

export default function Index() {
  console.log('RENDERIZEI O COMPONENT')


  return (
    <>
        <IndexNavbar fixed />
        <Banner/>
        <Number1 />
        <Footer />
    </>
  );
}