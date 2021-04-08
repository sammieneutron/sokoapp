import React, {useState} from 'react'
import { Plus } from 'react-feather'
import AddressModal from './AddressModal';



const AddAddress = () => {
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <div className="row ml-1">
            <AddressModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="delivery-address mr-2">
                <h5>Sarah Connor</h5>
                <p className="address">Quench Ville, Plot 12, Nkrumah Rd, Kampala, Uganda</p>
                <p className="phone">+245 654 789 7958</p>
            </div>
            <div className="add-delivery" style={{cursor: "pointer"}} onClick={() => setModalShow(true)}>
                <span style={{color: "#2766CC", fontWeight: "600"}}><Plus size="20"/> Add New Address</span>
            </div>
        </div>
    )
}

export default AddAddress