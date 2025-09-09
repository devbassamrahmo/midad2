'use client'
import React from 'react'
import Hero from './component/Hero'
import Story from './component/Story'
import LifeStyle from './component/LifeStyle'
import Exlusive from './component/Exlusive'
import Baner from './component/Baner'
import Services from './component/Services'
import Baner2 from './component/Baner2'
import Register from './component/Register'

const page = () => {
  return (
    <div>
        <Hero />
        <Story />
        <LifeStyle />
        <Exlusive />
        <Baner />
        <Services />
        <Baner2 />
        <Register />
    </div>
  )
}

export default page