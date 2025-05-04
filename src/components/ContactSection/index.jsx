import './index.css';
import React from 'react';
import Title from '../Title';
import ContactCard from './components/ContactCard';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

export default function ContactSection() {
    return (
        <section id='contact' data-aos="fade-down">
            <Title title="Contatos" />

            <section className='contact-cards'>
                <ContactCard
                    label="Linkedin"
                    contact="@richard-reitz"
                    icon={<FaLinkedinIn />} 
                    link="https://www.linkedin.com/in/richard-reitz/"
                />
                <ContactCard
                    label="Email"
                    contact="richardreitz.dev@gmail.com"
                    icon={<LuMail />}
                    link="mailto:richardreitz.dev@gmail.com"
                />
                <ContactCard
                    label="GitHub"
                    contact="@richardReitz"
                    icon={<FaGithub />}
                    link="https://github.com/richardReitz"
                />
            </section>

            {/* <form action='mailto:richardreitz.dev@gmail.com' method='POST' encType='text/plain'>
                <h3>Entre em contato</h3>
                <p className='text-contact'>
                    Caso tenha interesse em entrar em contato comigo, ou tenha algum feedback sobre o portfolio,
                    sinta-se a vontade de mandar uma mensagem pra mim:
                </p>
                <input name='Nome' placeholder='Nome' className='input' type='text' required/>
                <br/>
                <input name='Email' placeholder='Email' className='input' type='email' required/>
                <br/>
                <textarea name='Comentario' placeholder='Seu comentário...' type='text' required/>
                <button className='btn-submit' type='submit'>Enviar</button>
            </form> */}
        </section>
    );
}