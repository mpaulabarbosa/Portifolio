import '../App.css'
import EnviarEmail from './EnviarEmail'

export default function Contato({
    contatoRef
}) {
    return (
        <div className='contato'>
            <section className='section contatoRef font-mono sublinhado' ref={contatoRef}>CONTATO</section>
            <div className='faixa-contato'>
                <div className='links'>
                    <div>a</div>
                    <div>b</div>
                    <div>c</div>
                </div>
                <EnviarEmail></EnviarEmail>
            </div>
        </div>
    )
}