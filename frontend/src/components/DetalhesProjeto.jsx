import '../App.css'
import { useParams } from 'react-router-dom';
import { projetos } from '../constants/projetos';

export default function DetalhesProjeto() {
    const { id } = useParams();

    return (
        <div className="">
            <h1>TESTE DE PÁGINA DE DETALHES</h1>
            <p>O ID do projeto é: {id}</p>
        </div>
  );
}