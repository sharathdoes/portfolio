import React from 'react'
import { Github } from 'lucide-react';
import image from './waste/image.png';

function NandC() {
  return (
    <div>
      <h2 className="mb-4 font-bold">NaturalCare (live <a href="https://naturalcare-xi.vercel.app/" target="_blank" rel="noopener noreferrer">here</a>)</h2>
      <img src={image} alt="Project Image" className="w-full h-auto rounded-lg object-cover" />
      <p className="mb-4 mt-2 ">This project implements a community-driven platform where users can share and discover effective natural remedies for everyday health issues & Doctors can verify them.</p>
    </div>
  )
}

export default NandC;