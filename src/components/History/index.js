import React from 'react'
import './style.css'
import preforma from "../../images/preforma3.jpg"
import about from "../../images/about.jpg"
import contact from '../../images/contact.jpg'
import wtryskarka from '../../images/wtryskarka.jpg'
export default function History() {
    return (
        <> 
       <div className="container">
            <div className="info">      
                Przeważającą część produkcji naszej firmy stanowią zamknięcia standardowe o wyglądzie i wymiarach 
                dostosowanych do światowych wzorców w tym zakresie (na przykład nakrętki do butelek z PET do napojów, 
                wody mineralnej, mleka i produktów mlecznych). W ostatnim okresie jednak obserwujemy zdecydowany wzrost 
                zainteresowania naszych Klientów opakowaniami oryginalnymi 
                oraz niepowtarzalnymi pozwalającymi wyróżnić ich produkty na 
                półce sklepowej. Tendencja ta jest wynikiem zarówno dynamicznego 
                rozwoju samej technologii opakowań.
            </div>
            <img src={preforma} alt="preform"/> 
            <img src={about} alt="about"/> 
            <img src={contact} alt="contact"/> 
            <img src={wtryskarka} alt="wtryskarka"/> 
            <br></br>
            <br></br>
            </div>
        </>      
    )
}