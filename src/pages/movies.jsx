import React from 'react';
import image1 from '../assets/image.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import { ScrollArea } from '../components/ui/scroll-area'; // Assuming you're using ShadCN for scroll area

function Movies() {
  return (
    <div className="movies-container ">
      <ScrollArea className="h-96 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="image-item">
            <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg object-cover" />
          </div>
          {/* Image 2 */}
          <div className="image-item">
            <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg object-cover" />
          </div>
          {/* Image 3 */}
          <div className="image-item">
            <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg object-cover" />
          </div>
          {/* Image 4 */}
          <div className="image-item">
            <img src={image4} alt="Image 4" className="w-full h-auto rounded-lg object-cover" />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

export default Movies;
