import '../App.css'
import { Link } from 'react-router-dom';

export default function CardProjeto({
    fotoProjeto,
    nomeProjeto,
    dataProjeto,
    idProjeto
}) {
    return (
        <div className='card-projeto-individual'>
            <img className='card-projeto-foto' src={fotoProjeto} alt="" />
            <div className='card-info'>
                <p>{nomeProjeto}</p>
                <p>{dataProjeto}</p>
                <Link to={`/projeto/${idProjeto}`}>Detalhes</Link>
            </div>
        </div>
    )
}