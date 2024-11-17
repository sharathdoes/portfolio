import React from 'react';
import { Github } from 'lucide-react';

function Langchain() {
  return (
    <div>
      <h2>Langchain Projects</h2>
      <p className='mb-2 mt-2'>
      I developed a First Aid bot using Langchain, seamlessly integrating it with a Retrieval-Augmented Generation (RAG) application. The app leverages a FAISS database and BERT transformer to deliver fast, precise, and reliable responses, ensuring users receive accurate first aid information in real time. </p>
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
