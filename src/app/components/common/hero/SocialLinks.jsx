import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const socialLinks = [
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/your-linkedin',
        icon: <FaLinkedin size={20}/>,
        bgColor: 'bg-blue-500'
    },
    {
        name: 'GitHub',
        link: 'https://github.com/govindKulk',
        icon: <FaGithub size={20}/>,
        bgColor: 'bg-black'
    },
    {
        name: "Mail",
        link: 'mailto:kulkarnigovind2003@gmail.com',
        icon: <FaEnvelope size={20}/>,
        bgColor: 'bg-red-500'
    },
    {
        name: "Call",
        link: 'tel:+918087012345',
        icon: <FaPhone size={20}/>,
        bgColor: 'bg-green-500'
    }
]

const SocialLinks = () => {
  return (
    <ul className='flex gap-2 items-center py-2'>
      {
        socialLinks.map((link, index) => {
            return (
                <li key={index} className={`inline-block  rounded-[100%] ${ link.bgColor } w-8 h-8 inline-flex items-center justify-center text-white `}>
                    <a href={link.link} target='_blank' rel='noreferrer'>
                        {link.icon}
                    </a>
                </li>
            )
        })
      }
    </ul>
  )
}

export default SocialLinks
