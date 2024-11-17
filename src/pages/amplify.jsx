import React from 'react';
import { Github } from 'lucide-react';

function Cands() {
  return (
    <div>
      <h2>MERN Stack Project</h2>
      <p className="mb-2 mt-2">
        Amplify connects eligible job seekers with "Referral" opportunities through mock assessments, streamlining the path to employment for qualified & eligible candidates.
      </p>
      
      <div className="mt-1 mb-1">
        <strong>Tech Stack:</strong> React.js, Express.js, MongoDB, NLP for Resume Extraction, Gemini
      </div>
      <p>
        Check out the projects on my{' '}
        <a href="https://github.com/sharathdoes/Amplify" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a>.
      </p>
    </div>
  );
}

export default Cands;
