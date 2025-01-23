import './index.css';
import React from 'react';
import Title from '../Title';
import { 
    SiReact,
    SiTypescript,
    SiGraphql,
    SiTailwindcss,
    SiStyledcomponents,
    SiJavascript,
    SiSupabase,
    SiAndroid,
    SiKotlin,
    SiFirebase
} from "react-icons/si";

export default function AboutSection() {
    return (
        <section id='about' data-aos="fade-down">
            <Title title="Sobre mim"/>
            
            <div className='text-about'>
                <p>
                    Sou desenvolvedor com sólida experiência em tecnologia,
                     atuando tanto no desenvolvimento de
                    aplicativos móveis com React Native quanto na criação e manutenção de aplicações web utilizando ReactJS.
                    Tenho vasta experiência em projetos com aplicativos móveis como em freelance voltados para sistemas ERP.
                </p>
                <p>
                    Ao longo da minha trajetória, participei ativamente de todas as etapas do ciclo de vida da aplicação,
                    desde o planejamento e deploy até a publicação em lojas de aplicativos, além de realizar versionamento,
                    testes beta e manutenções contínuas. Minha abordagem é centrada na busca por excelência técnica e na entrega
                    de resultados práticos e eficazes.
                </p>
                <p>
                    Busco constantemente aprender novas tecnologias e estou sempre aberto a desafios,
                    com o objetivo de aplicar e ampliar meus conhecimentos em soluções inovadoras e contribuir para o desenvolvimento
                    de produtos.
                </p>
            </div>
            <div className='icons-about'>
                <SiJavascript size={40} title='JavaScript'/>
                <SiTypescript size={40} title='TypeScript'/>
                <SiReact size={40} title='React JS/Native'/>
                <SiAndroid size={40} title='Android'/>
                <SiKotlin size={36} title='Kotlin'/>
                <SiGraphql size={38} title='GraphQL'/>
                <SiStyledcomponents size={40} title='Styled-components'/>
                <SiTailwindcss size={36} title='TailwindCSS'/>
                <SiSupabase size={34} title='Supabase'/>
                <SiFirebase size={34} title='Firebase'/>
            </div>
            <hr className='line'/>
        </section>
    );
}