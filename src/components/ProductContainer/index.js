import React from 'react'
import ProductFilter from '../ProductFilter'
import ProductList from '../ProductList'
import {ProductConsumer} from '../../Context'
import Loading from '../Loading'

export default function ProductContainer() {
    return (
        <ProductConsumer>
            {
                (value) =>{
                    
                    const {loading, sortedProducts, products} = value

                    if(loading){
                        return<Loading/>
                    }
                    return(
                        <div>
                        <ProductFilter products={products}/>
                        <ProductList products={sortedProducts}/>
                         </div>
                    )
                }
            }
        </ProductConsumer>
      
    )
}