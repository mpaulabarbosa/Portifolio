import '../App.css'
import EnviarEmail from './EnviarEmail'
import email from  "../assets/email.png"
import github from  "../assets/github.png"
import instagram from  "../assets/instagram.png"

export default function Contato({
    contatoRef
}) {
    return (
        <div className='contato'>
            <section className='section contatoRef font-mono sublinhado' ref={contatoRef}>CONTATO</section>
            <div className='faixa-contato'>
                <div className='links'>
                    <a href="https://www.instagram.com/mpabarbosa?fqnt=cDJqa2RqdG1wYXp2&utm_source=qr">
                        <div className='links-contato instagram'>
                            <img src={instagram} alt="instagram" />
                            <p className='font-sans'>instagram</p>
                        </div>
                    </a>
                    <a href="https://github.com/mpaulabarbosa">
                        <div className='links-contato git'>
                            <p className='font-sans'>git</p>
                            <img src={github} alt="git" />
                            <p className='font-sans'>hub</p>     
                        </div>
                    </a>
                    <a href="mailto:mpbacontato@gmail.com">
                        <div className='links-contato email'>
                            <p className='font-sans'>email</p>           
                            <img src={email} alt="email" />
                        </div>
                    </a>
                </div>
                <EnviarEmail></EnviarEmail>
            </div>
        </div>
    )
}