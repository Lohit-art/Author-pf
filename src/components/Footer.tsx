import React, { useState } from 'react';
import { Heart, Mail, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const email = 'shanmukhee@snimmaauthorhub.net';

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  
  return (
    <footer className="bg-neutral-100 py-8 border-t border-neutral-200">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-serif text-xl font-medium text-neutral-800 hover:text-primary-600 transition-colors">
              S.Nimma
            </Link>
            <p className="text-neutral-600 mt-2 text-sm md:text-base">
              Author of "Curled Crystal"
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative group">
              <a
                href={`mailto:${email}`}
                onClick={handleCopy}
                className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors cursor-pointer"
                aria-label="Email"
              >
                <Mail size={18} className="mr-2" />
                <span>Contact</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-3 py-1 rounded bg-neutral-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity select-all z-20 shadow-lg pointer-events-none">
                  {copied ? 'Copied!' : email}
                </span>
              </a>
            </div>
            <Link 
              to="/book" 
              className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors"
              aria-label="Book"
            >
              <BookOpen size={18} className="mr-2" />
              <span>Book</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-neutral-200 text-center text-neutral-600 text-sm flex flex-col md:flex-row md:justify-between items-center">
          <p>© {currentYear} S.Nimma. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <Heart size={14} className="mx-1 text-accent-500" /> for mental health awareness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;