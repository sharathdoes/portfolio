import React from 'react'
import { Github } from 'lucide-react';

function Os() {
  return (
    <div >
      <h2 className="mb-4">Operating System Chatbot</h2>
      <p className="mb-4" >This project leverages the capabilities of LLaMA 3.2 and RAG to create a comprehensive chatbot that can assist users with various operating system-related queries. The integration with the FAISS database ensures efficient and accurate information retrieval.</p>
      <p>
        Check out the project on my <a href="https://github.com/sharathdoes/PDF-to-chatbot-using-RAG-Langchain" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a>.
      </p>
    </div>
  )
}

export default Os