import '../App.css'
import CardProjeto from './CardProjeto'
import { projetos } from '../constants/projetos';

export default function Projetos({
    projetosRef
}) {

    const projetosOrdenados = [...projetos].sort((a, b) => {

        if (!a.data) return 1;
        if (!b.data) return -1;
        if (a.data === b.data) return 0;

        return new Date(a.data) - new Date(b.data);
    });

    return (
        <div className='projetos'>
            <section className='section projetosRef font-mono sublinhado' ref={projetosRef}>PROJETOS</section>
            <div className='centralizar font-sans'>
                <div className='card-projeto'>
                    <div className='card-projeto-top'>
                        <p className='projeto-setas'>{'\u2190'}</p>
                        <p>MAIS ANTIGOS</p>
                        <div className='listra-projeto' />
                        <p>MAIS RECENTES</p>
                        <p className='projeto-setas'>{'\u2192'}</p>
                    </div>
                    <div className='card-projeto-bottom'>
                        {projetosOrdenados.map ((projeto) =>
                            <CardProjeto
                                nomeProjeto={projeto.nome}
                                dataProjeto={projeto.descricao}
                                idProjeto = {projeto.id}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}