import React from 'react'
import {Modal, Form, Button, InputGroup, Dropdown, FormControl, DropdownButton} from 'react-bootstrap'

const AddressModal = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h5 style={{textAlign: "center"}} className="text-center">Add Address</h5>
        </Modal.Header>
        <Modal.Body className="p-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mobile Number</Form.Label>
                <InputGroup className="mb-3">
                  <DropdownButton
                  as={InputGroup.Prepend}
                  variant="outline-secondary"
                  title="+234"
                  id="input-group-dropdown-1"
                  >
                  <Dropdown.Item href="#">+256</Dropdown.Item>
                  <Dropdown.Item href="#">+222</Dropdown.Item>
                  <Dropdown.Item href="#">+343</Dropdown.Item>
                  </DropdownButton>
                  <FormControl aria-describedby="basic-addon1" style={{width: "70%"}} className="mr-sm-2" />
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="e.g Kampala" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
}

export default AddressModal