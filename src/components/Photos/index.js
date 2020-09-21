import React, { Component } from 'react'
import './style.css'
import Title from '../Title'
import preforma from '../../images/pet.jpg'


export default class Photos extends Component {

   
    render() {
        return (
            <>
            <section className="services">
            <Title title="Usługi"></Title>
            </section>
            <div className="break22"></div>
            <div className="wrapper22">
            <div className="container22">
                <img src={preforma} alt="Snow" className="image22"/>
                <div className="centered22">Doświadczeni projektanci i konstruktorzy</div>
            </div>
            <div className="container22">
                <img src={preforma} alt="Snow" className="image22"/>
                <div className="centered22">Projektowanie opakowań pod zamówienie</div>
            </div>
            <div className="container22">
                <img src={preforma} alt="Snow" className="image22"/>
                <div className="centered22">Nowoczesny park maszynowy</div>
            </div>
            <div className="container22">
                <img src={preforma} alt="Snow" className="image22"/>
                <div className="centered22">Wysyłanie artykułów na całą Europę</div>
            </div>
            </div>
           </>
           
        )
    }
}