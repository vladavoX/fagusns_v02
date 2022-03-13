import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Header.scss'

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-title'
      >
        <h3 className='head-text'><span>Welcome</span> To <span>Our</span> Webiste<br />Take <span>Your</span> Time <span>and </span> Explore Our <span>Work</span></h3>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-img"
      >
        <img src={images.logo_header} alt="logo" />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Lorem <span>ipsum dolor, sit amet</span> consectetur adipisicing elit.
             <span> Saepe repellat, enim aliquid soluta</span> sed fugit at nobis non error obcaecati
             <span> perferendis distinctio libero? Adipisci,</span> quo odit. Quos quas placeat laudantium?</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Header, 'app__home'),
  'home',
  'app__primarybg'
  );