import { Link } from "gatsby"
import React from "react"

import '../styles/main.css'


export default function Home() {
  return (
    <body>
      <header>
        <div class="container">
            <h2 class="logo"> </h2>
            <nav>
                <Link to="/comunicado">Comunicado</Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    </header>

    <main>
        <div class="bloco-principal">
            <div class="container">
                <h3 class="titulo">Sobre Nós</h3>
                <p class="descricao">Comida vegana saudável e fresca: não importa se você começou ontem no veganismo ou já está no caminho a tempos, temos algo que vai agradar o seu paladar.</p>
                <p class="descricao">Produtores locais e orgânicos: trabalhamos com produtos de agricultura familiar e incentivamos a produção de comida local.</p>
                <p class="descricao">Acessível a todos: comida vegana não precisa ser cara e inacessível, o Contra o Filé tenta democratizar o acesso a esse tipo de produto.</p>
                <div>
                    <button role="button" class="botao">
                       <Link to="/cardapio" className="cor"><h3>Ver Cardápio</h3></Link> 
                    </button>
                </div>
            </div>           
        </div>
    </main>
    <footer class = "rodape">
     <br></br> <p class = "contato"> </p>
     <br></br> <p class = "contato">Horário de funcionamento: 11:00 - 15:00 de Seg a Sáb.</p>
     <br></br> <p class = "contato">Localização: Rua Alfredo Lopes 1717 - CEP 13560460</p>    
     <br></br> <p class = "contato">Telefone: (16) 98765-1234 - Whatsapp</p>
    </footer>
    
    </body>
    
  )
}