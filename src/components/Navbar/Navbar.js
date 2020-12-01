import React from 'react';
import './Navbar.css'
import {useHistory} from 'react-router-dom';

function Navbar(){

    const history = useHistory()

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

            <div class="bottons">

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

        </nav>
    )

}

export default Navbar;