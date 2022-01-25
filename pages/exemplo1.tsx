import React from "react";
import Footer from "../components/Footers/Footer";
import Banner from "../components/Inicio/Banner";
import Number1 from "../components/Inicio/Number1";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function Index() {
  console.log('RENDERIZEI O COMPONENT')


  return (
    <>
        <IndexNavbar />
        <Banner/>
        <Number1 />
        <Footer />
    </>
  );
}