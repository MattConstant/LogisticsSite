import React from 'react';
import { Footer } from 'flowbite-react';

export function FooterComponent() {
  return (
    <div> 

      <style> 
        {`
        .Footer {
          padding: 2rem;
          background-color: #f5f5f5;
          border: 2px solid #e5e5e5;
          display: flex;
          justify-content: space-around;
        }
        .p {
          max-width: 200px;
        }
        `}
        </style>

    <Footer className='Footer'>
      <div>
        <h2>Contact</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
      </div>
      <div>
        <h2>About Us</h2>
        <div className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
    </Footer>
    </div>
  );
}