import React , { Component } from 'react'
import BoxProduct from './BoxProduct.js'
import AddButton from './AddButton.js'
import MassDelete from './MassDelete.js'

export default class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
        this.showProducts()
    };
    showProducts = () => {
        let url = "/api/list-products/"
        fetch(url, {
            method: 'GET',
            headers: {'content-type': 'application/json'},
        })
            .then((response) => response.json())
            .then((data) =>{
                this.setState({
                    products: data,
                })
            })
    }

    renderProducts = () => {
        return this.state.products.map(
            (product, i) =>(
                <BoxProduct key={i} product={product} />
            ));
    }

    render(){
        return(
            <div className="products-list">
                <div className="product-nav">
                    <h1>Product List</h1>
                    <div className="buttons">
                        <AddButton />
                        <MassDelete />
                    </div>
                </div>
                <hr/>
                <div className="box">
                    {this.renderProducts()}
                </div>
                <hr/>
            </div>
        )
    }
}
