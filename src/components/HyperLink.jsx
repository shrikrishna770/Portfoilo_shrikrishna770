import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


function HyperLink() {
  return (
    <>
    <div className='flex gap-4 text-2xl justify-center p-10'>
      <p className=''>DOWNLOAD RESUME</p>
      <p><FaGithub/></p>
      <p><FaLinkedinIn/></p>
    </div>
    </>
  )
}

export default HyperLink