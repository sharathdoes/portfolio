import React from 'react';
import { Github } from 'lucide-react';

function anomaly() {
  return (
    <div>
      <h2>Tenserflow Project</h2>
      <p className='mb-2'>
      This project is designed to detect anomalies from an IP camera feed, save the anomaly frames, and send notifications via SMS using Twilio. Additionally, it serves the saved anomaly frames through a local HTTP server.</p>
      <p>
        Check out the projects on my  <a href="https://github.com/sharathdoes/Anomaly-Detection-and-Notification-System" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a>.
      </p>
    </div>
  );
}

export default anomaly;
