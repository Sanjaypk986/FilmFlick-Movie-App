import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-500 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="#" className="mx-2 hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="mx-2 hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="mx-2 hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          <a href="#" className="mx-2 hover:text-gray-400"><i className="fab fa-youtube"></i></a>
        </div>

        <div>
          <p className='text-sm md-text-md text-gray-200'>&copy; 2024 Movie Booking App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
