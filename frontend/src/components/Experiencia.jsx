import '../App.css'
import puc from  "../assets/puc.png"

export default function Experiencia({
    experienciaRef
}) {
    return (
        <div className='experiencia'>
            <section className='section experienciaRef font-mono sublinhado' ref={experienciaRef}>EXPERIÊNCIA</section>
            <div className='centralizar font-sans'>
                <div className='card-experiencia'>
                    <div className='experiencia-info'>
                        <div className='experiencia-info-esquerda'>
                            <p>{"\u2605"} Estudante Engenharia de Software</p>
                            <p>{"\u2605"} Primeiro semestre 2026 - Atualmente</p>
                            <p>{"\u2605"} Detalhes: Ainda em processo de aprendizagem</p>
                        </div>
                        <img className='experiencia-info-direita' src={puc} alt="" />
                    </div>
                    <p className='experiencia-texto'>Ainda não possuo nenhuma experiência profissional, nem na área de tecnológia e nem fora, entretanto, eu espero conseguir criar experiência durante o curso o quanto antes</p>
                </div>
            </div>
        </div>
    )
}