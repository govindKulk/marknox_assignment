import React from 'react'
import HeadingText from './HeadingText'
import SocialLinks from './SocialLinks'
import ResumeButton from '../ResumeButton'

const HeroSection = () => {
  return (
    <div className=' flex flex-col justify-center '>
      <HeadingText/>

      <p className='py-2 text-lg'>Highly motivated and results-oriented Full-Stack Developer with a strong foundation in Next.js, React.js,
Node.js, and the MERN stack. Adept at breaking down complex tasks into manageable chunks and thrives
in fast-paced environments. Eager to leverage academic knowledge and internship experience to contribute
to a dynamic team</p>

    <SocialLinks/>

    <div className='my-2'>
    <ResumeButton/>
    </div>
    
    </div>
  )
}

export default HeroSection
