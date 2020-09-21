import React from 'react'
import Hero from '../../components/Hero'
import Banner from '../../components/Banner'
import {Link} from 'react-router-dom'
import History from '../../components/History'

const About = props =>{
    return(
        <>
       
       
        <Hero hero="heroAbout">
        <Banner title="Nasza historia" subtitle="Jesteśmy dumni z tego, co robimy i robimy to od lat.
        Od momentu powstania w 2013 r. Hi-Tech Plast jest liderem w produkcji opakowań z polimerów dla przemysłu napojów, spożywczego, kosmetycznego, chemicznego i medycznego na całym świecie. Naszym celem jest utrzymanie wysokiego poziomu zaangażowania w sprawy naszych klientów, a także społeczności. Jesteśmy dumni z innowacji i zapewniania klientom wysokiej jakości produktów, usług i elastyczności."> 
        <Link to="/products" className="btn-primary" >
         Zobacz nasze produkty
        </Link>
         </Banner>
         </Hero>
         <History></History>
         </>
    )
}

export default About