import React from 'react'
import { Link } from 'react-router-dom'
import landingImage from '../assets/main.gif'
import feature1 from '../assets/feature1.gif'

import feature2 from '../assets/feature2.gif'

import feature3 from '../assets/feature2.gif'

import { Card } from 'react-bootstrap'

function Landing() {
  return (
    <>
      <div style={{ paddingTop: '100px' }} className='container'>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }} className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos veniam eum soluta esse tenetur ipsa ea. Reiciendis porro a eum explicabo minus maiores facilis, qui obcaecati? Necessitatibus aut aspernatur aperiam.</p>
            <Link to={'/home'} className='btn btn-warning' >Get Started</Link>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img className='ms-5' src={landingImage} alt="Landing Image" />
          </div>
        </div>
      </div>

      {/* <Row className='w-100 mt-5 d-flex justify-content-center align-items-center ps-4'>
        <Col md={1}></Col>
        <Col md={5} className='p-3'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>

          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, officiis sequi tempora reiciendis, nam et vitae odio illum, recusandae adipisci vero aliquam temporibus. Sunt labore suscipit consequatur debitis iusto quisquam?</p>
          <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center align-items-center p-5'>
          <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-75' />
        </Col>
      </Row> */}


      {/* features */}
      <div className="container">
        <h3 className='text-center my-5'>Features</h3>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <Card style={{ width: '100%' }} className='p-3 mt-3'>
              <Card.Img variant="top" src={feature1} height={'200px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 px-md-5">
            <Card style={{ width: '100%' }} className='p-3 mt-3'>
              <Card.Img variant="top" src={feature2} height={'200px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '100%' }} className='p-3 mt-3'>
              <Card.Img variant="top" src={feature3} height={'200px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>



      {/* Card */}
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 border border-secondary rounded p-3 my-5">
            <div className="row p-4">
              <div className="col-md-6">
                <h3 className='text-warning'> Simple fast and Powerful</h3>
                <p style={{ textAlign: 'justify' }} className='mt-4'><span className='fs-5'>Play Everything </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolorem. A sed dicta eum, quaerat vel fugiat tempora voluptas! Iste,</p>
                <p style={{ textAlign: 'justify' }} className='mt-4'><span className='fs-5'>Categorize Videos </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolorem. A sed dicta eum, quaerat vel fugiat tempora voluptas! Iste,</p>
                <p style={{ textAlign: 'justify' }} className='mt-4'><span className='fs-5'>Manage History </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolorem. A sed dicta eum, quaerat vel fugiat tempora voluptas! Iste,</p>
              </div>
              <div className="col-md-6">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/bMknfKXIFA8" title="React Course - Beginner&#39;s Tutorial for React JavaScript Library [2022]" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>


  )
}

export default Landing