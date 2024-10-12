import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, storeHistoryAPI } from '../services/allAPI'

const VideoCard = ({ displayData, setDeleteVideoResponse, insideCategory }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    //save history in json server
    const { caption, link } = displayData

    //get date & time to watch video
    const sysTime = new Date()
    const timeStamp = sysTime.toLocaleString('en-US', { timeZoneName: 'short' })
    console.log(timeStamp);
    const videoDetails = { caption, link, timeStamp }
    await storeHistoryAPI(videoDetails)
    // console.log(videoDetails);

  }

  const removeVideo = async (videoId) => {
    const result = await removeVideoAPI(videoId)
    // pass response to view component (child to parent)
    setDeleteVideoResponse(result?.data)
  }

  const videodragStart = (e, videoId) => {
    console.log(`Dragging started with video id: ${videoId}`);
    // share video id along with ondragstart event
    e.dataTransfer.setData("vId", videoId)
  }
  return (
    <>
      <Card draggable={true} onDragStart={e => videodragStart(e, displayData?.id)} style={{ width: '100%' }} className='mt-4'>
        <Card.Img onClick={handleShow} variant="top" src={displayData?.url} height={'250px'} />
        <Card.Body>
          <div className='d-flex  justify-content-between'>
            <Card.Text>{displayData.caption}</Card.Text>
            {
              !insideCategory &&
              <Button onClick={() => removeVideo(displayData?.id)} variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
            }
          </div>
        </Card.Body>
      </Card>

      <Modal size='md' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="330" src={`${displayData?.link}?autoplay=1`} title="caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideoCard