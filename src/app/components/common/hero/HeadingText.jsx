"use client"

import React, { useEffect, useState } from 'react'

const HeadingText = () => {

    // TYING ANIMATION
    const [textLength, setTextLength] = useState(0);
    let heading = "Full Stack Developer | React/Next.js Developer";

    useEffect(( ) => {


        let interval = setInterval(() => {

            if(textLength === heading.length){
                clearInterval(interval);
                return;
            }

            setTextLength((prev) => prev + 1);
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <h1 className='text-3xl font-bold py-2 leading-[44px]'>
            {heading.slice(0,textLength)}
        </h1>
    )
}

export default HeadingText
