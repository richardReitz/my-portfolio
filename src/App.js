import './App.css';
import Header from './components/Header';
import Title from './components/Title';

import avatar from './assets/rr-22-bg.png'
import cep from './assets/CEP-Finder.png'
import calls from './assets/SC-3.png'
import logo from './assets/Logo-RR.png';
import moneyApp from './assets/moneyApp.png';
import infusion from './assets/infusion.png';
import CV from './assets/CV-RR.pdf';

import AOS from 'aos';
import "aos/dist/aos.css";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { useEffect } from 'react';


function App() {
  
  useEffect(() => {
    AOS.init({
      duration : 2000,
      once: true
    });
  }, []);

  return (
    <div className='container'>
        <Header/>
        <section id='presentation'>
            <div data-aos="fade-right" className='intro-text'>
                <Title 
                title="Olá, muito prazer,"
                subtitle="Eu sou Richard."
                />
                <h3>Desenvolvedor Front-end</h3>
                <a href={CV} download className='btn-cv'>download CV</a>
                <hr className='line'/>
            </div>
            <div data-aos="fade-left" className='avatar-div'>
              <img src={avatar} alt="Foto autor"/>
            </div>
        </section>

        <section id='about' data-aos="fade-down">
          <Title title="Sobre mim"/>
          <div className='text-about'>
            <p>
              Em processo de mudança de carreira, estou em busca do meu primeiro emprego na área de Tecnologia da Informação, a qual venho me dedicando e especializando através cursos e projetos pessoais.
            </p>
            <p>
              Comecei a estudar Desenvolvimento Front-End há aproximadamente 1 ano, desde então peguei gosto com desenvolvimento e continuo me especializando na área, sempre em constante evolução com o objetivo de somar ao meu conhecimento e estar mais preparado para o mercado. Atualmente venho estudando frameworks e no momento estou desenvolvendo com o framework React, realizei tanto projetos com ReactJS como também aplicativos com React Native, projetos nos quais também tive contato com banco de dados como por exemplo Firebase e RealmDB, autenticação de usuario e controle de rotas autenticadas.
            </p>
            <p>
              Tenho como objetivo, me desenvolver e adquirir experiência na área, conciliando o desenvolvimento profissional junto a empresa com estudos e aprendizados de novas ferramentas.
            </p>
          </div>
          <div className='icons-about'>
            <FaHtml5 size={55}/>
            <FaCss3Alt size={55}/>
            <FaJsSquare size={55}/>
            <FaReact size={55}/>
          </div>
          <hr className='line'/>
        </section>

        <section id='projects'>
          <Title title="Projetos"/>
          <div className='cards-view' data-aos="fade-left">
            <div className='project-card'>
              <h3>CEP Finder</h3>
              <img src={cep} alt='image-project'/>
              <p>Aplicativo desenvolvido para consultas de CEPs. Construído com React Native, utilizando ViaCEP como API para requisição do CEP.</p>
              <div className='footer-card'>
                <div className='techs-view'>
                  <span>React Native</span>
                  <span>Styled Components</span>
                  <span>API</span>
                </div>
                <div className='icons-view'>
                  <a href='https://github.com/richardReitz/cep-finder-react-native'>
                    <FiGithub size={25}/>
                  </a>
                </div>
              </div>
            </div>
            <div className='project-card'>
              <h3>Sistema Chamados</h3>
              <img src={calls} alt='image-project'/>
              <p>Sistema de chamados com controle de rotas autenticadas. Construído com React JS, utilizando Firebase para autenticação e banco de dados do sistema.</p>
              <div className='footer-card'>
                <div className='techs-view'>
                  <span>React JS</span>
                  <span>Firebase</span>
                </div>
                <div className='icons-view'>
                  <a href='https://github.com/richardReitz/sistema-chamados-reactjs'>
                    <FiGithub size={25}/>
                  </a>
                </div>
              </div>
            </div>
            <div className='project-card'>
              <h3>Money App</h3>
              <img src={moneyApp} alt='image-project'/>
              <p>Aplicativo de finanças realizado em curso para controle de entrada e saída de valores de uma conta, utilizando Firebase para autenticação e banco de dados.</p>
              <div className='footer-card'>
                <div className='techs-view'>
                  <span>React Native</span>
                  <span>Firebase</span>
                  <span>Styled Components</span>
                </div>
                <div className='icons-view'>
                  <a href='https://github.com/richardReitz/app-money-react-native'>
                    <FiGithub size={25}/>
                  </a>
                </div>
              </div>
            </div>
            <div className='project-card'>
              <h3>Projeto Infusion</h3>
              <img src={infusion} alt='image-project'/>
              <p>Página web desenvolvida em curso de Desenvolvimento Web Front-end. Página web construída com o conceito 'mobile first' utilizando HTML, CSS e Javascript para sua criação.</p>
              <div className='footer-card'>
                <div className='techs-view'>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                </div>
                <div className='icons-view'>
                  <a href='https://github.com/richardReitz/projeto-infusion-curso-web'>
                    <FiGithub size={25}/>
                  </a>
                  <a href='https://infusion.vercel.app/'>
                    <FiExternalLink size={27}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='link-gh'>
            <a href='https://github.com/richardReitz'>
              Link do GitHub com outros projetos
            </a>
            <FaGithub size={25}/>
          </div>
          <hr className='line'/>
        </section>

        <section id='contact' data-aos="fade-right">
          <Title title="Contato" />
          <form action='mailto:rireitz10@gmail.com' method='POST' encType='text/plain'>
            <p className='text-contact'>
            Caso tenha interesse em entrar em contato comigo, ou tenha algum feedback sobre o portfolio, sinta-se a vontade de mandar uma mensagem pra mim:
            </p>
            <input name='Nome' placeholder='Nome' className='input' type='text' required/>
            <br/>
            <input name='Email' placeholder='Email' className='input' type='email' required/>
            <br/>
            <textarea name='Comentario' placeholder='Seu comentário...' type='text' required/>
            <button className='btn-submit' type='submit'>Enviar</button>
          </form>
        </section>

        <footer className='footer'>
          <div className='logo-footer'>
            <a href="/">
            <img src={logo} alt="Logo" />
            </a>
          </div>
          <div>
            <span>© Developed by Richard Reitz</span>
          </div>
          <div className='footer-icons'>
            <a href='https://www.linkedin.com/in/richard-reitz-86862521a/'>
              <FaLinkedin size={35} />
            </a>
            <a href='https://github.com/richardReitz/'> 
              <FaGithub size={35} /> 
            </a>
          </div>
        </footer>
    </div>
  );
}

export default App;
