export function Rating({ value = 0, outOf = 5 }: { value?: number; outOf?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Avaliação: ${value} de ${outOf}`}>
      {Array.from({ length: outOf }).map((_, i) => (
        <span key={i}>{i < value ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

