import React, { Component } from "react";
import MainNav from "../components/MainNav";
import MainHeader from "../components/MainHeader";
import Galeria from "../components/Galeria";
import MainFooter from "../components/MainFooter";

class galeria extends Component {
  constructor() {
    super();

    this.state = {
      galeria: []
    };
  }

  componentDidMount() {
    fetch("/static/data/galeria.json")
      .then(response => response.json())
      .then(galeriaData => this.setState({ galeria: galeriaData }));
  }

  render() {
    const { galeria } = this.state;

    return (
      <div>
        <MainNav />
        <MainHeader />
        <Galeria galeria={galeria} />
        <MainFooter />
      </div>
    );
  }
}

export default galeria;
