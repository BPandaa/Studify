import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-amber-950 text-amber-100 py-6">
      <div className="max-w-4xl mx-auto px-4">
        {/* Logo and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
            </svg>
            <span className="ml-2 text-lg font-bold">Studify</span>
          </div>
          
          <div className="text-sm text-amber-400">
            &copy; {currentYear} StudentSuccess. All rights reserved.
          </div>
          
        </div>
        
        {/* Links */}
        <div className="mt-4 flex justify-center">
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-amber-300 hover:text-amber-100">About</a>
            <a href="#" className="text-amber-300 hover:text-amber-100">Resources</a>
            <a href="#" className="text-amber-300 hover:text-amber-100">Contact</a>
            <a href="#" className="text-amber-300 hover:text-amber-100">Privacy</a>
            <a href="#" className="text-amber-300 hover:text-amber-100">Terms</a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;