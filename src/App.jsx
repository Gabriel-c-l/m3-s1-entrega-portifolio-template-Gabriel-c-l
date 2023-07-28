import { username, user } from './data/user.js'
import { technologies } from './data/technologies.js';
import { projects } from './data/projects.js';
import styles from './styles/App.module.css';
import banner from '/src/assets/banner-img.png';

import git from '/src/assets/git-icon.png';
import whatsapp from '/src/assets/whatsapp-icon.png';
import linkedin from '/src/assets/linkedin-icon.png';
import github from '/src/assets/github-icon.png';



function App() {

  return (
    <>

      <header>
        <h1 className={styles.pageTitle}>Portfólio</h1>
          <div className={styles.headerRedirect}>
            <a href="#aboutMe-section" className={styles.redirect}>Sobre</a>
            <a href="#tech-title" className={styles.redirect}>Stack</a>
            <a href="#projects-section" className={styles.redirect}>Projetos</a>
          </div>
        <button className={styles.button}>Contato</button>
      </header>

      <section className={styles.bannerSection}>
        <div>
          <p className={styles.name}>{ username }</p>
          <h2 className={styles.title}>Bem vindo ao meu portfólio</h2>
          <p className={styles.text}>Sou um estudante iniciando nesse mundo da programaçao</p>
          <button className={styles.button}>Saiba mais</button>
        </div>
        <img className={styles.img} src={banner} alt="" />
      </section>

      <section id='aboutMe-section' className={styles.aboutMeSection} >
        <h2 className={styles.aboutMetitle}>Sobre mim</h2>
        <div className={styles.aboutMeDiv}>
          <p className={styles.text}>Olá! Sou iniciante na programação, essa área de tecnologia sempre me interessou.</p>
          <p className={styles.text}>Escolhi o curso da Kenzie pois ela me oferece maiores oportunidades para me desenvolver tanto profissionalmente quanto pessoalmente. </p>
          <p className={styles.text}>Estou no módulo 2 do curso, muito animado e esperançoso com o futuro, tenho certeza que essa é minha oportunidade de ouro.</p>       
        </div>
      </section>

      <section className={styles.space}>
      <h2 id="tech-title" className={styles.title}>Tecnologias</h2>
      <ul className={styles.list}>
        {technologies.map((tech) => (
          <li key={tech.name} className={styles.card1}>
            <img className={styles.techImg} src={tech.img} alt={tech.name} />
            <h3 className={styles.pageTitle}>{tech.name}</h3>
          </li>
        ))}
      </ul>
    </section>    

    <section id='projects-section' className={styles.space}>
      <h2 className={styles.title}>Projetos</h2>
      <ul className={styles.projectsList}>
        {projects.map((project, index) => (
          <li key={index} className={styles.card2}>
            <div className={styles.projectDiv}>
              <h3 className={styles.pageTitle}>{project.name}</h3>
              <img className={styles.gitIcon} src={git} alt="" />
            </div>
            <p className={styles.text}>{project.description}</p>
            <a href={project.link} className={styles.projectButton} target="_blank" rel="noopener noreferrer">
              Saiba mais
            </a>
          </li>
        ))}
      </ul>
    </section>

      <footer>
        <div className={styles.footerDiv}>
          <h2 className={styles.footerTitle}>Contato</h2>
          <div>
            <img className={styles.footerIcon} src={whatsapp} alt="" />
            <img className={styles.footerIcon} src={linkedin} alt="" />
            <img className={styles.footerIcon} src={github} alt="" />
          </div>
        </div>
        <p className={styles.footerText}>Todos os direitos reservados - {user}</p>
      </footer>

    </>
  )
}

export default App
