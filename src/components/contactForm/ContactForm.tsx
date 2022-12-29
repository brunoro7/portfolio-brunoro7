import { send } from '@emailjs/browser';
import { useState } from 'react';
import BtnSendEmail from '../btnSendEmail/BtnSendEmail';
import InputContactEmail from '../inputContactEmail/InputContactEmail';
import InputContactName from '../inputContactName/InputContactName';
import InputEmailTitle from '../inputEmailTitle/InputEmailTitle';
import TxtAreaEmailContent from '../txtAreaEmailContent/TxtAreaEmailContent';
import './style/ContactForm.css';

function ContactForm() {
  const [toSendEmail, setToSendEmail] = useState({
    from_name: '',
    title_msg: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (event: any) => {
    event.preventDefault();

    send(
      'service_3717jsmailro7',
      'contact_form_brunoro7',
      toSendEmail,
      '1yUbysIbClFhXbwcK',
    )
      .then((response) => {
        console.log('Sucess', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED', err);
      });
  };

  const handleChangeName = (value: string) => {
    setToSendEmail((prevState) => ({
      from_name: value,
      title_msg: prevState.title_msg,
      message: prevState.message,
      reply_to: prevState.reply_to,
    }));
  };

  const handleChangeEmail = (value: string) => {
    setToSendEmail((prevState) => ({
      from_name: prevState.from_name,
      title_msg: prevState.title_msg,
      message: prevState.message,
      reply_to: value,
    }));
  };

  const handleChangeTitle = (value: string) => {
    setToSendEmail((prevState) => ({
      from_name: prevState.from_name,
      title_msg: value,
      message: prevState.message,
      reply_to: prevState.reply_to,
    }));
  };

  const handleChangeEmailContent = (value: string) => {
    setToSendEmail((prevState) => ({
      from_name: prevState.from_name,
      title_msg: prevState.title_msg,
      message: value,
      reply_to: prevState.reply_to,
    }));
  };

  return (
    <form onSubmit={onSubmit} className="box-FormContact">

      <InputContactName
        handleChange={handleChangeName}
        inputValue={toSendEmail.from_name}
      />

      <InputContactEmail
        handleChange={handleChangeEmail}
        inputValue={toSendEmail.reply_to}
      />

      <InputEmailTitle
        handleChange={handleChangeTitle}
        inputValue={toSendEmail.title_msg}
      />

      <TxtAreaEmailContent
        handleChange={handleChangeEmailContent}
        inputValue={toSendEmail.title_msg}
      />

      <div className="box-btnContactSendEmail">
        <BtnSendEmail name="Enviar Email" />
      </div>
    </form>
  );
}

export default ContactForm;
