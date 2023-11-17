import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { db } from "../../firebase/client";
import {collection, doc, getDoc, getDocs, query, where, limit } from "firebase/firestore";
import CartWidget from '../cartWidget/cartWidget';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
      const categoriesRef = collection(db, "categories")

      getDocs(categoriesRef)
      .then(snapshot => {
          setCategories(snapshot.docs.map(doc =>({id: doc.id, ...doc.data()})))
      })
      .catch(e => console.error(e))
      
  }, [])


    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <img alt="" src={Logo} width="100" height="100" style={{padding: 10}} className="d-inline-block align-top"/>
            
        <Container>
          <Navbar.Brand href="/"> 
              TortaMundos 
          </Navbar.Brand>
          <Nav className="me-auto">
            {categories.map((category, index) => { 
                  return(
                      <NavLink to={`/category/${category.key}`} key={index}>
                          {category.description}
                      </NavLink>
                  )
              })}
          </Nav>
        </Container>
        <CartWidget />
      
      </Navbar>
    )
}

export default NavBar 