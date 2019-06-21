import React from "react";
import MainNav from "../components/MainNav";
import MainHeader from "../components/MainHeader";
import Eventos from "../components/Eventos"
import MainFooter from "../components/MainFooter"

const eventos = () => (
  <div>
    <MainNav />
    <MainHeader />
    <Eventos />
    <MainFooter />
  </div>
);

export default eventos;
