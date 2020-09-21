import React from "react";
import Banner from '../../components/Banner'
import {Link} from 'react-router-dom'
import SmartSlider from "react-smart-slider";
import "./style.css";


const DummyCaption = ({ caption }) => (
  <div style={{
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'solid 1px var(--primaryColor)',
  }}>
    {caption}
  </div>
)

export default function Slider() {
  const slidesArray = [
    {
        url: "https://i.imgur.com/7u8i7L1.jpg",
        childrenElem: <DummyCaption caption={ 
        <Banner title="Preformy i Pojemniki PET"> 
            <Link to="/products" className="btn-primary">
                Produkty
            </Link>
        </Banner>} />
      },
      {
        url: "https://i.imgur.com/E8gkF2f.jpg",
        childrenElem: <DummyCaption caption={ 
        <Banner title="Zamówienia realizowane na całą Europę" > 
            <Link to="/contact" className="btn-primary">
               Kontakt 
            </Link>
        </Banner>} />
      },
      {
        url: "https://i.imgur.com/t2a1zLi.jpg",
        childrenElem: <DummyCaption caption={
          <Banner title="Preformy i Pojemniki PET" > 
              <Link to="/products" className="btn-primary">
                Produkty
              </Link>
          </Banner>
        } />
      },
  ];
  return (
    <div className="around">
      <SmartSlider
        slides={slidesArray}
        buttonShape="round"
        height={800}
        autoSlide={true}
        showIndicators={false}
        autoSlideInterval={5000}
      />
    </div>
  );
}

// MIT License

// Copyright (c) 2019 Rajesh kumar

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.