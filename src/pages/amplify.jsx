import React from 'react';
import { Github } from 'lucide-react';
import image from './image3.png'; // Import the image

function Cands() {
  return (
    <div>
      <h2 className='font-bold mb-2'> Amplify - Job optimization platform</h2>
        <img src={image} alt="Amplify Project Image" className=" mb-2 mt-4" />
      <p className="mb-3 mt-4">
        Amplify connects eligible job seekers with "Referral" opportunities through mock assessments, streamlining the path to employment for qualified & eligible candidates.
      </p>
      
      <p className="mb-4 mt-4"> <a href="https://github.com/sharathdoes/Amplify" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
        <Github className="w-4 h-4 mr-1" />
        GitHub
      </a> |  <a href="https://amplify-4.onrender.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
        Live
      </a>.</p>
    </div>
  );
}

export default Cands;
