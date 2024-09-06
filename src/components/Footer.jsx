import React from 'react'

const Footer = () => {
  return (
    <div style={{ height: '300px' }} className='container mt-5 w-100' c>
      <div className='d-flex justify-content-center'>
        <div className="intro w-25">
          <h4>Media Player</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam corporis suscipit assumenda dolorum voluptas ad delectus aperiam quisquam quia harum saepe, facere eveniet libero magni optio quaerat blanditiis officiis.</p>
        </div>
        <div className="links w-25 d-lg-flex flex-column align-items-center">
          <div>
            <h4>Links</h4>
            <p>Landing Page</p>
            <p>Home Page</p>
            <p>Watch History</p>
          </div>
        </div>
        <div className="guides w-25 d-lg-flex flex-column align-items-center">
          <div>
            <h4>Guides</h4>
            <p>React</p>
            <p>React</p>
            <p>React Router</p>
          </div>
        </div>
        <div className="contact w-25">
          <h4>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Email id' />
            <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex justify-content-between mt-4'>
            <i className="fa-brands fa-twitter fa-xl"></i>
            <i className="fa-brands fa-instagram fa-xl"></i>
            <i className="fa-brands fa-facebook fa-xl"></i>
            <i className="fa-brands fa-linkedin fa-xl"></i>
            <i className="fa-brands fa-github fa-xl"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer