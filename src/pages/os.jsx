import React from 'react'
import { Github } from 'lucide-react';
import image from '../assets/image.png';

function Os() {
  return (
    <div>
      <h2 className="mb-4 font-bold">Text-to-SQL using RAG (live <a href="https://huggingface.co/spaces/Sharath7693/text2sql_rag" target="_blank" rel="noopener noreferrer">here</a>)</h2>
      <img src={image} alt="Project Image" className="w-full h-auto rounded-lg object-cover" />
      <p className="mb-4">This project utilizes Retrieval-Augmented Generation (RAG) with NeonDB and a vector store to efficiently store schemas and retrieve relevant information for generating SQL queries from natural language inputs.</p>
    </div>
  )
}

export default Os;
