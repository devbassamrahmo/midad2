import Crafting from '@/component/Home/Crafting'
import Experiance from '@/component/Home/Experiance'
import Hero from '@/component/Home/Hero'
import MediaCenter from '@/component/Home/MediaCenter'
import Vision from '@/component/Home/Vision'
import React from 'react'
import Projects from '@/component/Projects'
import Contact from '@/component/Home/Contact'

const page = () => {
  return (
    <div className='  '>
        <Hero />
        <Experiance />
        <MediaCenter />
        <Projects />
        <Crafting />
        <Vision />
        <Contact />
    </div>
  )
}

export default page