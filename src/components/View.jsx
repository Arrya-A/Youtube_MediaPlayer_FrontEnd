import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI } from '../services/allAPI'

const View = ({uploadVideoResponse}) => {
  const [allVideos, setAllVideos] = useState([])


  //get all videos
  const getAllVideos = async () => {
    const result = await getAllVideosAPI()
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setAllVideos(result.data)
    }

  }
  console.log(allVideos);


  useEffect(() => {
    getAllVideos()
  }, [uploadVideoResponse])
  return (
    <>
      <Row>
        {
          allVideos?.map(video => (
            <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
              <VideoCard displayData={video} />
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default View