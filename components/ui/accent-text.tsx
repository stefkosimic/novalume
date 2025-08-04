interface AccentTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AccentText({ children, className = "" }: AccentTextProps) {
  return (
    <span className={`text-primary font-semibold ${className}`}>
      {children}
    </span>
  );
}
