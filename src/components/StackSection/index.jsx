import './styles.css';
import React from 'react';
import Title from '../Title';
import StackCard from './components/StackCard';
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
    SiFirebase,
    SiNodedotjs
} from "react-icons/si";

export default function StackSection() {
    return (
        <section id='stack' data-aos="fade-right">
            <Title title="Stack"/>
       
            <div className='stack-view'>
                <StackCard label="JavaScript" icon={<SiJavascript size={42} title='JavaScript'/>}/>
                <StackCard label="TypeScript" icon={<SiTypescript size={42} title='TypeScript'/>}/>
                <StackCard label="React JS" icon={<SiReact size={42} title='React JS'/>}/>
                <StackCard label="React Native" icon={<SiReact size={42} title='React Native'/>}/>
                <StackCard label="Android" icon={<SiAndroid size={42} title='Android'/>}/>
                <StackCard label="Kotlin" icon={<SiKotlin size={42} title='Kotlin'/>}/>
                <StackCard label="GraphQL" icon={<SiGraphql size={42} title='GraphQL'/>}/>
                <StackCard label="CSS-in-JS" icon={<SiStyledcomponents size={42} title='Styled-components'/>}/>
                <StackCard label="TailwindCSS" icon={<SiTailwindcss size={42} title='TailwindCSS'/>}/>
                <StackCard label="Supabase" icon={<SiSupabase size={42} title='Supabase'/>}/>
                <StackCard label="Firebase" icon={<SiFirebase size={42} title='Firebase'/>}/>
                <StackCard label="Node.js" icon={<SiNodedotjs size={42} title='Node.js'/>}/>
            </div>
            <hr className='line'/>
        </section>
    );
}