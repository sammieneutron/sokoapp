import React from 'react'
import { Form } from 'react-bootstrap'
import { Search } from 'react-feather'

const SearchProduct = () => {
    return (
        <div>
            <Form>
                <Form.Control type="text" className="form-input form-position" placeholder="Search for products..." />
                <button class="btn btn-search"><Search size="20" color="#2766CC" /></button>
            </Form>
            
        </div>
    )
}

export default SearchProduct