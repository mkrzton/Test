import React from 'react'
import Services from '../../components/Services'
import Featured from '../../components/Featured'
import Photos from '../../components/Photos'
import Slider from '../../components/Slider'


const Home = props =>{
    return(
        <>
      <Slider></Slider>
       <Services />
       <Featured />
       <Photos />  
       </>
    )
}

export default Home