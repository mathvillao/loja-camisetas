export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-card shadow-card p-6 border border-white/5">
      {children}
    </div>
  );
}

