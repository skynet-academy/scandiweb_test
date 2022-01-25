import React , { Component } from 'react';
import CSRFToken from "./CSRFToken.js"

export default class AddProduct extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <form action="" method="POST">
                    <CSRFToken />
                    <h1>Add a new product</h1>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}
