import '../App.css'
import { Link } from 'react-router-dom';
import StarterValley from  "../assets/StarterValley.png";
import Solidarize from  "../assets/Solidarize.jpg";
import CuidaMais from "../assets/Cuida+.png"

const fotos = {
    '1': Solidarize,
    '2': StarterValley,
    '3': CuidaMais
}

export default function CardProjeto({
    nomeProjeto,
    dataProjeto,
    idProjeto
}) {

    const fotoAtual = fotos[idProjeto]

    return (
        <div className='card-projeto-individual'>
            <img className='card-projeto-foto' src={fotoAtual} alt="" />
            <div className='card-info'>
                <p>{nomeProjeto}</p>
                <p>{dataProjeto}</p>
                <div className='card-projeto-redirecionamento'>
                    <Link to={`/projeto/${idProjeto}`}>Detalhes</Link>
                </div>
            </div>
        </div>
    )
}