import emailjs from "emailjs-com";
import React from 'react';
import './style.css'
import Title from '../../components/Title'

export default function ContactUs() {

    const token = process.env.REACT_APP_MAIL_TOKEN
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'hitech_plast', e.target, {token})
        .then((result) => {
            alert("Wiadomość została wysłana!");
        }, (error) => {
            alert("Wysłanie wiadomości nie powiodło się!");
        });
        e.target.reset()
    }

    return(
      <>
            <br></br> <hr color="#0cb898"></hr><br></br>
            <Title title="Wyślij wiadomość przez formularz"></Title>
            <div className="container">
            <form onSubmit={sendEmail}>
            <div className="row justify-content-center align-items-center">
                    <div className="row  ">
                    <div className="col-8 form-group ">
                            <input type="text" className="form-control" required placeholder="Firma" name="company"/>
                        </div>
                        <div className="col-8 form-group ">
                            <input type="text" className="form-control" required placeholder="Imię / Nazwisko" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" required placeholder="Adres E-mail" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" required placeholder="Temat" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" required placeholder="Wiadomość" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn-primary" value="Wyślij wiadomość"></input>
                        </div>
                    </div>
                    </div>
                </form>
          
            </div>
       </>
    )
}