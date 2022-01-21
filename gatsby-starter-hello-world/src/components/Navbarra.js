import React from 'react';
import { Link } from "gatsby"

export default function Navbarra() {
  return (
    <header>
        <div class="container">
            <h2 class="logo"> </h2>
            <nav>
                <Link to="/comunicado">Comunicado</Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    </header>
  )
}
