import React, { useContext } from 'react'
import { AppContext } from '../../services/AppContext'

const CategoryItems = (props) => {
    const { products, categoryItems } = useContext(AppContext);

    const countProduct = () => {
        let count = 0;

        // products.map((product, iter) => {
        //     categoryItems.map((category, index) => {
        //         if(product.categoryID === category.id) {
        //             count
        //         }
        //     })
        // })

        // for( let i = 0; i< products.length; i++) {
        //     const found = products.some(el => el.categoryID === categoryItems.indexOf(el) >= 0)
        //     if (found) {
        //         count += 1;
        //     }
        // }
        return count



    }
    
    return (
        <li className="">
            {props.name} ({props.count})
        </li>
    )
}

export default CategoryItems