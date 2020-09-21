import React, { Component } from 'react'
import './style.css'
import Title from '../Title'
import cer1 from '../../images/cer1.png'
import cer2 from '../../images/cer2.png'
import cer3 from '../../images/cer3.png'
import cer4 from '../../images/cer4.png'
import cer5 from '../../images/cer5.png'

export default class Photos extends Component {

   
    render() {
        return (
            <>
            <section className="services">
            <Title title="Certyfikaty"></Title>
            </section>
            <div className="break22"></div>
            <div className="wrapper22">
            <div className="container22">
                <img src={cer1} alt="Snow" className="image22"/>
                
            </div>
            <div className="container22">
                <img src={cer2} alt="Snow" className="image22"/>
              
            </div>
            <div className="container22">
                <img src={cer3} alt="Snow" className="image22"/>
            </div>
            <div className="container22">
                <img src={cer4} alt="Snow" className="image22"/>
            </div>
            <div className="container22">
                <img src={cer5} alt="Snow" className="image22"/>
            </div>
            </div>
           </>
           
        )
    }
}