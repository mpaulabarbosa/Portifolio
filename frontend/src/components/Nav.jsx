import '../App.css'

export default function Nav({
  sobreRef,
  projetosRef,
  experienciaRef,
  contatoRef,
}) {
  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollPortfolio = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
    <nav className="font-mono">
      <ul>
        <li>
          <button
            className="palavra-sublinhada"
            type="button"
            onClick={handleScrollPortfolio}
          >
            portfólio
          </button>
        </li>
        <li>
          <button
            className="palavra-sublinhada"
            type="button"
            onClick={() => scrollToSection(sobreRef)}
          >
            sobre mim
          </button>
        </li>
        <li>
          <button
            className="palavra-sublinhada"
            type="button"
            onClick={() => scrollToSection(projetosRef)}
          >
            projetos
          </button>
        </li>
        <li>
          <button
            className="palavra-sublinhada"
            type="button"
            onClick={() => scrollToSection(experienciaRef)}
          >
            experiência
          </button>
        </li>
        <li>
          <button
            className="palavra-sublinhada"
            type="button"
            onClick={() => scrollToSection(contatoRef)}
          >
            contato
          </button>
        </li>
      </ul>
    </nav>
  );
}