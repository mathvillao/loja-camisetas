"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [q, setQ] = useState("");

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[--color-bg]/70 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-3">
        <Link href="/" className="font-[var(--font-bebas)] text-2xl tracking-wide">
          MATCHDAY
        </Link>

        {/* Busca */}
        <form
          action="/products"
          className="hidden sm:flex items-center ml-3 flex-1 max-w-md"
        >
          <input
            name="q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar clubes, seleções, temporadas…"
            className="w-full rounded-xl bg-[--color-surface] text-[--color-text] placeholder:text-[--color-text]/60 px-3 py-2 border border-white/10 outline-none"
          />
        </form>

        {/* Navegação */}
        <nav className="ml-auto flex items-center gap-4 text-sm text-[--color-text]/80">
          <Link href="/products?tag=lancamentos" className="hover:text-[--color-text]">Lançamentos</Link>
          <Link href="/products?tag=retro" className="hover:text-[--color-text]">Retrô</Link>
          <Link href="/products?tag=clubes" className="hover:text-[--color-text]">Clubes</Link>
          <Link href="/account" className="hover:text-[--color-text]">Minha conta</Link>
        </nav>
      </div>
    </header>
  );
}

