import React from "react";
// import Link from 'next/link'
import MainNav from "../components/MainNav";
import MainHeader from "../components/MainHeader";
import MainInfo from "../components/MainInfo"
import MainFooter from "../components/MainFooter"

const Home = () => (
  <div>
    <MainNav />
    <MainHeader />
    <MainInfo />
    <MainFooter />
    <style jsx>{`


    `}</style>
  </div>
);

export default Home;