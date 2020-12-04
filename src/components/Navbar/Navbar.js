import React, {useState, useEffect} from 'react';
import './Navbar.css'
import {useHistory} from 'react-router-dom';
import payload from '../../utils/payload';
import axios from 'axios';


function Navbar(){

    const user = payload();

    const [info, setInfo] = useState([]);

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        const config = {
            headers:{
                Authorization: `JWT ${token}`
            }
        }

        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/user/me`, config)
            .then((response) => {
                setInfo(response.data.user)
                console.log(response.data.user)
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })

    },[])
    


    const history = useHistory();

    const categories = ["Books",
    "Movies",
    "Music",
    "Games",
    "Electronics",
    "Computers",
    "Home",
    "Garden",
    "Tools",
    "Grocery",
    "Health",
    "Beauty",
    "Toys",
    "Kids",
    "Baby",
    "Clothing",
    "Shoes",
    "Jewelery",
    "Sports",
    "Outdoors",
    "Automotive",
    "Industrial"
    ]

    return(
        <nav className="navbar">

            <div className="name">
                <h1 className="title">Store</h1>
            </div>

            <div className="bottons">

                <ul className="options">

                    <li className="list" onClick={() => { history.push('/') }}><a className="element" href="">Home</a></li>

                    <li className="list"><a className="element" href="" >Categories</a>
                        <ul className="sub">
                            {
                                categories.map(category => {
                                    return(
                                    <li onClick={() => { history.push(`/category/${category}`) }} ><a className="element" href="">{category}</a></li>
                                    )
                                }
                            )}   
                        </ul>
                    </li>
                </ul>
            </div>

            
                
            {
                user ? 
                (
                <div className="userInfo">
                    <div className="userCard">

                        <p className="nameUser"><span className="spanRole">{info.role}</span> {info.first_name} {info.last_name}</p>
                        <div className="imageProfile"></div>

                    </div>

                    {
                        info.role === "ADMIN" ? 
                        <button className="add">Add Product</button>
                        :
                        null
                    }

                    <button className="logout" onClick={() => { history.push('/logout') }}>Logout</button>
                </div>
                )
                :
                (
                <div className="logAndSign">
                    <button className="logSign" onClick={() => { history.push('/login') }}>Login</button>
                    <button className="logSign" onClick={() => { history.push('/signup') }}>Signup</button>
                </div>
                )
            }

                
                
            

        </nav>
    )

}

export default Navbar;