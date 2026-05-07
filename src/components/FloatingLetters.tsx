const LETTERS = ["अ", "आ", "क", "म", "श", "ब", "द", "ह", "स", "र", "ज", "त", "ल", "न", "ओ", "इ"];

export function FloatingLetters({ density = 14 }: { density?: number }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {Array.from({ length: density }).map((_, i) => {
        const letter = LETTERS[i % LETTERS.length];
        const left = (i * 67) % 100;
        const top = (i * 43) % 100;
        const size = 60 + ((i * 17) % 120);
        const delay = (i * 0.7) % 8;
        const duration = 10 + ((i * 3) % 8);
        return (
          <span
            key={i}
            className="absolute font-hindi-display text-maroon animate-float-slow select-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity: 0.07,
            }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
}
