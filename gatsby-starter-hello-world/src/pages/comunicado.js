import React from 'react';
import Navbarra from '../components/Navbarra';
import Footer from '../components/Footer';
import '../styles/comunicado.css';


export default function comunicado() {
  return (
    <body>
        <Navbarra />
        <div className='aviso'>
            <h2>Comunicado Importante!</h2>
            <br></br><p> Devido a pandemia temos atendido apenas por delivery, mas quando normaliza voltaremos a ter na loja presencial.</p>
            <br></br><p>Faça seu pedido pelo nosso Whatsapp: (16)98765-1234</p>
        </div>
        <Footer />
    </body>
  )
}