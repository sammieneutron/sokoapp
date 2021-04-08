import React, { useContext } from 'react'
import { AppContext } from '../../services/AppContext'
import ProductItem from './ProductItem'



const ProductList = () => {
    const { products } = useContext(AppContext);

    return (
        <div className="mid-padding product-list">
            <div className="heading">
                <h5 className="">Electronics &nbsp;&nbsp;<span className="badge badge-md badge-primary">12</span></h5>
            </div>

            <ul className="product-listing">
                {products.map((product) => (
                    <ProductItem id={product.id} name={product.name} price={product.price} discount={product.discount} />
                ))}
            </ul>

        </div>
    )
}

export default ProductList