import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar'
import Products from './Products'

function Home(){

    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
            .then(({data}) => {
                setProducts(data)
                console.log(data)
            }) 
    }, [])

    return(
        <div>
            <Navbar />
            <Products products={products}/>
        </div>
       
       

    )

}

export default Home;