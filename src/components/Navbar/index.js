import React, {Component} from 'react'
import './style.css'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import logo from '../../images/nowelogo.png'


class Navbar extends Component{

    state={
        isOpen: false
    }

    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
    return(
            
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Hitech Plast"/>
                         </ Link>
                         <button type="button" className="nav-btn"
                         onClick={this.handleToggle}>
                             <FaAlignRight className="nav-icon" />
                         </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Strona Główna</Link>
                        </li>
                        <li>
                            <Link to="/products">Produkty</Link>
                        </li>
                        <li>
                            <Link to="/about">O nas</Link>
                        </li>
                        <li>
                            <Link to="/contact">Kontakt</Link>
                        </li>
                
                    </ul>
                    
                </div>

            </nav>

    )
 }
}

export default Navbar