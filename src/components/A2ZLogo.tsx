export const A2ZLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 40"
      xmlns="http://www.w3.org/2000/svg"
      fill="url(#logo-gradient-cyber)"
    >
      <defs>
        <linearGradient id="logo-gradient-cyber" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff00ff' }} />
          <stop offset="100%" style={{ stopColor: '#00ffff' }} />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="30"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="bold"
      >
        A2Z
      </text>
    </svg>
  );
};