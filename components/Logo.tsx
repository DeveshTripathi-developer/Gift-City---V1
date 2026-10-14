import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
}

export function Logo({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <Image
      src="/arwl-gift-city-logo.png"
      alt="Anand Rathi FME IFSC - Private Wealth. uncomplicated"
      width={2048}
      height={360}
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}

export default Logo;
