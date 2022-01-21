import React from 'react';
import Navbarra from '../components/Navbarra';
import Footer from '../components/Footer';
import '../styles/cardapio.css';


export default function comunicado() {
  return (
    <body>
        <Navbarra />
        <div className='cardapio'>
            <h2>Cardápio</h2>
        </div>
        <Footer />
    </body>
  )
}