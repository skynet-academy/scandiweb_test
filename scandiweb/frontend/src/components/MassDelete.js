import React, { Component } from 'react'


export default class MassDelete extends Component{
    constructor(props){
        super(props);

    }
    
    deleteProduct = () =>{
        console.log('deleting element')
    }

    render(){
        return(
            <div>
                <button id="delete-product-btn" type="button" onClick={this.deleteProduct}>MASS DELETE</button>
            </div>
        )
    }
}
