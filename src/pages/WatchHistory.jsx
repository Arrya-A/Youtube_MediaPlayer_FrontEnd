import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI } from '../services/allAPI'

const WatchHistory = () => {
  const [historyDetails, setHistoryDetails] = useState([])
  const getHistory = async () => {
    const response = await getHistoryAPI()
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      setHistoryDetails(response.data)
    }

  }

  useEffect(() => {
    getHistory()
  }, [])
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
          {historyDetails?.map((details, index) => (
            <tr key={details?.id}>
              <td>{index+1}</td>
              <td>{details?.caption}</td>
              <td><a href={details?.link} target='_blank'>{details?.link}</a></td>
              <td>{details?.timeStamp}</td>
              <td><button className='btn'><i class="fa-solid fa-trash-can text-danger"></i></button></td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default WatchHistory