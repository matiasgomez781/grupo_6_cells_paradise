import React, { Component } from "react";
import ofertaBlack from "../../../../public/images/products/Oferta-BlackFriday.jpg";
import ofertAcc from "../../../../public/images/products/Oferta-Accesorios.jpg";
import Accesorios from "../Accesorios/Accesorios";
import Celulares from "../Celulares/Celulares";

export default class Categories extends Component {
  render() {

    return (
      <>
        <h3 className="main-categorie">CELULARES</h3>
        <Celulares />

        <h3 classNameName="main-categorie">ACCESORIOS</h3>
        <Accesorios />
      </>
    );
  }

  constructor(){
    super();
    this.state = {
        productList: []
    }
}
}
