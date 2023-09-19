import React from "react";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <>
      <header>
        <h1>Vite + React / Coded by - RM98110</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
        </ul>
      </header>
    </>
  );
}