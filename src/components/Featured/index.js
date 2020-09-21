import React, { Component } from 'react'
import './style.css'
import {ProductContext} from '../../Context'
import Loading from '../Loading'
import Product from '../Product'
import Title from '../Title'

export default class Featured extends Component {

    static contextType = ProductContext

    render() {
        let {loading, featuredProducts: product} = 
        this.context
       
        product = product.map(product => {
            return <Product key={product.id} product={product} />
        })
        return (
            <section className="featured-products">
              <Title title="Wyróżnione produkty" />
              <div className="featured-products-center">
                    {loading?<Loading />: product}
                </div> 
            </section>
        )
    }
}