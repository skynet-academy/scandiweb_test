import React, { Component } from 'react';


export default class AddButton extends Component{
    constructor(props){
        super(props);
    }
    AddProduct = (e) =>{
        e.preventDefault();
        window.location.href = "add-product";
    }
    render(){
        return(
            <div>
                <button id="addItem" type="button" onClick={this.AddProduct}>ADD</button>
            </div>
        )
    }
}
