import React from 'react'
import Image from "../hooks/image.png" // Assuming this is the correct path to your image
import { Github } from 'lucide-react';

function Xtension() {
  return (
    <div>
      <h2 className="mb-4 font-bold">Xtension</h2>
      <img src={Image} alt="Xtension Project Image" className="w-full h-auto rounded-lg object-cover mb-2" />
      <p className="mb-2">Xtension is a Chrome browser extension designed to enhance your experience on X/Twitter by intelligently filtering out unwanted & customize the feed by your choice - prompts.</p>
      <p className="mb-2">Utilizing the power of the <span className="font-semibold">LLAMA 3.8b</span> model, Xtension allows you to customize your feed by specifying the types of content you wish to avoid using natural language prompts. This provides a more nuanced and personalized content filtering solution compared to traditional keyword blocking.</p>
      <p>
        Explore the code on <a href="https://github.com/sharathdoes/Xtension" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a>.
      </p>
    </div>
  )
}

export default Xtension