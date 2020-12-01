import React from 'react';
import './InfoProduct.css'

function InfoProduct({product}){

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

                            <button className="buydisable" disabled>Buy now!</button>
                            <p className="explain">To buy products Login!</p>

                        </div>
                    </div>
                :
                  
                    <div className="noImg">
                        <h2 className="about">{product.product_name}</h2>
                            <h2 className="about">$ {product.price}</h2>
                            <p className="about">{product.brand}</p>
                            <p className="about">{product.description}</p>
                            <p className="about">Category: {product.category}</p>

                            <button className="buydisable" disabled>Buy now!</button>
                            <p className="explain">To buy products Login!</p>
                    </div>
            }
                

                
            
        </div>
    )


}

export default InfoProduct;