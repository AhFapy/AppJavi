import React from 'react'
import images from '../../exports/images'
import './slider.css'
import { motion } from 'framer-motion'

const Slider = (props) => {
  return (
    <motion.div className='slider-container'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:0}} >
        {images.map(image => (
            <motion.div className='item'>
                <img src={image} alt="" />
                <p className='slider-text'>Javi23</p>
                <span className='slider-text'>0 a 75k</span>
            </motion.div>
        ))}
        </motion.div>
        
    </motion.div>
  )
}

export default Slider