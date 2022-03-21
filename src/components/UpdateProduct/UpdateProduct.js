import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:4000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const handleUpdate = (e) => {
        const url = `http://localhost:4000/products/${id}`;
        fetch(url, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Updated Successfully!");
                    setProduct({});
                }
            })
        e.preventDefault();
    }

    const handleName = (e) => {
        const newName = e.target.value;
        const newProduct = { ...product };
        newProduct.name = newName;
        setProduct(newProduct);
    }

    const handleDes = (e) => {
        const newDes = e.target.value;
        const newProduct = { ...product };
        newProduct.des = newDes;
        setProduct(newProduct);
    }

    const handlePrice = (e) => {
        const newPrice = e.target.value;
        const newProduct = { ...product };
        newProduct.price = newPrice;
        setProduct(newProduct);
    }


    return (
        <div>
            <h2>Update Product Page : {product.name} {product.des} {product.price}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" onChange={handleName} value={product.name || ""} />
                <input type="text" onChange={handleDes} value={product.des || ""} />
                <input type="number" onChange={handlePrice} value={product.price || ""} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProduct;