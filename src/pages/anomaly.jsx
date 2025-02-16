import React from 'react';
import { Github } from 'lucide-react';

function anomaly() {
  return (
    <div>
      <h2 className='font-bold mb-2'>Anomaly Detection & Notification System</h2>
      <p className='mb-2 mt-2'>
      This project is designed to detect anomalies from an IP camera feed, save the anomaly frames, and send notifications via SMS using Twilio. Additionally, it serves the saved anomaly frames through a local HTTP server. The system is capable of processing real-time video feeds, identifying unusual patterns or behaviors, and alerting the appropriate authorities or stakeholders. This can be particularly useful in various applications such as surveillance, quality control, or predictive maintenance.
      </p>
      <p className='mt-1 mb-1'>
      The project leverages cutting-edge technologies including i3D Transformer, OpenCV, and TensorFlow.
      </p>
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
