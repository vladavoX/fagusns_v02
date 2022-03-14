import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Material.scss'

const Material = () => {
  const [materials, setMaterials] = useState([]);
  const [hinges, setHinges] = useState([]);

  useEffect(() => {
    const materialsQuery = '*[_type == "materials"]';
    const hingesQuery = '*[_type == "hinges"]';

    client.fetch(hingesQuery)
      .then((data) => {
        setHinges(data);
      });

    client.fetch(materialsQuery)
      .then((data) => {
        setMaterials(data);
      });
  }, [])
  

  return (
    <>
      <h2 className='head-text'>Materials & <span>Hinges</span></h2>

      <div className='app__materials-container'>
        <motion.div className='app__materials-list'>
          {materials.map((material) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__materials-item app__flex"
              key={material.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: material.bgColor }}
              >
                <img src={urlFor(material.icon)} alt={material.name} />
              </div>
              <p className='p-text'>{material.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__hinges-list'>
          {hinges.map((hinge) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__hinges-item app__flex'
              key={hinge.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: hinge.bgColor }}
              >
                <img src={urlFor(hinge.icon)} alt={hinge.name} />
              </div>
              <p className='p-text'>{hinge.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Material, 'app__materials'),
  'materials',
  'app__secondarybg'
)