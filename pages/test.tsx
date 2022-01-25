import React from "react";
import Banner from "../components/Inicio/Banner";
import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function Index() {
  console.log('Rodei Index')

  return (
    <>
        <IndexNavbar />
        <Banner/>
    </>
  );
}
