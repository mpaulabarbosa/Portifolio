import '../App.css'

export default function Experiencia({
    experienciaRef
}) {
    return (
        <div className='experiencia'>
            <section className='section experienciaRef font-mono sublinhado' ref={experienciaRef}>EXPERIÊNCIA</section>
            <div className='centralizar font-sans'>
                <div className='card-experiencia'>
                    <p>texto</p>
                </div>
            </div>
        </div>
    )
}