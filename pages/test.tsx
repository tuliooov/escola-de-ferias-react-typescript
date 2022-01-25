import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Banner from 'components/Inicio/Banner'

export default function Index() {
  console.log('Rodei Index')

  return (
    <>
        <IndexNavbar fixed />
        <Banner/>
    </>
  );
}
