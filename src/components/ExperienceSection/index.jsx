import './index.css';
import React, { useState } from 'react';
import Title from '../Title';
import ExperienceCard from './components/ExperienceCard';

const works = [
    { 
        name: 'Desenvolvedor Web',
        company: 'Orbitcode - Freelance',
        description: 'Desenvolvimento de um sistema ERP voltado para uma empresa do setor de eventos e venda de ingressos. O sistema contempla módulos completos para criação e gerenciamento de eventos, controle de equipamentos, gestão financeira e acompanhamento de metas, oferecendo uma solução integrada para todas as áreas operacionais da empresa.',
        location: 'Remota',
        start_date: '11/2024',
        end_date: '04/2025',
        items: [
            'Desenvolvimento e manutenção de sistema ERP voltado para a gestão de uma empresa de venda de ingressos e organização de eventos',
            'Implementação de módulos para criação e gerenciamento de eventos, controle de equipamentos e infraestrutura',
            'Integração de dashboards com indicadores e metas financeiras',
            'Desenvolvimento de funcionalidades para gestão financeira, incluindo fluxo de caixa, controle de receitas e despesas',
            'Desenvolvimento de Cloud Functions e Views para otimização de consultas com Supabase',
            'Gerenciamento de dados em tempo real',
        ],
        stack: [ 'TypeScript', 'ReactJS', 'Supabase', 'SQL', 'Zustand', 'TailwindCSS' ]
    },
    { 
        name: 'Desenvolvedor Mobile - Frontend',
        company: 'Riderize',
        description: 'Atuação no desenvolvimento de novas funcionalidades e na manutenção de um aplicativo voltado para a comunidade de ciclismo. O app oferece recursos como criação e inscrição em eventos de ciclismo, processo completo de checkout, visualização de rotas ciclísticas por todo o Brasil, além de monitoramento de atividades com integração de GPS e mapas em tempo real.',
        location: 'Rio do Sul/SC',
        start_date: '09/2022',
        end_date: '10/2024',
        items: [
            'Contribuição ativa no desenvolvimento e implementação de novas funcionalidades para a aplicação',
            'Manutenção do código',
            'Correção de bugs e melhorias de performance em diferentes partes do app',
            'Atualizações dinâmicas com o método de atualização CodePush',
            'Configuração e certificação do aplicativo nas lojas',
            'Manutenção e implementação do sistema de monitoramento de atividades em tempo real utilizando GPS e integração com mapas',
            'Integração com serviços de terceiros (APIs de mapas, Strava, etc)',
            'Métologias ageis de desenvolvimento',
        ],
        stack: [ 'TypeScript', 'React Native', 'GraphQL', 'Zustand', 'Recoil', 'XCode', 'App Center', 'Styled Components' ]
    }
]

export default function ExperienceSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
        <section id='experience'>
            <Title title="Experiências"/>
            <div className='experiences-wrapper'>
                {works.map((work, index) => (
                    <ExperienceCard
                        key={index}
                        active={activeIndex === index}
                        work={work}
                        onClick={() => toggleAccordion(index)}
                    /> 
                ))}
            </div>
        </section>
    );
}