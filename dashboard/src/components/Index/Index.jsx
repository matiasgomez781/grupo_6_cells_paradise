import React, { Component } from "react";
/* import ofertaBlack from "../../../../public/images/products/Oferta-BlackFriday.jpg";
import ofertAcc from "../../../../public/images/products/Oferta-Accesorios.jpg";
import Accesorios from "../Accesorios/Accesorios";
import Celulares from "../Celulares/Celulares"; */
import Product from "../Products/Products";


export default class Index extends Component {
  render() {

    return (
      <>
        <h3 className="main-categorie">PRODUCTOS</h3>
        <Product />

        {/* <h3 className="main-categorie">CELULARES</h3>
        <Celulares />

        <h3 classNameName="main-categorie">ACCESORIOS</h3>
        <Accesorios /> */}
      </>

    );
  }

  /* constructor(){
    super();
    this.state = {
        productList: []
    }
} */
}
