import React, { Component } from 'react'
import CSRFToken from './CSRFToken'

export default class MassDelete extends Component{
    constructor(props){
        super(props);
    }

    deleteProduct = () =>{
        let elements = document.getElementsByClassName('delete-checkbox');
        let csrftoken = document.getElementsByName('csrfmiddlewaretoken')[0].value;
        [...elements].forEach(element =>{
            if(element.checked){
                let url = `/api/delete-product/${element.value}`;
                fetch(url, {
                    method: 'DELETE',
                    headers: {'content-type': 'application/json', 'X-CSRFToken': csrftoken },
                }).then((response) =>{
                    window.location.replace('/')                   
                })
            }
        })
    }

    render(){
        return(
            <div>
                <CSRFToken />
                <button id="delete-product-btn" type="button" onClick={this.deleteProduct}>MASS DELETE</button>
            </div>
        )
    }
}
