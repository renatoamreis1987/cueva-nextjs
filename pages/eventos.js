import React, { Component } from "react";
import MainNav from "../components/MainNav";
import MainHeader from "../components/MainHeader";
import Eventos from "../components/Eventos";
import MainFooter from "../components/MainFooter";
import Head from "../components/head"

class eventos extends Component {
  constructor() {
    super();

    this.state = {
      eventos: [],
      title: 'Cueva de Kun y Hebles - Eventos'
    };
  }

  componentDidMount() {
    fetch("/static/data/eventos.json")
      .then(response => response.json())
      .then(eventosC => this.setState({ eventos: eventosC }));
  }

  render() {
    const { eventos, title } = this.state;

    return (
      <div>
        <Head title={title}/>
        <MainNav />
        <MainHeader />
        <Eventos eventos={eventos} />
        <MainFooter />
      </div>
    );
  }
}

export default eventos;
