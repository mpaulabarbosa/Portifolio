import '../App.css'
import React, { useState } from 'react';
import { sobremim } from '../constants/sobremim';
import sobremimFlor from  "../assets/sobremim-flor.jpg"
import sobremimCeu from  "../assets/sobremim-ceu.jpg"

export default function SobreMim({
    sobreRef
}) {
  const [idioma, setIdioma] = useState('pt');

  const handleClick = () => {
    setIdioma((prevIdioma) => 
      prevIdioma === 'pt' ? 'en' : 'pt'
    );
  };
    return (
        <div className='sobremim'>
          <section className='section sobreRef font-mono sublinhado' ref={sobreRef}>SOBRE MIM</section>
          <div className='centralizar'>
            <div className='sobremim-grid'>
              <div className='fotos-sobremim-grid'>
                  <img className='fotos-sobremim' src={sobremimCeu}  alt="" />
                  <img className='fotos-sobremim' src={sobremimFlor}  alt="" />
              </div>
              <div className='sobremim-info font-sans'>
                <div className='sobremim-info-top'>
                  <p className='sobremim-nome'>Maria Paula Barbosa</p>
                  <div className='sobremim-ling'>
                    <button onClick={handleClick}>{idioma}</button>
                  </div>
                </div>
                <div className='sobremim-text sobremim-info-bottom'>
                  <p>{sobremim[idioma].info}</p>
                  <div className='sobremim-tecnologias'>
                    <p>{sobremim[idioma].tecnologias}:</p>
                    <ul>
                      <li>{"\u2605"} JAVA</li>
                      <li>{"\u2605"} JAVASCRIPT</li>
                      <li>{"\u2605"} PYTHON</li>
                      <li>{"\u2605"} GIT</li>
                    </ul>
                  </div>
                  <p>{sobremim[idioma].interesses}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}