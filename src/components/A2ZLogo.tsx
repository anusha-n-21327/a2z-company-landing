export const A2ZLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 40"
      xmlns="http://www.w3.org/2000/svg"
      fill="url(#logo-gradient)"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#a855f7' }} />
          <stop offset="50%" style={{ stopColor: '#3b82f6' }} />
          <stop offset="100%" style={{ stopColor: '#ec4899' }} />
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