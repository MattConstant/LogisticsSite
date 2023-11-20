import React from 'react';
import { Footer } from 'flowbite-react';

export function FooterComponent() {
  return (
    <div> 
      <style> 
        {`
        .Footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1rem; /* Reduced padding on mobile for space efficiency */
          background-color: #f5f5f5;
          border-top: 2px solid #e5e5e5; /* Changed to border-top for better mobile appearance */
          display: flex;
          justify-content: space-around;
          z-index: 10;
          transition: padding 0.2s; /* Smooth transition for padding changes */
        }
        .p {
          max-width: 200px;
        }
        /* Responsive adjustments for landscape mode */
        @media (orientation: landscape) {
          .Content {
            padding-bottom: 4rem; /* Assuming the footer height is about 4rem */
          }
          .Footer {
            position: relative;
          }
        }
        /* Adjustments for mobile devices */
        @media (max-width: 767px) { /* Mobile breakpoint */
          .Content {
            padding-bottom: 3rem; /* Adjust to the height of your mobile footer */
          }
          .Footer {
            position: relative; /* Optional: Change to relative if overlap occurs */
          }
        }
        `}
      </style>

      {/* Placeholder for your main content, adjust the className to match your actual content container */}
      <div className="Content">
        {/* Your main content goes here */}
      </div>

      <Footer className='Footer'>
        <div>
          <h2>Contact</h2>
          <p>Phone: (613) 804-6000</p>
          <p>Email: marquismainville@gmail.com</p>
        </div>
        <div>
          <h2>About Us</h2>
          <div className='p'>At Focus Logistics, we're committed to unlocking the potential of your supply chain.our mission is to provide tailored logistics services that ensure your products are delivered reliably</div>
        </div>
      </Footer>
    </div>
  );
}
