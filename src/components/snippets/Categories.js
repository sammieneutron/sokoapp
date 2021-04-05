import React from 'react'
import { Link } from 'react-router-dom'
import CategoryItems from './CategoryItems'
import { ChevronRight } from 'react-feather'



const Categories = () => {
    const categoryItems = [
		{ id: 1, name: 'Electronics', count: 31 },
		{ id: 2, name: 'Face Masks', count: 12 },
		{ id: 3, name: 'Fresh Foods', count: 8 },
		{ id: 4, name: 'Grocery', count: 0 },
		{ id: 5, name: 'Home', count: 24 },
		{ id: 6, name: 'Kids', count: 99 },
	];
    return (
        <div className="def-padding categories">
            <ul className="category-items">
                {categoryItems.map((item) => (
                    <CategoryItems id={item.id} name={item.name} count={item.count} />
                ))}
            </ul>
            <Link to="/" className="view-all-cat">View all categories &nbsp;&nbsp;<ChevronRight /></Link>
        </div>


    )
}

export default Categories