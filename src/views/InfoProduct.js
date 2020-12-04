import React from 'react';
import './InfoProduct.css';
import payload from '../utils/payload';

function InfoProduct({product}){

    const user = payload();

    return(
        <div className="product">
            
                
            {
                product.image ? 
                    <div className="infoProduct">
                        <div className="imageI">
                            <img className="imagenP" src={product.image} alt="product_image"  />
                        </div>

                        <div className="info">
                            <h2 className="about">{product.product_name}</h2>
                            <h2 className="about">$ {product.price}</h2>
                            <p className="about">{product.brand}</p>
                            <p className="about">{product.description}</p>
                            <p className="about">Category: {product.category}</p>

                            {
                                user ? 
                                (
                                    <div>
                                        <button className="buyUser">Buy now!</button>
                                    </div>
                                )
                                :
                                (
                                    <div>
                                        <button className="buydisable" disabled>Buy now!</button>
                                        <p className="explain">To buy products Login!</p>
                                    </div>
                                    
                                )
                            }

                        </div>
                    </div>
                :
                  
                    <div className="noImg">
                        <h2 className="about">{product.product_name}</h2>
                            <h2 className="about">$ {product.price}</h2>
                            <p className="about">{product.brand}</p>
                            <p className="about">{product.description}</p>
                            <p className="about">Category: {product.category}</p>


                            {
                                user ? 
                                (
                                    <div>
                                        <button className="buyUser">Buy now!</button>
                                    </div>
                                )
                                :
                                (
                                    <div>
                                        <button className="buydisable" disabled>Buy now!</button>
                                        <p className="explain">To buy products Login!</p>
                                    </div>
                                    
                                )
                            }
                            
                    </div>
            }
                

                
            
        </div>
    )


}

export default InfoProduct;