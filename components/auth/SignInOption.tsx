import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface SignInOptionProps {
  provider: 'google' | 'github' | 'microsoft';
  onClick: () => void;
  className?: string;
  variant?: 'default' | 'outline';
}

const providerConfig = {
  google: {
    logo: '/icons/google-logo.svg',
    text: 'Continue with Google',
    bgColor: {
      default: 'bg-white hover:bg-gray-50',
      dark: 'dark:bg-gray-800 dark:hover:bg-gray-700',
      text: 'text-gray-700 dark:text-gray-200',
      border: 'border border-gray-300 dark:border-gray-600'
    }
  },
  github: {
    logo: '/icons/github-logo.svg',
    text: 'Continue with GitHub',
    bgColor: {
        default: 'bg-white hover:bg-gray-50',
        dark: 'dark:bg-gray-800 dark:hover:bg-gray-700',
        text: 'text-gray-700 dark:text-gray-200',
        border: 'border border-gray-300 dark:border-gray-600'
      }
  },
  microsoft: {
    logo: '/icons/microsoft-logo.svg',
    text: 'Continue with Microsoft',
    bgColor: {
      default: 'bg-white hover:bg-gray-50',
      dark: 'dark:bg-gray-800 dark:hover:bg-gray-700',
      text: 'text-gray-700 dark:text-gray-200',
      border: 'border border-gray-300 dark:border-gray-600'
    }
  }
};

export const SignInOption: React.FC<SignInOptionProps> = ({ 
  provider, 
  onClick, 
  className = '',
  variant = 'default'
}) => {
  const config = providerConfig[provider];

  const baseClasses = `
    w-full flex items-center justify-center space-x-2 py-2 px-4 
    transition-colors duration-200
    ${config.bgColor.default}
    ${config.bgColor.dark}
    ${config.bgColor.text}
    ${config.bgColor.border}
    ${variant === 'outline' ? 'border opacity-90 hover:opacity-100' : ''}
  `;

  return (
    <Button
      variant={variant === 'default' ? 'default' : 'outline'}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      <Image 
        src={config.logo} 
        alt={`${provider} logo`} 
        width={24} 
        height={24} 
        className="mr-2"
      />
      <span className="font-medium">{config.text}</span>
    </Button>
  );
};