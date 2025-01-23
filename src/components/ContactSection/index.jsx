import './index.css';
import React from 'react';
import Title from '../Title';

export default function ContactSection() {
    return (
        <section id='contact' data-aos="fade-right">
            <Title title="Contato" />
            <form action='mailto:richardreitz.dev@gmail.com' method='POST' encType='text/plain'>
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
            </form>
        </section>
    );
}