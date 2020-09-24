import React from 'react'
import './style.css'
import preforma from "../../images/preforma3.jpg"
import about from "../../images/about.jpg"
import contact from '../../images/contact.jpg'
import wtryskarka from '../../images/wtryskarka.jpg'
import Slider2 from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../Slider/slider-animations.css";
import "../Slider/style.css";
const content = [
    {
      image: preforma,
      text: "Przeważającą część produkcji naszej firmy stanowią zamknięcia standardowe o wyglądzie i wymiarach dostosowanych do światowych wzorców w tym zakresie (na przykład nakrętki do butelek z PET do napojów, wody mineralnej, mleka i produktów mlecznych). W ostatnim okresie jednak obserwujemy zdecydowany wzrost zainteresowania naszych Klientów opakowaniami oryginalnymi oraz niepowtarzalnymi pozwalającymi wyróżnić ich produkty na półce sklepowej. Tendencja ta jest wynikiem zarówno dynamicznego rozwoju samej technologii opakowań."
    },
    {
      
      image: about,
      text: "Przeważającą część produkcji naszej firmy stanowią zamknięcia standardowe o wyglądzie i wymiarach dostosowanych do światowych wzor"
    },
    {
     
      image: contact,
      text: "Przeważającą część produkcji naszej firmy stanowią zamknięcia standardowe o wyglądzie i wymiarach dostosowanych do światowych wzor"
    },
    {
     
      image: wtryskarka,
      text: "Przeważającą część produkcji naszej firmy stanowią zamknięcia standardowe o wyglądzie i wymiarach dostosowanych do światowych wzor"
    }
  ];
export default function History() {
    return (
        <> 
     
            <Slider2 autoplay="1500"className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}>
              <div className="inner">
            
                <p>{item.text}</p>
                
            </div>
          </div>
        ))}
      </Slider2>
           
            
        </>      
    )
}