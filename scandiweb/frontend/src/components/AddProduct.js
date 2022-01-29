import React , { Component } from 'react';
import CSRFToken from "./CSRFToken.js"

export default class AddProduct extends Component{
    constructor(props){
        super(props)
    }
    
    saveProduct = (e) =>{
        e.preventDefault();
        let form = document.getElementById('product_form')
        let productValue = document.getElementById('productType').value;
        let sku = document.getElementById('sku').value
        let name = document.getElementById('name').value
        let price = document.getElementById('price').value
        let errors = document.getElementById('errors')
        let data = {
            'sku': sku,
            'name': name,
            'price': price,
            'product_details': '',
        
        }
        if(productValue === 'furniture'){
            let height = document.getElementById('height').value;
            let width = document.getElementById('width').value;
            let length = document.getElementById('length').value;
            if(height == '' || width == '' || length == ''){
                data['product_details'] = null;
            } else{
                data['product_details'] = `Dimension: ${height}x${width}x${length}`;
            }
        } else if(productValue === 'dvd'){
            let size = document.getElementById('size').value;
            if(size == ''){
                data['product_details'] = null;
            } else{
                data['product_details'] = `Size: ${size}MB`;
            }
        } else if(productValue === 'book'){
            let weight = document.getElementById('weight').value;
            if(weight == ''){
                data['product_details'] = null;
            } else{
                data['product_details'] = `Weight: ${weight}KG`;
            }
        }

        let url = '/api/add-product/'
        let csrftoken = document.getElementsByName('csrfmiddlewaretoken')[0].value
        fetch(url,{
            method: 'POST',
            headers: {'content-type': 'application/json', 'X-CSRFToken': csrftoken},
            body: JSON.stringify(data)
        })
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            data = isJson ? await response.json() : null;  
            if(!response.ok){
                const error = (data && data.message) || response.status;
            }
            else{
                e.preventDefault();
                window.location.href = '/'
            }
            errors.innerHTML = '' 
            for(let key in data.errors){
                errors.innerHTML += `<p>'${key}'  ${data.errors[key][0]}</p>`
            }
        })
        .catch((error) =>{
            errors.innerHTML = `Error: ${error}`
            console.log('Error', error)
        })
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
                    <input id="size" type="number" required=true />
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
                    <input id="height" type="number" required=true />
                </div>
                <div>
                    <label>Width(CM)</label>
                    <input id="width" type="number" required=true />
                </div>
                <div>
                    <label>Length(CM)</label>
                    <input id="length" type="number" required=true />
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
                    <input id="weight" type="number" required=true />
                </div>
                <p>*Please provide the dimensions in KG format when type: book is selected*</p>
            </div>
            `
        }
    }
    render(){
        return(
            <div className="product-add">
                <form id="product_form" action="" method="POST">
                    <CSRFToken />
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
                    <div className="data">
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
                    </div>
                    <div id="errors">
                    </div>
                    <div id="optionSelected">
                    </div>
                </form>
                <hr />
            </div>
        )
    }
}
