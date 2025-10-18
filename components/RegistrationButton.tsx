import React from 'react';

interface RegistrationButtonProps {
  url: string;
  text?: string;
  className?: string;
}

export default function RegistrationButton({ 
  url, 
  text = "Register Now",
  className = ""
}: RegistrationButtonProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={className}
    >
      <button 
        className="bg-[#3BA55D] text-white px-5 py-2.5 border-0 rounded-md cursor-pointer text-base font-bold hover:bg-[#2d7a3f] transition-colors duration-200"
      >
        {text}
      </button>
    </a>
  );
}
