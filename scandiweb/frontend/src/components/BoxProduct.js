import React , { Component } from 'react';

export default class BoxProduct extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className="boxProduct"> 
                <input className="delete-checkbox" type="checkbox" name="radioBtn" />
                <div className="details">
                    <p>{this.props.product.sku}</p>
                    <p>{this.props.product.name}</p>
                    <p>$ {this.props.product.price}</p>
                    <p>{this.props.product.product_details}</p>
                </div>
            </div>
        )
    }
}
