import React from 'react'
import { Link } from 'react-router-dom'

const WatchHistory = () => {
  return (
    <div className='container' style={{ paddingTop: '100px' }}>
      <div className=' mb-5 d-flex justify-content-between'>
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className='table my-5 shadow'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Stamp</th>
            <th><i class="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Caption</td>
            <td><a href="" target='_blank'>Link</a></td>
            <td>Time</td>
            <td><button className='btn'><i class="fa-solid fa-trash-can text-danger"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WatchHistory