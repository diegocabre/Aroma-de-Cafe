import React from "react";
import "../components/css/Home.css";
import granos from "../components/imgs/granos.png";
export default function Home() {
  return (
    <section className="home">
      <div>
        <h1>Descubre el Mejor Café</h1>
      </div>
      <div>
        <img src={granos} alt="" />
      </div>
    </section>
  );
}
