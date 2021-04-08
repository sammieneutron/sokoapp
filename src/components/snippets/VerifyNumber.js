import React from 'react'
import {Modal, Form, InputGroup, FormControl} from 'react-bootstrap'

const VerifyNumber = (props) => {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size="md"
            >
                <Modal.Header closeButton>
                    <h5 style={{textAlign: "center"}} className="text-center">Verify your number</h5>
                </Modal.Header>
                <Modal.Body className="p-5">
                    <p className="text-center">Please enter verification code sent via SMS to <br/> +345 345 543 5665 </p>
                    <Form>
                        <InputGroup className="mb-3">
                            <FormControl aria-describedby="basic-addon1" style={{width: "70%"}} className="mr-sm-2" />
                        </InputGroup>    
                    </Form>   
                    <p style={{textAlign: "center", justifyContent: "center"}} className="text-center">Resend code in 3 secs</p>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default VerifyNumber