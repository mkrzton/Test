import React, { Component } from 'react'
import eng from '../../images/en.png'
import pl from '../../images/pl.png'
import rus from '../../images/rus.png'
import deu from '../../images/deu.png'
import {Link} from 'react-router-dom'
import './style.css'
export default class Footer extends Component {
    render() {
                return (
            
                        <div className="footer">
                            <span className="content left">Hi-Tech Plast, Nowogrodzka 31, Warszawa</span>
                            <span className="content right">
                            <Link to={{ pathname: "http://hitechplast.pl/" }} 
                            target="_blank" ><img src={pl} title="Polski" alt="pl"/></Link> 
                            <Link to={{ pathname: "http://hitechplast.pl/" }} 
                            target="_blank" ><img src={eng} title="English" alt="eng"/></Link>
                            <Link to={{ pathname: "http://hitechplast.pl/" }} 
                            target="_blank" ><img src={deu} title="Deutsch" alt="deu"/></Link>
                            <Link to={{ pathname: "http://hitechplast.pl/" }} 
                            target="_blank" ><img src={rus} title="Русский" alt="rus"/></Link>
                            </span>
                            <br></br>
                           <span className="content left">
                               Telefon: +48 999 999 999
                           </span>     
                        </div>

                )
                }
        }
