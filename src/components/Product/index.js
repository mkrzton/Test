import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import propTypes from "prop-types"
import Products from '../../containers/Products'

export default function Product({product}) {

    const{name, slug, images} = product;
    return (
        <article className="product">
            <div className="img-container">
                <img src={images[0]} alt="single product" />
                <Link to={`/products/${slug}`} 
                className="btn-primary product-link">
                    Szczegóły
                </Link>
            </div>
            <p className="product-info">{name}</p>
        </article>
    )
}

Products.propTypes={
    room: propTypes.shape({
        name:propTypes.string.isRequired,
        slug:propTypes.string.isRequired,
        images:propTypes.arrayOf(propTypes.string).isRequired
    })

}