import React, { Component } from "react";
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Link, 
    Redirect
} from "react-router-dom"
import BoxProduct from "./BoxProduct.js"
import AddProduct from "./AddProduct.js"

export default class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router>
                <Routes>
                    <Route path="">
                        <Route path="/" element={<BoxProduct />}>
                        </Route>
                        <Route path="add-product/" element={<AddProduct />}>
                        </Route>
                    </Route>
                </Routes>
            </Router>
        )
    }
}

const appDiv = document.getElementById("app")

render(<App />, appDiv)
