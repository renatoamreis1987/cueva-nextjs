import React, { Component } from "react";
import MainNav from "../components/MainNav";
import MainHeader from "../components/MainHeader";
import Patrocinadores from "../components/Patrocinadores";
import MainFooter from "../components/MainFooter";

class patrocinadores extends Component {
  constructor() {
    super();

    this.state = {
      patrocinadores: []
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
    const { patrocinadores } = this.state;

    return (
      <div>
        <MainNav />
        <MainHeader />
        <Patrocinadores patrocinadores={patrocinadores} />
        <MainFooter />
      </div>
    );
  }
}

export default patrocinadores;
