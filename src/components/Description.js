import React from 'react'
import "./Description.css";
import {FaArrowDown} from "react-icons/fa6"

const Description = () => {
  return (
    <div className='section section__descriptions'>
      <div className='card'>
        <div className='description__card-icon'>
              <FaArrowDown/>
              <small>MIN</small>
        </div>
        <h2>32 C</h2>
      </div>
    </div>
  )
}

export default Description
