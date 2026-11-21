import '../App.css'
import foto from  "../assets/image0.jpg"

export default function SobreMim({
    sobreRef
}) {
    return (
        <div className='sobremim'>
          <section className='section sobreRef font-mono sublinhado' ref={sobreRef}>SOBRE MIM</section>
          <div className='sobremim-grid'>
            <div className='fotos-sobremim-grid'>
                <img className='fotos-sobremim' src={foto}  alt="" />
                <img className='fotos-sobremim' src={foto}  alt="" />
            </div>
            <div className='sobremim-info font-sans'>
              <div className='sobremim-info-top'>
                <p className='sobremim-nome'>Maria Paula Barbosa</p>
                <div className='sobremim-ling'>
                  <button>eng</button>
                </div>
              </div>
              <div className='sobremim-info-bottom'>
                <p className='sobremim-text'>texto</p>
              </div>
            </div>
          </div>
        </div>
    )
}