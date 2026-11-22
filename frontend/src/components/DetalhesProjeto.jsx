import '../App.css'
import { useParams } from 'react-router-dom';
import { projetos } from '../constants/projetos';
import { Link } from 'react-router-dom';

export default function DetalhesProjeto() {
    const { id } = useParams();

    const projeto = projetos.find((p) => p.id === id);

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
        </div>
  );
}