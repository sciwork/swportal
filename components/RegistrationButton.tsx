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
        style={{
          backgroundColor: "#3BA55D",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold"
        }}
      >
        {text}
      </button>
    </a>
  );
}
