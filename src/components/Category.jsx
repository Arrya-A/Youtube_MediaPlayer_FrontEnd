import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getCategoryAPI, getSingleVideoAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


const Category = ({ setRemoveVideoResponseFromCategory, removeCategoryVideoResponseFromView }) => {
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleAddCategory = async () => {
    if (categoryName) {
      //api call
      await addCategoryAPI({ categoryName, allVideos: [] })
      setCategoryName("")
      handleClose()
      getAllCategory()
    } else {
      toast.warning("Please fill the form completely")
    }
  }


  const getAllCategory = async () => {
    const response = await getCategoryAPI()
    if (response.status >= 200 && response.status < 300) {
      setAllCategory(response.data)
    }
  }
  console.log(allCategory);


  const removeCategory = async (categoryId) => {
    await removeCategoryAPI(categoryId)
    getAllCategory()
  }

  const dragOverCategory = e => {
    e.preventDefault()
  }
  const videoDropped = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("vId")
    console.log(`Video id: ${videoId} dropped inside category id : ${categoryId}`);
    //add video to category
    //get details of video to be added in the category
    const { data } = await getSingleVideoAPI(videoId)
    console.log(data);
    let selectedCategory = allCategory?.find(item => item.id == categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    //save updated category to json server categories using api call
    await updateCategoryAPI(categoryId, selectedCategory)
    //remove video from json server allVideos using api
    const result = await removeVideoAPI(videoId)
    setRemoveVideoResponseFromCategory(result)
    getAllCategory()
  }


  const categoryVideoDragStart = (e, video, categoryId) => {
    console.log(`Video with id: ${video.id} from category id: ${categoryId} dragging started from category component`);
    let dataShare = { categoryId, video }
    e.dataTransfer.setData("dataShare", JSON.stringify(dataShare))
  }

  useEffect(() => {
    getAllCategory()
  }, [removeCategoryVideoResponseFromView])


  return (
    <>
      <div className='d-flex justify-content-around'>
        <h4>Category</h4>
        <button onClick={handleShow} style={{ width: '50px', height: '50px' }} className='btn btn-warning rounded-circle fw-bolder fs-5'>+</button>
      </div>

      <div className="container-fluid mt-3">
        {
          allCategory.length > 0 ?
            allCategory?.map(categoryDetails => (
              <div droppable="true" onDragOver={e => dragOverCategory(e)} onDrop={e => videoDropped(e, categoryDetails?.id)} key={categoryDetails?.id} className="border rounded p-3 mb-2">
                <div className="d-flex justify-content-between">
                  <h5>{categoryDetails.categoryName}</h5>
                  <button onClick={() => removeCategory(categoryDetails.id)} className='btn text-danger'><FontAwesomeIcon icon={faTrash} /></button>
                </div>
                <div className="row mt-2">
                  {
                    categoryDetails?.allVideos?.length > 0 &&
                    categoryDetails?.allVideos?.map(video => (
                      <div draggable={true} onDragStart={e => categoryVideoDragStart(e, video, categoryDetails?.id)} key={video?.id} className="col-md-4">
                        {/* videos of particular category */}
                        <VideoCard displayData={video} insideCategory={true} />
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
            :
            <div className='text-danger fw-bolder'>No categories added yet</div>
        }
      </div>

      <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInputCaption" label="Category Name" className="mb-3" >
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </>
  )
}

export default Category