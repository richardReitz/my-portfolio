import './index.css';
import React from 'react';
import Title from '../Title';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import projectCEPImg from '../../assets/CEP-Finder.png'
import projectCallImg from '../../assets/SC-3.png'
import projectMoneyAppImg from '../../assets/moneyApp.png';
import projectInfusionImg from '../../assets/infusion.png';

export default function ProjectsSection() {
    return (
        <section id='projects'>
          <Title title="Projetos"/>

          <div className='cards-view' data-aos="fade-left">
            <div className='project-card'>
              <h3>CEP Finder</h3>
              <img src={projectCEPImg} alt='image-project'/>
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
              <img src={projectCallImg} alt='image-project'/>
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
              <img src={projectMoneyAppImg} alt='image-project'/>
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
              <img src={projectInfusionImg} alt='image-project'/>
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
                    <FiExternalLink size={24}/>
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
    );
}