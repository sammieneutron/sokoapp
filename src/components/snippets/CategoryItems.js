import React from 'react'

const CategoryItems = (props) => {
    
    return (
        <li className="">
            {props.name} ({props.count})
        </li>
    )
}

export default CategoryItems