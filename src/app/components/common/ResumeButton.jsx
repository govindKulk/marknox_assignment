import React from 'react'

// Resume Download Button
const ResumeButton = () => {


    return (
        <a 
        href= 'https://drive.google.com/file/d/1q15iPY8xg9tM1SWxlKl3zDwP-16rsifr/view?usp=sharing' 
        action="download"
        target='_blank'
        className='px-4 py-2 text-lg font-semibold text-center border border-black rounded-md hover:bg-black hover:text-white'
        
        >
            Download Resume
        </a>
    )
}

export default ResumeButton
