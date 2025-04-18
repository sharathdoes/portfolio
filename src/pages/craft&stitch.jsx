import React from 'react';
import { Github } from 'lucide-react';
import image from './image.png'; // Import the image

function cands() {
  return (
    <div>
      <h2 className='mb-4 font-bold '>Designathon - Hackathon</h2>
      <a href={image} target="_blank" rel="noopener noreferrer">
        <img className="rounded-lg mb-2" src={image} alt="Designathon Project Image" />
      </a> {/* Display the image with a link to open it */}
      <p className='mb-2 mt-4'>
      The Designathon Hackathon, hosted at VNR VJIET, was a thrilling event, a 24 hour National level Hackathon with 600+ participants and with a prize pool of 1 lakh.  </p>    <p>
        <a href="https://github.com/sharathdoes/Designathon-2k25" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a> | <a href="https://designathon-2k25-vnr.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          Live
        </a>.
      </p>
    </div>
  );
}

export default cands;
