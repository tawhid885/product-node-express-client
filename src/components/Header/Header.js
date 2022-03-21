import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();

    const showProducts = () => {
        navigate("/products");
    }

    const showAddProduct = () => {
        navigate("addProducts");
    }
    return (
        <div>
            <ul>
                <li onClick={showProducts}>Products</li>
                <li onClick={showAddProduct}>AddProducts</li>
            </ul>
        </div>
    );
};

export default Header;