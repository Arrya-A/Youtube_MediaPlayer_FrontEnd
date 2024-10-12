import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom'
import Category from '../components/Category'


const Home = () => {
  const [uploadVideoResponse, setUploadVideoResponse] = useState("")
  const [removeVideoResponseFromCategory, setRemoveVideoResponseFromCategory] = useState("")
  const [removeCategoryVideoResponseFromView, setRemoveCategoryVideoResponseFromView] = useState("")



  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container mb-5 d-flex justify-content-between">
        <Add setUploadVideoResponse={setUploadVideoResponse} />
        <Link to={'/watchhistory'}>Watch History</Link>
      </div>
      <div className="container-fluid row my-5">
        <div className="col-md-6">
          <h3>All Videos</h3>
          <View uploadVideoResponse={uploadVideoResponse} removeVideoResponseFromCategory={removeVideoResponseFromCategory} setRemoveCategoryVideoResponseFromView={setRemoveCategoryVideoResponseFromView} />
        </div>
        <div className="col-md-6">
          <Category setRemoveVideoResponseFromCategory={setRemoveVideoResponseFromCategory} removeCategoryVideoResponseFromView={removeCategoryVideoResponseFromView} />
        </div>
      </div>
    </div>
  )
}

export default Home