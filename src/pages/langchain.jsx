import React from 'react';
import { Github } from 'lucide-react';

function Langchain() {
  return (
    <div>
      <h2>Langchain Projects</h2>
      <p className='mb-2'>
        I used Langchain to create a First Aid bot, integrating it with a simple RAG (Retrieval-Augmented Generation) 
        application. This app utilizes a FAISS database and BERT transformer to provide fast and accurate responses.
      </p>
      <p>
        Check out the projects on my  <a href="https://github.com/sharathdoes/langchain-all-experiments" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a>.
      </p>
    </div>
  );
}

export default Langchain;
