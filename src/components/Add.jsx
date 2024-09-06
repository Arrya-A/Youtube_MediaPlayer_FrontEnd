import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoAPI } from '../services/allAPI';

const Add = ({setUploadVideoResponse}) => {
  const [invalidLink, setInvalidLink] = useState(false)
  const [videoDetails, setVideoDetails] = useState({
    caption: '',
    url: '',
    link: ''
  })
  console.log(videoDetails);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedURL = (link) => {
    if (link.includes("v=")) {
      let videoId = link.split("v=")[1].slice(0, 11)
      console.log(videoId);
      setVideoDetails({ ...videoDetails, link: `https://www.youtube.com/embed/${videoId}` })
      setInvalidLink(false)
    }
    else {
      //invalid url
      console.log("invalid url");
      setInvalidLink(true)
      setVideoDetails({ ...videoDetails, link: '' })


    }
  }


  const handleUpload = async () => {
    console.log("Inside handleupload function");
    const { caption, url, link } = videoDetails
    if (caption && url && link) {
      //toast.success("Proceed to api")
      const result = await uploadVideoAPI(videoDetails)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        //upload success
        handleClose() // to close modal
        setVideoDetails({ caption: "", url: "", link: "" }) // to reset state values
        toast.success(`${result.data.caption} added to your Collection`)
        setUploadVideoResponse(result)
      }
    } else {
      toast.warning("Please fill the form completely")
    }

  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button className='btn fs-5' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} /></button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-3' />Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel controlId="floatingInputCaption" label="Video Caption" className="mb-3" >
              <Form.Control type="text" placeholder="Video Caption" onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputImage" label="Image URL" className="mb-3" >
              <Form.Control type="text" placeholder="Image URL" onChange={(e) => setVideoDetails({ ...videoDetails, url: e.target.value })} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputLink" label="Youtube Video Link" >
              <Form.Control type="text" placeholder="Youtube Video Link" onChange={(e) => getEmbedURL(e.target.value)} />
            </FloatingLabel>
            {
              invalidLink && <div className='"text-danger fw-bolder mt-3'>
                Invalid Youtube Link
              </div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="warning" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Add