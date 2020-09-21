import React, { Component } from 'react'
import {GiBottleCap, GiPapers} from 'react-icons/gi'
import {FaTruckMoving} from 'react-icons/fa'
import {FiClipboard} from 'react-icons/fi'
import './style.css'
import Title from '../Title'

export default class Services extends Component {

    state={
        services:[
            {
                icon:<GiBottleCap/>,
                title: "Szeroki asortyment produktów plastikowych",
           

            },
            {
                icon:<FiClipboard/>,
                title: "Projektowanie opakowań",
                
            },
            {
                icon:<FaTruckMoving/>,
                title: "Transport na całą Europę",
        
            },{
                icon:<GiPapers/>,
                title: "Duży wybór gotowych wzorów",
                // info:"hi"
            }
        ]
    }
    render() {
        return (
            <>
            <section className="services">
            <Title title="Usługi"></Title>
            <div className="services-center">
                {this.state.services.map((item, index)=>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                    </article>
                })}
            </div>
            </section>
           </>
           
        )
    }
}