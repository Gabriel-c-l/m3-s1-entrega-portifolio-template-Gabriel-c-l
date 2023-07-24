import './styles/App.css';
/*
import './styles/reset.css';

header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.redirect{
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 768px) {
    
}

*/

function App() {

  return (
    <>

      <header>
        <h1 className='header-title'>Portfólio</h1>
          <div className='header-redirect'>
            <p className='header-text'>Sobre</p>
            <p className='header-text'>Stack</p>
            <p className='header-text'>Projetos</p>
          </div>
        <button className='header-button'>Contato</button>
      </header>

      <section className='banner-section'>
        <div className='banner-div'>
          <p className='banner-text__name'>GABRIEL C.L</p>
          <h2 className='banner-title'>Bem vindo ao meu portfólio</h2>
          <p className='banner-text'>Sou um estudante iniciando nesse mundo da programaçao</p>
          <button className='banner-button'>Saiba mais</button>
        </div>
        <img className='banner-img' src="./src/assets/banner-img.png" alt="" />
      </section>

      <section className='aboutMe-section'>
        <h2 className='aboutMe-title'>Sobre mim</h2>
          <p className='aboutMe-text'>Olá! Sou iniciante na programação, essa área de tecnologia sempre me interessou.</p>
          <p className='aboutMe-text'>Escolhi o curso da Kenzie pois ela me oferece maiores oportunidades para me desenvolver tanto profissionalmente quanto pessoalmente. </p>
          <p className='aboutMe-text'>Estou no módulo 2 do curso, muito animado e esperançoso com o futuro, tenho certeza que essa é minha oportunidade de ouro.</p>
          <p className='aboutMe-text'>gabriel.c.lopes2004@gmail.com</p>
      </section>

      <section className='tech-section'>
        <h2 className='tech-title'>Tecnologias</h2>
        <ul className='tech-li'>
          <li className='tech-card'>
            <img className='tech-img' src="./src/assets/html-icon.png" alt="" />
            <h3 className='tech-desctiption'>HTML</h3>
          </li>

          <li className='tech-card'>
            <img className='tech-img' src="./src/assets/css-icon.png" alt="" />
            <h3 className='tech-desctiption'>CSS</h3>
          </li>

          <li className='tech-card'>
           <img className='tech-img' src="./src/assets/js-icon.png" alt="" />
            <h3 className='tech-desctiption'>Javascript</h3>
          </li>

          <li className='tech-card'>
            <img className='tech-img' src="./src/assets/react-icon.png" alt="" />
            <h3 className='tech-desctiption'>React</h3>
          </li>
        </ul>
      </section>


      <section className='projects-section'>
        <h2 className='projects-title'>Projetos</h2>
        <ul className='projects-li'>
          <li className='projects-card'>
            <div className='projects-div'>
              <h3 className='projects-div__title'>Projeto 1</h3>
              <img className='projects-img' src="./src/assets/git-icon.png" alt="" />
            </div>
            <p className='projects-text'>Descrição do projeto</p>
            <button className='projects-div__button'>Saiba mais</button>
          </li>

          <li className='projects-card'>
            <div className='projects-div'>
              <h3 className='projects-div__title'>Projeto 1</h3>
              <img className='projects-img' src="./src/assets/git-icon.png" alt="" />
            </div>
            <p className='projects-text'>Descrição do projeto</p>
            <button className='projects-div__button'>Saiba mais</button>
          </li>

          <li className='projects-card'>
            <div className='projects-div'>
              <h3 className='projects-div__title'>Projeto 1</h3>
              <img className='projects-img' src="./src/assets/git-icon.png" alt="" />
            </div>
            <p className='projects-text'>Descrição do projeto</p>
            <button className='projects-div__button'>Saiba mais</button>
          </li>

          <li className='projects-card'>
            <div className='projects-div'>
              <h3 className='projects-div__title'>Projeto 1</h3>
              <img className='projects-img' src="./src/assets/git-icon.png" alt="" />
            </div>
            <p className='projects-text'>Descrição do projeto</p>
            <button className='projects-div__button'>Saiba mais</button>
          </li>
        </ul>
      </section>

      <footer>
        <div className='footer-div'>
          <h2 className='footer-title'>Contato</h2>
          <div className='footer-div__imgs'>
            <img className='footer-img' src="./src/assets/whatsapp-icon.png" alt="" />
            <img className='footer-img' src="./src/assets/linkedin-icon.png" alt="" />
            <img className='footer-img' src="./src/assets/github-icon.png" alt="" />
          </div>
          <p className='footer-text'>Todos os direitos reservados - Gabriel Corrêa Lopes</p>
        </div>
      </footer>

    </>
  )
}

export default App
