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
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.logo_header} alt="logo" />
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repellat, enim aliquid soluta sed fugit at nobis non error obcaecati perferendis distinctio libero? Adipisci, quo odit. Quos quas placeat laudantium?</p>
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