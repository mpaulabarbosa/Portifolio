import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function EnviarEmail() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iutezkk', 'template_6k0z2fi', form.current, {
        publicKey: 'RIoMaBnDooSlfNK1e',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Obrigada por entrar em contato, mensagem enviada com sucesso!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className='form-email font-sans' ref={form} onSubmit={sendEmail}>
        <div className='campoinfo-top'>
            <div className='campoInfo-email'>
                <label>Nome:</label>
                <input className='input-email' type="text" name="nome" required/>
            </div>
            <div className='campoInfo-email'>
                <label>Assunto:</label>
                <input className='input-email' type="text" name="assunto" required/>

            </div>
        </div>
        <div className='campoInfo-email'>
            <label>E-mail:</label>
            <input className='input-email' type="email" name="email" required/>

        </div>
        <div className='campoInfo-email'>
            <label>Mensagem:</label>
            <textarea className='input-email' name="mensagem" required/>
        </div>
        <button type="submit">
            Enviar Mensagem
        </button>
    </form>
  );
};