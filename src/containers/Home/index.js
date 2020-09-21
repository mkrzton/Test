import React from 'react'
import Services from '../../components/Services'
import Featured from '../../components/Featured'
import Slider from '../../components/Slider'
import Photos from '../../components/Photos'

const Home = props =>{
    return(
        <>
      <Slider></Slider>
       <Services />
       <Featured />
       <Photos></Photos>
       </>
    )
}

export default Home