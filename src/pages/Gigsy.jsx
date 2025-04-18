import React from 'react'
import Image from "../lib/image.png" // Assuming this is the correct path to your image
import { Github } from 'lucide-react';

function Gigsy() {
  return (
    <div>
      <h2 className="mb-4 font-bold">Gigsy (live <a href="https://gigsy-jobs.vercel.app/" target="_blank" rel="noopener noreferrer">here</a>)</h2>
      <img src={Image} alt="Gigsy Project Image" className="w-full h-auto rounded-lg object-cover mb-2" />
      <p className="mb-2">Gigsy is a comprehensive platform designed to connect clients and freelancers. It offers features for discovering talent, posting job opportunities, engaging in community discussions, and managing projects with integrated Kanban boards.</p>
      <p className="mb-2">A key aspect is its intelligent matchmaking system, which utilizes knowledge graphs to understand the nuanced needs of clients and the diverse skills of freelancers, leading to more effective and relevant connections.</p>
      <p>
        Explore the code on <a href="https://github.com/sharathdoes/gigsy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a> 
      </p>
    </div>
  )
}

export default Gigsy