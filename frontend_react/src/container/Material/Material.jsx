import React from 'react'

import { AppWrap, MotionWrap } from '../../wrapper'
import './Material.scss'

const Material = () => {
  return (
    <>
      <h2 className='head-text'>Materials & Shackles</h2>
    </>
  )
}

export default AppWrap(
  MotionWrap(Material, 'app__material'),
  'materials',
  'app__secondarybg'
)