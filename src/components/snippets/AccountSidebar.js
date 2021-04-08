import React from 'react'
import {MapPin, File} from 'react-feather'
import { Link } from "react-router-dom";

const AccountSidebar = () => {
    // const sidebar = [
	// 	{ id: 1, name: 'Electronics', count: 31 },
	// 	{ id: 2, name: 'Face Masks', count: 12 },
	// 	{ id: 3, name: 'Fresh Foods', count: 8 },
	// 	{ id: 4, name: 'Grocery', count: 0 },
	// 	{ id: 5, name: 'Home', count: 24 },
	// 	{ id: 6, name: 'Kids', count: 99 },
	// ];
    return (
        <div className="mid-padding2 categories">
            <ul className="category-items">
                <Link to="/my-orders"><li> <File/> My Orders</li></Link>
                <Link to="/my-address"><li> <MapPin/> My Addresses</li></Link>
            </ul>
        </div>
    )
}

export default AccountSidebar