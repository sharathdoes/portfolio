import React from 'react';

function Highlights() {
  return (
    <div className="highlights-container mb-2">
      <h2 className="highlights-title mb-2 font-bold">My Highlights</h2>
      <ul className="highlights-list mb-2">
        <li className="highlights-item mb-2">Was the technical lead of Designathon, a 24-hour national level hackathon.</li>
        <hr className="mb-2" />
        <li className="highlights-item mb-2">Proficient in React.js, Node.js, Express, MongoDB, and exploring Langchain, NLP, RAG, and Vector databases like FAISS and chroma.</li>
        <hr className="mb-2" />
        <li className="highlights-item mb-2">Awarded first place in the Yukthi Hackathon for developing an obscenity Filter Extension.</li>
        <hr className="mb-2" />
        <li className="highlights-item mb-2">Recognized as the winner of the Skykhar Webathon for creating a web application that supports farmers.</li>
        <hr className="mb-2" />
        <li className="highlights-item mb-2">Experienced in coding languages such as C++ and Java, with a LeetCode rating of 1660.</li>
      </ul>
    </div>
  );
}

export default Highlights;
