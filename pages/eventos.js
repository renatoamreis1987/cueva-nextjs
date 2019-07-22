import React, { Component } from "react";
import MainNav from "../components/MainNav";
import MainHeader from "../components/MainHeader";
import Eventos from "../components/Eventos";
import MainFooter from "../components/MainFooter";

class eventos extends Component {
  constructor() {
    super();

    this.state = {
      eventos: []
    };
  }

  componentDidMount() {
    fetch("/static/data/eventos.json")
      .then(response => response.json())
      .then(eventosC => this.setState({ eventos: eventosC }));
  }

  render() {
    const { eventos } = this.state;

    return (
      <div>
        <MainNav />
        <MainHeader />
        <Eventos eventos={eventos} />
        <MainFooter />
      </div>
    );
  }
}

export default eventos;
