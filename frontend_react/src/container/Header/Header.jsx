import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div style={{ marginLeft: 20 }}>
              <h1 className='head-text'>Fagus NS <span>021</span></h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Some nice text about FAGUS NS! Fagus NS is awesome wood working company!</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.logo_header} alt="logo" />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.oaktree, images.oaklog, images.oakplank, images.oakproduct].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='oaktree' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Header, 'app__home'),
  'home',
  'app__primarybg'
  );