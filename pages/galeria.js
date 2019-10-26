import React, { Component } from "react";
import MainNav from "../components/MainNav";
import MainHeader from "../components/MainHeader";
import Galeria from "../components/Galeria";
import MainFooter from "../components/MainFooter";
import Head from "../components/head";

class galeria extends Component {
  constructor() {
    super();

    this.state = {
      galeria: [],
      title: "Cueva de Kun y Hebles - Galeria"
    };
  }

  componentDidMount() {
    fetch("/static/data/galeria.json")
      .then(response => response.json())
      .then(galeriaData => this.setState({ galeria: galeriaData }));
  }

  render() {
    const { galeria, title } = this.state;

    return (
      <div>
        <Head title={title} />
        <MainNav />
        <MainHeader />
        <Galeria galeria={galeria} />
        <MainFooter />
      </div>
    );
  }
}

export default galeria;
