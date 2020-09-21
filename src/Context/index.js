import React, { Component } from 'react'
import Client from "../Contentful"



const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        products:[],
        sortedProducts:[],
        featuredProducts:[],
        loading: true,
        type: 'Typ (wszystkie)',
        application: 'Przeznaczenie (wszystkie)',
        material: 'Materiał (wszystkie)',
        name: 'Nazwa (wszystkie)',
        volume: 'Objętość (wszystkie)',
        neck: 'Wykończenie (wszystkie)',
        weight: 'Gramatura (wszystkie)'
    };

    getData=async() =>{
        try{
            let response =  await Client.getEntries({
                content_type: "hiTechPlastPl",
                order: "fields.type"
            });
            let products = this.formatData(response.items)
        let featuredProducts = products.filter(product => product.featured===true)
    
        this.setState({
            products, 
            featuredProducts, 
            sortedProducts:products, 
            loading: false,
           
        })
        }catch (error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.getData()
    }

    formatData(items){
        let tempItems = items.map(item =>{

            let id = item.sys.id
            let images = item.fields.images.map(image => 
                image.fields.file.url)
            let product={...item.fields, images, id}

            return product

        })
        return tempItems
    }

    getProduct = (slug) =>{
        let tempProducts = [...this.state.products]
        const product = tempProducts.find((product)=>product.slug ===
        slug)
        return product
    }

handleChange = event =>{
    const target = event.target
    const value = target.type === "checkbox"? target.checked:
    target.value
    
    const name = event.target.name
    this.setState({
        [name]: value
    }, this.filterProducts)
   
}
clickHandler = () => {
    this.setState(() => this.initialState)
  }

filterProducts = () =>{
    let{
        products, type,application, material, name, volume, neck, weight
        }= this.state

        let tempProducts = [...products];

        if(type !== 'Typ (wszystkie)'){
            tempProducts = tempProducts.filter(product => product.type === type)
        }
        if(application !== 'Przeznaczenie (wszystkie)'){
            tempProducts = tempProducts.filter(product => product.application === application)
        }
        if(material !== 'Materiał (wszystkie)'){
            tempProducts = tempProducts.filter(product => product.material === material)
        }
        if(volume !== 'Objętość (wszystkie)'){
            tempProducts = tempProducts.filter(product => product.volume === volume)
        }
        
        if(name !== 'Nazwa (wszystkie)'){
            tempProducts = tempProducts.filter(product => product.name === name)
        }
        if(neck !== 'Wykończenie (wszystkie)'){
            tempProducts = tempProducts.filter(product => product.neck === neck)
        }
        if(weight !== 'Gramatura (wszystkie)'){
            tempProducts = tempProducts.filter(product => product.weight === weight)
        }

        this.setState({
            sortedProducts:tempProducts
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{...this.state,
                getProduct: this.getProduct, 
                handleChange: this.handleChange,
                clickHandler: this.clickHandler}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer, ProductContext}