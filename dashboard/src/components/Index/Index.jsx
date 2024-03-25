import React, { Component } from "react";
import ofertaBlack from "../../../../public/images/products/Oferta-BlackFriday.jpg";
import ofertAcc from "../../../../public/images/products/Oferta-Accesorios.jpg";
import Accesorios from "../Accesorios/Accesorios";
import Celulares from "../Celulares/Celulares";
import Product from "../Products/Products";
import { Route, Routes } from "react-router-dom";

export default function Index() {
  return (
    <>
      <main className="content-wrap">
        <Product />
      </main>
    </>
  );
}
