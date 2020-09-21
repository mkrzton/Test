import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl'
import markerUrl from '../../images/marker2.png'
import data from './Hitech.json'
import './style.css'
import logo from '../../images/napis.png'
import {Link} from 'react-router-dom'
import Mail from '../../components/Mail'

const MAPBOX_TOKEN = "pk.eyJ1IjoibWFjZW5zIiwiYSI6ImNrZWEweDk2bTJjMTgyeHBkcDdzcDhnMngifQ.6AYfXY8qXrmXFUDTlILydw"

export default function Map(){
    const [viewport, setViewport] = useState({
      latitude: 52.2288594,
      longitude: 21.0133516,
      zoom: 11,
      height: "50vh",
      width: "99vw",
    })
    return (
     
      <>
      <div className="tekst">
        <Link to="/products">
          <img src={logo} alt="Hitech Plast" className="napis"/>
          </ Link>
          <h3>Nowogrodzka 31,00-511 Warszawa, Polska</h3>
          <h3>NIP działalności: PL7010369006</h3>
          <h3>Regon: 146525784</h3>
          <h3>Telefon: +48 999 999 999</h3>
          <a href={`mailto:${"info@hitechplast.pl"}`}>info@hitechplast.pl</a>
        </div>
        <Mail></Mail>
        <hr color="#0cb898"></hr>
      <div className="ramka">  
      <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/macens/ck7uad97s0qgk1ipe6k3b1q4z"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
     {data.features.map(park => (
       <Marker key={park.properties.PARK_ID}
       latitude={park.geometry.coordinates[0]}
       longitude={park.geometry.coordinates[1]}>
         <img src={markerUrl} alt="siedziba"></img>
         <div className="border"><label>Hi-Tech Plast <br></br>Nowogrodzka 31, <br></br>
         00-511 Warszawa</label></div>
         
       </Marker>
     ))}
    </ReactMapGL>
    
    <div className="break"></div>
    </div>
    
   
    </>
    
     
    )
  
}