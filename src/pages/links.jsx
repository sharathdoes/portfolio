import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Github, Instagram } from 'lucide-react';

function Links() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.instagram.com/sharath_7693/" target="_blank" rel="noopener noreferrer">
            <SocialIcon fgColor="#fff" bgColor="#E4405F" className="mr-3 mb-2" />
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sharath-chandra-gaddam-851a45263/" target="_blank" rel="noopener noreferrer">
            <SocialIcon fgColor="#fff" bgColor="#0077B5" className="mr-3 mb-2" />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/sharathdoes" target="_blank" rel="noopener noreferrer">
            <SocialIcon fgColor="#fff" bgColor="#333" className="mr-3 mb-2" />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/sharath7693" target="_blank" rel="noopener noreferrer">
            <SocialIcon fgColor="#fff" bgColor="#FFA116" className="mr-3 mb-2" />
            LeetCode
          </a>
        </li>
       
      </ul>
    </div>
  );
}

export default Links;
