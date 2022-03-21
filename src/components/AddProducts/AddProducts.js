import React, { useRef } from 'react';

const AddProducts = () => {

    const nameRef = useRef();
    const desRef = useRef();
    const priceRef = useRef();


    const handleAddProduct = (e) => {
        const name = nameRef.current.value;
        const des = desRef.current.value;
        const price = priceRef.current.value;
        const newProduct = { name, des, price };

        // data send to database 
        fetch("http://localhost:4000/products", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then()
        e.target.reset();
        e.preventDefault();
    }
    return (
        <div>
            <h2>Add Product From Here</h2>
            <form onSubmit={handleAddProduct}>
                <input type="text" placeholder='Name' ref={nameRef} />
                <input type="text" placeholder='Description' ref={desRef} />
                <input type="number" placeholder='Price' ref={priceRef} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProducts;