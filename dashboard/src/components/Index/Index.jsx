import React, { Component } from "react";
/* import ofertaBlack from "../../../../public/images/products/Oferta-BlackFriday.jpg";
import ofertAcc from "../../../../public/images/products/Oferta-Accesorios.jpg";
import Accesorios from "../Accesorios/Accesorios";
import Celulares from "../Celulares/Celulares"; */
import Product from "../Products/Products";
import { Route, Routes } from "react-router-dom";

export default function Index() {
  return (
    <>
      <main className="content-wrap">
        <Product />
        {/* <Routes>
        
          <Route path="/" exact element={<Product />} />
        

          <h3 className="main-categorie">CELULARES</h3>
        <Celulares />

        <h3 classNameName="main-categorie">ACCESORIOS</h3>
        <Accesorios />
        </Routes> */}
      </main>
    </>
  );
}
