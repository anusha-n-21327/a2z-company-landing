import { Infinity } from "lucide-react";

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} /> 
            <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <Infinity className={className} style={{ stroke: "url(#logo-gradient)" }} />
    </>
  );
};