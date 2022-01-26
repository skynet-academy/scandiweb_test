import React , { Component } from 'react';
import CSRFToken from "./CSRFToken.js"

export default class AddProduct extends Component{
    constructor(props){
        super(props)
    }
    
    saveProduct = () =>{
        document.getElementById('product_form')
        console.log('submiting')
    }
    cancelProduct = (e) =>{
        e.preventDefault();
        window.location.href = '/'
    }

    selectOption = ()=>{
        let productValue = document.getElementById('productType').value;
        let optionSelected = document.getElementById('optionSelected');
        optionSelected.innerHTML = ""

        if(productValue === 'dvd'){ 
            optionSelected.innerHTML += 
            `
            <div id='detail-product'>
                <div>
                    <label>Size(MB)</label>
                    <input type="input" />
                </div>
                <p>*Please provide the CD's size in MB when type: DVD is selected*</p>
            </div>
            `
        } else if(productValue === 'furniture'){
            optionSelected.innerHTML +=
            `
            <div id='detail-product'>
                <div>
                    <label>Height(CM)</label>
                    <input type="input" />
                </div>
                <div>
                    <label>Width(CM)</label>
                    <input type="input" />
                </div>
                <div>
                    <label>Length(CM)</label>
                    <input type="input" />
                </div>
                <p>*Please provide the dimensions in HxWxL format when type: furniture is selected*</p>
            </div>
            `
        } else if(productValue === 'book'){
            optionSelected.innerHTML +=
            `
            <div id='detail-product'>
                <div>
                    <label>Weight(KG)</label>
                    <input type="input" />
                </div>
                <p>*Please provide the dimensions in KG format when type: book is selected*</p>
            </div>
            `
        }
    }
    render(){
        return(
            <div className="product-add">
                <div className="form-var">
                    <h1>Product Add</h1>
                    <div className="formButtons">
                        <div>
                            <button id="save" onClick={this.saveProduct} type="submit">Save</button>
                        </div>
                        <div>
                            <button id="cancel" onClick={this.cancelProduct} type="button">Cancel</button>
                        </div>
                    </div>
                </div>
                <hr />
                <form id="product_form" action="" method="POST">
                    <CSRFToken />
                    <section>
                        <label htmlFor="">SKU</label>
                        <input id="sku" type="text" placeholder=" sku" />
                    </section>
                    <section>
                        <label htmlFor="">Name</label>
                        <input id="name" type="text" placeholder=" name" />
                    </section>
                    <section>
                        <label htmlFor="">Price</label>
                        <input id="price" type="number" placeholder=" price" />
                    </section>
                    <label htmlFor="switcher">Type Switcher </label>
                    <select id="productType" name="switcher" onChange={this.selectOption}>
                        <option value="">Type Switcher</option>
                        <option id="DVD" value="dvd">DVD</option>
                        <option id="Furniture" value="furniture">Furniture</option>
                        <option id="Book" value="book">Book</option>
                    </select>
                    <div id="optionSelected">
                    </div>
                </form>
                <hr />
            </div>
        )
    }
}
