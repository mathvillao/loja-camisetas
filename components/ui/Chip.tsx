export function Chip({ active, children }: { active?: boolean; children: React.ReactNode }) {
  return (
    <button
      className={`px-3 py-1 rounded-xl text-sm ${
        active ? "bg-primary text-bg" : "bg-white/10 text-text"
      }`}
    >
      {children}
    </button>
  );
}

