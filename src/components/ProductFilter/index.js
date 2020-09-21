import React from 'react'
import {useContext} from 'react'
import {ProductContext} from '../../Context'
import Title from '../Title'
import './style.css'

const getUnique = (items, value) =>{
    return [...new Set(items.map(item => item[value]))]
}

export default function ProductFilter({products}) {
    const context =  useContext(ProductContext)
   
    const{
        handleChange, 
        type, 
        material,
        name,
        volume,
        application,
        neck,
        weight
        } = context;
    
        let types = getUnique(products, 'type')
        types = ['Typ (wszystkie)',...types]
        types = types.map((item, index)=>{
            return <option value={item} key={index}>{item}</option>
        })

        let applications = getUnique(products, 'application')
        applications = ['Przeznaczenie (wszystkie)',...applications]
        applications = applications.map((item, index)=>{
            return <option value={item} key={index}>{item}</option>
        })

        let materials = getUnique(products, 'material')
        materials = ['Materiał (wszystkie)',...materials]
        materials = materials.map((item, index)=>{
            return <option value={item} key={index}>{item}</option>
        })

        let names = getUnique(products, 'name')
        names = ['Nazwa (wszystkie)',...names]
        names = names.map((item, index)=>{
            return <option value={item} key={index}>{item}</option>
        })

        let volumes = getUnique(products, 'volume')
        volumes = ['Objętość (wszystkie)',...volumes]
        volumes = volumes.map((item, index)=>{
            return <option value={item} key={index}>{item}</option>
        })

        let necks = getUnique(products, 'neck')
        necks = ['Wykończenie (wszystkie)',...necks]
        necks = necks.map((item, index)=>{
            return <option value={item} key={index}>{item}</option>
        })

        let weights = getUnique(products, 'weight')
        weights = ['Gramatura (wszystkie)',...weights]
        weights = weights.map((item, index)=>{
            return <option value={item} key={index}>{item}</option>
        })
        
        function refreshPage() {
            window.location.reload(false);
          }

    return (
        
        <section className="filter-container">
            <Title title="Szukaj produktów" />
            <form className="filter-form">
                <div className="form-group">
                
                    <select name="type" id="type" value={type}
                    className="form-control" onChange={handleChange}>{types}</select>
                </div>
                <div className="form-group">
                    
                    <select name="application" id="tapplication" value={application}
                    className="form-control" onChange={handleChange}>{applications}</select>
                </div>
                <div className="form-group">
                    
                    <select name="material" id="material" value={material}
                    className="form-control" onChange={handleChange}>{materials}</select>
                </div>
                <div className="form-group">
                    
                    <select name="name" id="name" value={name}
                    className="form-control" onChange={handleChange}>{names}</select>
                </div>
                <div className="form-group">
                    
                    <select name="neck" id="neck" value={neck}
                    className="form-control" onChange={handleChange}>{necks}</select>
                </div>
               
                <div className="form-group">   
                    <select name="weight" id="weight" value={weight}
                    className="form-control" onChange={handleChange}>{weights}</select>
                </div>
                <div className="form-group">
                    
                    <select name="volume" id="volume" value={volume}
                    className="form-control" onChange={handleChange}>{volumes}</select>
                </div>
                <div className="form-group">
                <button className="btn-primary" type="button" onClick={refreshPage}>Wyczyść wszystkie filtry</button>
                </div>
            </form>
            
        </section>
    )
}