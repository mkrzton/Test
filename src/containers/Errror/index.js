import React from 'react'
import Hero from '../../components/Hero'
import Banner from '../../components/Banner'
import {Link} from 'react-router-dom'

const Error= props =>{
    return(
        <div>
    
         <Hero>
         <Banner title="Błąd 404" subtitle="Strona nie znaleziona">
        <Link to="/" className="btn-primary" >
          Powrót
        </Link>
         </Banner>
         </Hero>
          
        </div>
    )
}

export default Error