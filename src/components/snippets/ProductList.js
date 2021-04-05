import React from 'react'
import ProductItem from './ProductItem'



const ProductList = () => {
    const productList = [
        { id: 1, name: "Kid's 2pk Cloth Face masks", price: 185000, discount: 0 },
        { id: 2, name: "Norbury Scandinavian Wood Leg Ottoman", price: 148000, discount: 20 },
        { id: 3, name: "Baby-Cut Carrots - 1lb - Good & Gather", price: 4000, discount: 0 },
        { id: 4, name: "Metal Country Chalet Charm and Wood Bench - Scarina Home", price: 34000, discount: 0 },
        { id: 5, name: "Alternative Protein Ground - 16oz - Good & Gather", price: 8000, discount: 0 },
    ];

    return (
        <div className="mid-padding product-list">
            <div className="heading">
                <h5 className="">Electronics &nbsp;&nbsp;<span className="badge badge-md badge-primary">12</span></h5>
            </div>

            <ul className="product-listing">
                {productList.map((product) => (
                    <ProductItem id={product.id} name={product.name} price={product.price} discount={product.discount} />
                ))}
            </ul>

        </div>
    )
}

export default ProductList