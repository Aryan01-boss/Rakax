import React from 'react'
import "../styles/ChooseUs.css"

function ChooseUs()  {
  return (
    <>
    <div className="main-container">
        <div className="side-a">
          <div className="side-a-content">
            <h2>Why Choose Us</h2>
            <p>Side A content</p>
            <div className="side-a-img"></div>
          </div>
        </div>
        <div className="side-b">
          <div className="side-b-content">
            <h2>Side B</h2>
            <div className="cards">
              <div className="card-1"></div>
              <div className="card-2"></div>
              <div className="card-3"></div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default ChooseUs;