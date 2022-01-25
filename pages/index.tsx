import React from "react";
import Footer from "../components/Footers/Footer";
import Banner from "../components/Inicio/Banner";
import Outros from "../components/Inicio/Outros";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function Index() {
  console.log('Rodei Index')

  return (
    <>
        <IndexNavbar />
        <Banner/>
        <Outros/>
        <Footer />
    </>
  );
}
