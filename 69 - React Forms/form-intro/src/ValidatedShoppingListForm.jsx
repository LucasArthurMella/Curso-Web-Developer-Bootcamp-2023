import { useState } from "react";

export default function ValidatedShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });
    const [productIsValid, setProductIsValid] =  useState(false);


    const validate = (product) => {
        if(product.length === 0 ){
            setProductIsValid(false);
        }else {
            setProductIsValid(true);
        }
    }
    const handleChange = (evt) => {
        //because the page hasn't rerendered since the name changed, the value keeps the same, so you need to directly pass 
        //the object which will be changed
        if(evt.target.name === "product"){
            validate(evt.target.value);
        }

        setFormData(currData => {
            return { ...currData, [evt.target.name]: evt.target.value };
        });


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(productIsValid){
            addItem(formData);
            setFormData({product: "", quantity: 0});
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product Name</label>
            <input type="text" placeholder="product name" name="product" id="product" onChange={handleChange} value={formData.product} />

            {!productIsValid && <p style={{color: "red"}}>Product name cannot be empty</p>}

            <label htmlFor="quantity">Quantity</label>
            <input type="number" placeholder="quantity" name="quantity" id="quantity" onChange={handleChange} value={formData.quantity} />
            <button disabled={!productIsValid}>Add Item</button>
        </form>
    )
}
