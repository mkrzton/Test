import React from "react";
import {Link} from 'react-router-dom'
import Slider2 from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./style.css";

const content = [
  {
    title: "Vulputate Mollis  Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Produkty",
    slug: "/products",
    transition: true,
    image: "https://i.imgur.com/ZXBtVw7.jpg"
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Kontakt",
    slug: './contact',
    transition: true,
    image: "https://i.imgur.com/DCdBXcq.jpg"
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    transition: false,
    image: "https://i.imgur.com/DvmN8Hx.jpg"
  }
];
export default function Slider(){
  
  
    return(
       
      <div>
      <Slider2 autoplay="1500"className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
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
     
    </div>
    )
}