import React from 'react';
import { Github } from 'lucide-react';
import image from './image1.png'; // Import the image

function Langchain() {
  return (
    <div>
      <h2 className='mb-5  font-bold'>Luma AI (live <a href="https://luma-ai-yo1k.onrender.com/" target="_blank" rel="noopener noreferrer">here</a>)</h2>
      <a href={image} target="_blank" rel="noopener noreferrer">
        <img className="rounded-lg mb-2" src={image} alt="Luma AI Project Image" />
      </a> {/* Display the image with a link to open it */}
      <p className='mb-2 mt-4'>Luma AI reimagines search by replacing the traditional search bar with an prompt input. Users can specify their interests and constraints, and the system using knowledge graphs and Cypher queries to retrieve and display relevant results, moving beyond simple keyword matching. Currently for Netflix and right now working for Amazon. </p>
      <p>
        Check out the projects on my <a href="https://github.com/sharathdoes/Luma-Ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a> & <a href="https://luma-ai-yo1k.onrender.com/" target="_blank" rel="noopener noreferrer" className="inline-flex font-bold items-center">
          Live Demo
        </a>.
      </p>
    </div>
  );
}

export default Langchain;