import React, { Component } from 'react'
import './style.css'
import defaultBcg from '../../images/contact.jpg'
import {Link} from 'react-router-dom'
import {ProductContext} from '../../Context'
import Magnifier from 'react-magnifier'
export default class Single extends Component{
    constructor(props){
        super(props)
      this.state={
          slug:this.props.match.params.slug,
          defaultBcg
      }
    }

    static contextType= ProductContext
    render(){
        const {getProduct} = this.context
        const product = getProduct(this.state.slug)
        if(!product){
            return (<div className="error">
                <h3> Nie znaleziono prduktów</h3>
                <Link to="/products" 
                className="btn-primary"> 
                Powrót</Link>
            </div>
            )
        }

        const {name, extras, volume, cap, application, material,
            weight, images, type, bottle, neck, grooves, angle, standard,
            pump,preform, fliptop, esterform, url} = product
        const [ ...defaultImg] = images

        return(
            <>
            
            <div className="wrapper">
            <div className="img-product">
                    {defaultImg.map((item, index)=>{
                        return <Magnifier key={index} src={item} mgWidth={500} mgHeight={500} 
                        zoomFactor={0.5} mgShape="circle" mgShowOverflow={false} alt="zdjecie"/>
                    })}
                  
                    </div>
                    <table className="img-info">
                        <tr>
                            <th colSpan="2"><h2>{name}<hr></hr></h2></th>
                         
                        </tr>
                        
                        <tr>
                            <td className="trait"><h3>Rodzaj</h3></td>
                            <td><h3>{type}</h3></td>
                        </tr>
                        <tr>
                            <td className="trait"><h3>Materiał </h3></td>
                            <td><h3>{material}</h3></td>
                        </tr>
                        <tr>
                            <td className="trait"><h3>Gramatura </h3></td>
                            <td><h3>{weight}</h3></td>
                        </tr>
                        <tr>
                            <td className="trait"><h3>Wykończenie</h3> </td>
                            <td><h3>{neck}</h3></td>
                        </tr>
                        <tr>
                            <td className="trait"><h3>Zastosowanie </h3></td>
                            <td><h3>{application}</h3></td>
                        </tr>
                        <tr>
                            <td className="trait"><h3>Standard</h3></td>
                            <td> <h3>{standard}</h3></td>
                        </tr>
                        <tr>
                            <td className="trait"><h3>Kolory</h3></td>
                            <td> <h3>{extras}</h3></td>
                        </tr>
                        
                        {bottle ? <>
                       <tr>
                            <td className="trait"><h3>Objętość </h3></td>
                            <td><h3>{volume}</h3></td>
                        </tr>
                        </>
                        : <></>}

                         {cap ? <>
                            <tr>
                            <td className="trait"><h3>Ilość ryfli</h3></td>
                            <td> <h3>{grooves}</h3></td>
                            </tr>
                            <tr>
                            <td className="trait"><h3>Kąt</h3></td>
                            <td> <h3>{angle}</h3></td>
                        </tr>
                        </>
                        : <></>}
                        {fliptop ? <>
                       
                        </>
                        : <></>}
                        {preform ? <>
                       
                       </>
                       : <></>}
                       {pump ? <>
                       
                       </>
                       : <></>}
                        {esterform ? <>
                        <tr>
                            <td className="trait"><h3>Link </h3></td>
                            <td><h3><Link to={{ pathname: url }} 
                            target="_blank" >{name}</Link>
                            </h3></td>
                        </tr>
                        </>:<>
                        </>}
                        <tr>
                            <td><Link to="/products" className="button-single">
                                 Produkty
                            </Link></td>
                            <td><Link to="/contact" className="button-single">
                                Skontaktuj się z nami
                                </Link></td>
                        </tr>
                       
                    </table>
                    
            </div>

            
         </>
        
        )
     
    }
}