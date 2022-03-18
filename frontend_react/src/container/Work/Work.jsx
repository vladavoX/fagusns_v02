import React, { useState, useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(0);

  const handleOnClick = (index) => {
    setCurrentIndex(index);
  }

  const openModal = (e, index) => {
    e.stopPropagation();
    setModalIndex(index);
    
    for(let i=0; i<=index; i++){
      const element = document.getElementById(index);
      let elementId = parseInt(element.getAttribute('id'));
      if(elementId === i){
        var modal = document.querySelectorAll('.app__modal')[i];
        modal.style.display = "flex";
      }
    }
  }

  const closeModal = (e, index) => {
    e.stopPropagation();
    setModalIndex(index);

    for(let i=0; i<=index; i++){
      const element = document.getElementById(index);
      let elementId = parseInt(element.getAttribute('id'));
      if(elementId === i){
        var modal = document.querySelectorAll('.app__modal')[i];
        modal.style.display = "none";
      }
    }
  }

  useEffect(() => {
    const query = `*[_type == "works" && language == "${localStorage.getItem('lang')}"]`;

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Our creative <span>Work</span> Section</h2>

      <div className="app__work-filter">
        {['Kitchens', 'Bedrooms', 'Bathrooms', 'Furniture', 'Closets', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
                onClick={(e) => openModal(e, index)}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                    
                  </motion.div>
                </a>
              </motion.div>        
            </div>

            <motion.div 
              className='app__modal'
              id={index}
            >
              <motion.div 
                className='app__modal-btns app__flex'
                whileInView={{ x: [-100, 0 ], opacity: [0, 1] }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
              >
                <div className='app__flex' onClick={() => handleOnClick(currentIndex === 0 ? currentIndex + 1 : currentIndex - 1)}>
                  <HiChevronLeft />
                </div>
              </motion.div>
              <motion.div 
                className='app__modal-image app__flex'
                whileInView={{ x: [-100, 1], opacity: [0, 1] }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
              >
                <img src={urlFor(work.showcase[currentIndex])} alt={work.title} />
              </motion.div>
              <motion.div
                className='app__modal-btns app__flex'
                whileInView={{ x: [-100, 0 ], opacity: [0, 1] }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
              >
                <div className='app__flex' onClick={() => handleOnClick(currentIndex === 0 ? currentIndex + 1 : currentIndex - 1)}>
                  <HiChevronRight />
                </div>
              </motion.div>
              <motion.div
                className='app__modal-desc app__flex'
                whileInView={{ x: [-100, 1], opacity: [0, 1] }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
              >
                <h3 className='head-text app__flex'><span>{work.title}</span></h3>
                <p className='bold-text app__flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, rem. Natus eos, accusantium debitis, placeat, est voluptatibus excepturi numquam adipisci quo veritatis eveniet id neque earum repellendus assumenda aperiam blanditiis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis dolore distinctio vero eos explicabo, repellendus voluptatibus atque qui iusto consequuntur tempore officia assumenda! Illo ad laboriosam debitis voluptatibus aliquid?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut obcaecati voluptatum sunt suscipit laborum, doloribus quas ipsa officiis! Laborum, corporis dolore distinctio vero eos explicabo, repellendus voluptatibus atque
                </p>
                <div className='app__modal-seeMore app__flex'>
                  <button className='seeMore-btn app__flex'><span>{work.title}s gallery</span></button>
                  <BsArrowRight />
                </div>
                
              </motion.div>
              <motion.div 
                className='app__modal-hinges-list app__flex'
                whileInView={{ x: [-100, 1], opacity: [0, 1] }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
              >
                  <motion.div
                    className='app__modal-hinges-item'
                  >
                    <img src={urlFor(work.hingeone)} alt="hinge" />
                  </motion.div>
                  <motion.div
                    className='app__modal-hinges-item'
                  >
                    <img src={urlFor(work.hingetwo)} alt="hinge" />
                  </motion.div>
                  <motion.div
                    className='app__modal-hinges-item'
                  >
                    <img src={urlFor(work.hingethree)} alt="hinge" />
                  </motion.div>
                

              </motion.div>
              <HiX className='app__modal-btnclose' onClick={(e) => closeModal(e, index)} />
            </motion.div>
            
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>    
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);