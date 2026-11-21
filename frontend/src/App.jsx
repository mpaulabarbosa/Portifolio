import { useState } from 'react'
import { useRef } from 'react';
import './App.css'
import Nav from './components/Nav'
import SobreMim from './components/SobreMim';
import Projetos from './components/Projetos';

function App() {

  const sobreRef = useRef(null);
  const projetosRef = useRef(null);
  const experienciaRef = useRef(null);
  const contatoRef = useRef(null);

  return (
    <div className='pagina-completa'>
      <div className='nav'>
      <Nav
        sobreRef={sobreRef}
        projetosRef={projetosRef}
        experienciaRef={experienciaRef}
        contatoRef={contatoRef}
      />
      </div>
      <header>
        <div className='info-intro'>   
          <div className='linha vertical-intro'/>
          <div className='intro-escrita'>
            <h1 className='font-display titulo'>Portfólio</h1>
            <h3 className='font-display subtitulo'>Maria Paula Barbosa {"\u2727"}</h3>
          </div>
          <div className='linha vertical-intro direita'/>
        </div>
      </header>
      <main>
        <SobreMim 
          sobreRef={sobreRef}
        />
        <Projetos 
          projetosRef={projetosRef}
        />
      </main>
    </div>
  )
}

export default App
