import React, { Component } from "react";
import MainNav from "../components/MainNav";
import MainHeader from "../components/MainHeader";
import Patrocinadores from "../components/Patrocinadores";
import MainFooter from "../components/MainFooter";
import Head from "../components/head";

class patrocinadores extends Component {
  constructor() {
    super();

    this.state = {
      patrocinadores: [],
      title: "Cueva de Kun y Hebles - Patrocinadores"
    };
  }

  componentDidMount() {
    fetch("/static/data/patrocinadoresLista.json")
      .then(response => response.json())
      .then(patrocinadoresLista =>
        this.setState({ patrocinadores: patrocinadoresLista })
      );
  }

  render() {
    const { patrocinadores, title } = this.state;

    return (
      <div>
        <Head title={title} />
        <MainNav />
        <MainHeader />
        <Patrocinadores patrocinadores={patrocinadores} />
        <MainFooter />
      </div>
    );
  }
}

export default patrocinadores;
