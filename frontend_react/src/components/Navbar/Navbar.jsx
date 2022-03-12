import React, { useState, useEffect } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  }
  
  const handleLangSerbian = (e) => {
    if (localStorage.getItem('lang') == 'sr') {
      e.preventDefault();
    } else {
      localStorage.setItem('lang', 'sr');
    }
  }

  const handleLangEnglish = (e) => {
    if (localStorage.getItem('lang') == 'en') {
      e.preventDefault();
    } else {
      localStorage.setItem('lang', 'en');
    }
  }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />

        <div className='app__navbar-company-info'>
          <p className='p-text'>Bukovacki put 75,</p>
          <p className='p-text'>21000 Novi Sad</p>
          <p className='p-text'>Tel: 021/111-111</p>
        </div>
      </div>

      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'materials', 'contact'].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
        ))}
      </ul>
      
      <ul className='app__navbar-lang'>
        <li className='app__flex p-text'>
          <div />
          <a href="" onClick={handleLangSerbian}>Srpski</a>
        </li>
        <li className='app__flex p-text'>
          <div />
          <a href="" onClick={handleLangEnglish}>English</a>
        </li>
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={(e) => handleOnClick(e)} />

        {toggle && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
            </motion.span>
            <ul>
              {['home', 'about', 'work', 'materials', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar