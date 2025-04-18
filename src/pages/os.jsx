import React from 'react'
import { Github } from 'lucide-react';
import image from '../assets/image.png';

function Os() {
  return (
    <div>
      <h2 className="mb-4 font-bold">Text-to-SQL using RAG (live <a href="https://huggingface.co/spaces/Sharath7693/text2sql_rag" target="_blank" rel="noopener noreferrer">here</a>)</h2>
      <img src={image} alt="Project Image" className="w-full h-auto rounded-lg object-cover" />
      <p className="mb-4 mt-2 ">This project implements a Text-to-SQL system leveraging Retrieval-Augmented Generation (RAG). It takes a user's database schema as context, stores it efficiently in a vector store (using NeonDB), and then uses this contextual information to accurately translate natural language questions into executable SQL queries.</p>
    </div>
  )
}

export default Os;