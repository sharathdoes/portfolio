import React from 'react';
import { Github } from 'lucide-react';

import image from "./scholar.png"
function Scholar() {
  return (
    <div>
      <h2 className='mb-5 font-bold'>Scholar (live <a href="https://scholarai-roan.vercel.app/" target="_blank" rel="noopener noreferrer">here</a>)</h2>
      <a href={image} target="_blank" rel="noopener noreferrer">
        <img className="rounded-lg mb-2" src={image} alt="Scholar Project Image" />
      </a>
      <p className='mb-2 mt-4'>
        Scholar scrapes verified scholarships from <code>scholars4dev</code> using <strong>Scrapy</strong>, then presents them through a user-friendly <strong>Next.js</strong> interface. Designed to make global scholarship discovery seamless for students and professionals.
      </p>
      <p>
        Check out the project on my{' '}
        <a
          href="https://github.com/sharathdoes/scholar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a>{' '}
        &{' '}
        <a
          href="https://scholarai-roan.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex font-bold items-center"
        >
          Live Demo
        </a>.
      </p>
    </div>
  );
}

export default Scholar;
