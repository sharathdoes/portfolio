import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Github, Instagram } from 'lucide-react';

function Links() {
  return (
    <div>
      <ul>
        <li>
          <SocialIcon url="https://www.instagram.com/sharath_7693/" fgColor="#fff" bgColor="#E4405F" className="mr-3 mb-2" />
          Instagram
        </li>
        <li>
          <SocialIcon url="https://www.linkedin.com/in/sharath-chandra-gaddam-851a45263/" fgColor="#fff" bgColor="#0077B5" className="mr-3 mb-2" />
          LinkedIn
        </li>
        <li>
          <SocialIcon url="https://github.com/sharathdoes" fgColor="#fff" bgColor="#333" className="mr-3 mb-2" />
          GitHub
        </li>
        <li>
          <SocialIcon url="https://leetcode.com/sharath7693" fgColor="#fff" bgColor="#FFA116" className="mr-3 mb-2" />
          LeetCode
        </li>
       
      </ul>
    </div>
  );
}

export default Links;
