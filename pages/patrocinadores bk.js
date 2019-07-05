import React from "react";
import MainNav from "../components/MainNav";
import MainHeader from "../components/MainHeader";
import Patrocinadores from "../components/Patrocinadores"
import MainFooter from "../components/MainFooter"

const patrocinadores = () => (
  <div>
    <MainNav />
    <MainHeader />
    <Patrocinadores />
    <MainFooter />
  </div>
);

export default patrocinadores;