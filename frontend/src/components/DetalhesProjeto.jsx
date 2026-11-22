import '../App.css'
import { useParams } from 'react-router-dom';
import { projetos } from '../constants/projetos';
import { Link } from 'react-router-dom';
import StarterValley from  "../assets/StarterValleyPage.png";
import Solidarize from  "../assets/SolidarizePage.jpg";
import EmDesenvolvimento from "../assets/EmDesenvolvimento.png"
import github from "../assets/github.png"

const pages = {
    '1': Solidarize,
    '2': StarterValley,
    '3': null
}

export default function DetalhesProjeto() {
    const { id } = useParams();

    const projeto = projetos.find((p) => p.id === id);

    const pageAtual = pages[id]|| EmDesenvolvimento

    if (!projeto) {
        return (
            <div className="pagina-projeto">
                <Link className='detalhes-voltar' to={`/`}><p className='font-mono'>VOLTAR</p></Link>
                <div className="font-sans naoEncontrado-projeto sublinhado">Esse projeto não existe!</div>
            </div>
        )
    }

    return (
        <div className="pagina-projeto">
            <Link className='detalhes-voltar' to={`/`}><p className='font-mono'>VOLTAR</p></Link>
            <div className='card-detalhes font-sans'>
                <div className='detalhes-info'>
                    <div className='detalhes-info-esquerda'>
                        <p className='detalhes-nomeProjeto'>{projetos[id-1].nome}</p>
                        <p className='detalhes-descricaoProjeto'>{projetos[id-1].descricaoProjeto}</p>
                        <div className='detalhes-tecnologiasProjeto'>
                            <p>Tecnologias:</p>
                            <ul>
                                <li>{"\u2605"} {projetos[id-1].tecnologias[0]}</li>
                                <li>{"\u2605"} {projetos[id-1].tecnologias[1]}</li>
                                <li>{"\u2605"} {projetos[id-1].tecnologias[2]}</li>
                                <li>{"\u2605"} {projetos[id-1].tecnologias[3]}</li>
                            </ul>
                        </div>
                        <a href={projetos[id-1].link}>
                            <div className='links-contato git'>
                                <p className='font-sans'>git</p>
                                <img src={github} alt="git" />
                                <p className='font-sans'>hub</p>     
                            </div>
                        </a>
                    </div>
                    <img className='detalhes-info-direita' src={pageAtual} alt="" />
                </div>
            </div>
        </div>
  );
}