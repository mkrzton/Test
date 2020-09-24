import React from "react";
import {Link} from 'react-router-dom'
import contact from '../../images/contact.jpg'
import preforma from "../../images/preforma3.jpg"
import about from "../../images/about.jpg"
import Slider2 from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./style.css";

const content = [
  
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Kontakt",
    slug: './contact',
    transition: true,
    image: preforma
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    transition: false,
    image: about
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    transition: false,
    image: contact
  }
];
export default function Slider(){
  
  
    return(
    
      <Slider2 autoplay="1500"className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}>
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                {item.transition ? <>
                  <Link to={item.slug} className="slider-but">
                                 {item.button}
                            </Link>
                        </>
                        : <></>}
            </div>
          </div>
        ))}
      </Slider2>

    )
}