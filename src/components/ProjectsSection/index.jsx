import './index.css';
import React from 'react';
import Title from '../Title';
import { FaArrowRight } from 'react-icons/fa';
import { FiArrowUpRight } from "react-icons/fi";
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';

import projectCEPImg from '../../assets/CEP-Finder.png'
import projectCallImg from '../../assets/SC-3.png'
import projectMoneyAppImg from '../../assets/moneyApp.png';
import projectBuccaneerImg from '../../assets/projeto-buccaneer.png';
import buccaneerVideo from '../../assets/videos/buccaneervideo.mp4';

const projects = [
    { 
        name: 'Buccaneer Burger',
        stack: [ 'Node.js', 'PostgreSQL', 'ReactJs', 'React Native', 'Typescript'],
        image: projectBuccaneerImg,
        video: buccaneerVideo,
        description: 'Sistema interno de gerenciamento de pedidos desenvolvido para uma hamburgueria, com foco em agilidade no atendimento e organização do fluxo operacional. O projeto conta com uma aplicação mobile, utilizada pelos atendentes para abertura e envio de pedidos diretamente das mesas para a cozinha (parte web). A aplicação web é responsável por receber e finalizar os pedidos, além de permitir a gestão completa do cardápio, incluindo a criação de produtos e itens. Todo o funcionamento é sustentado por um backend robusto, que centraliza as regras de negócio e os serviços da aplicação.',
        repo: [
            { name: 'Backend', link: 'https://github.com/richardReitz/buccaneer-burger-service' },
            { name: 'Web', link: 'https://github.com/richardReitz/buccaneer-burger-web' },
            { name: 'Mobile', link: 'https://github.com/richardReitz/buccaneer-burger-mobile' }
        ]
    },
    { 
        name: 'CEP Finder',
        stack: [ 'React Native', 'Styled Components' ],
        image: projectCEPImg,
        description: 'Aplicativo desenvolvido para consultas de CEPs. Construído com React Native, utilizando ViaCEP como API para requisição do CEP.',
        repo: [
            { name: 'Repositório', link: 'https://github.com/richardReitz/cep-finder-react-native' }
        ]
    },
    { 
        name: 'Sistema Chamados',
        stack: [ 'ReactJS', 'Firebase' ],
        image: projectCallImg,
        description: 'Sistema de chamados com controle de rotas autenticadas. Construído com React JS, utilizando Firebase para autenticação e banco de dados do sistema.',
        repo: [
            { name: 'Repositório', link: 'https://github.com/richardReitz/sistema-chamados-reactjs' }
        ]
    },
    { 
        name: 'Money App',
        stack: [ 'React Native', 'Firebase', 'Styled Components' ],
        image: projectMoneyAppImg,
        description: 'Sistema de chamados com controle de rotas autenticadas. Construído com React JS, utilizando Firebase para autenticação e banco de dados do sistema.',
        repo: [
            { name: 'Repositório', link: 'https://github.com/richardReitz/app-money-react-native' }
        ]
    }
]

export default function ProjectsSection() {
    const [showModal, setShowModal] = React.useState(false)
    const [projectDetail, setProjectDetail] = React.useState(null)

    function seeProjectDetail(project) {
        setShowModal(true)
        setProjectDetail(project)
    }

    function closeModal() {
        setShowModal(false)
        setProjectDetail(null)
    }

    return (
        <>
            <section id='projects'>
                <Title title="Projetos"/>
                <div className='cards-view' data-aos="fade-left">
                    {projects.map((item) => 
                        <div className='project-card' onClick={() => seeProjectDetail(item)}>
                            <img src={item.image} alt='image-project'/>
                            <div className='project-card-footer'>
                                <p className='project-name'>{item.name}</p>
                                <div className='see-more'>
                                    <p>ver mais</p>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className='repositories-link'>
                    <a href='https://github.com/richardReitz?tab=repositories'>
                        Ver todos meus projetos
                    </a>
                    <FiArrowUpRight />
                </div>
                <hr className='line'/>
            </section>

            {!!projectDetail &&
                <ProjectModal title={projectDetail.name} isOpen={showModal} onClose={closeModal}>
                    <ProjectCard project={projectDetail} />
                </ProjectModal>
            } 
        </>
    );
}