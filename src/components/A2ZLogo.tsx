export const A2ZLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient-new" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00ffff' }} />
          <stop offset="100%" style={{ stopColor: '#ff00ff' }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" stroke="url(#logo-gradient-new)" strokeWidth="5" fill="none" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="url(#logo-gradient-new)"
      >
        A2Z
      </text>
    </svg>
  );
};