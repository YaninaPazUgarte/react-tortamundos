import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/cartWidget';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import logo from './../../assets/logo.png';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect (() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=> setCategories(json))
            
    }, [])


    return (
        <div className={styles.navBar}>
        
            <a href="">
                <img className={styles.logo} src={logo} alt="logo" />
            </a>
            {categories.map((category, index) => { 
                return(
                    <NavLink to={`/category/${category}`} key={index}>
                        {category}
                    </NavLink>
                )
            })}
        </div>
    )
}

export default NavBar 