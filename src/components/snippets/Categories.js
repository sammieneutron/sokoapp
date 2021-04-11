import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import CategoryItems from './CategoryItems'
import { ChevronRight } from 'react-feather'
import { AppContext } from '../../services/AppContext';





const Categories = () => {
    const { categoryItems } = useContext(AppContext);
    
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