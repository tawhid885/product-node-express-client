import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Products.css";

const Products = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = "http://localhost:4000/products";
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleUpdate = (id) => {
        navigate(`/products/${id}`);
    }

    const handleDelete = (id) => {
        const process = window.confirm("Are you sure want to delete?");
        if (process) {
            const url = `http://localhost:4000/products/${id}`;
            fetch(url, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully!");
                        const newProducts = products.filter(product => product._id !== id);
                        setProducts(newProducts);
                    }
                })
        }
    }


    return (
        <div className='product-container'>
            {
                products.map(product => {
                    return (
                        <div className='product' key={product._id}>
                            <h4>{product.name}</h4>
                            <p>{product.des}</p>
                            <p>{product._id}</p>
                            <small>{product.price}</small>
                            <div className='btn'>
                                <button className='update' onClick={() => handleUpdate(product._id)}>Update</button>
                                <button className='delete' onClick={() => handleDelete(product._id)}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Products;