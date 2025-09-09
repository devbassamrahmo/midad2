import React from 'react'
import Hero from './compnent/Hero'
import DesignFeatures from './compnent/DesignFeatures'
import KeyFacts from './compnent/KeyFacts'
import ContactShare from '@/component/ContactShare'

const page = () => {
    return (
        <div>
            <Hero />
            <DesignFeatures />
            <KeyFacts />
            <ContactShare />
        </div>
    )
}

export default page