import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';


const Category = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex justify-content-around'>
        <h4>Category</h4>
        <button onClick={handleShow} style={{ width: '50px', height: '50px' }} className='btn btn-warning rounded-circle fw-bolder fs-5'>+</button>
      </div>

      <div className="container-fluid mt-3">
        <div className="border rounded p-3 mb-2">
          <div className="d-flex justify-content-between">
            <h5>CategoryName</h5>
            <button className='btn text-danger'><FontAwesomeIcon icon={faTrash} /></button>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              {/* videos of particular category */}
            </div>
          </div>
        </div>
      </div>

      <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInputCaption" label="Category Name" className="mb-3" >
            <Form.Control type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category