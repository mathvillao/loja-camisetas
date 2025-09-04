export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg bg-white/10 px-2 py-1 text-xs text-text">
      {children}
    </span>
  );
}

