import React from 'react';
import { Github } from 'lucide-react';

function cands() {
  return (
    <div>
      <h2>Mern stack Project</h2>
      <p className='mb-2'>
      An application to create opportunities for designers all over world by connecting them to source managers of clothing companies.  </p>    <p>
        Check out the projects on my  <a href="https://github.com/sharathdoes/Craft-and-stitch-server" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a>.
      </p>
    </div>
  );
}

export default cands;
