"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";

export default function Page() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[--color-surface] to-[--color-card] p-8 md:p-16 shadow-card border border-white/5">
        <motion.h1
          className="font-[var(--font-bebas)] leading-none text-[3rem] md:text-[5rem]"
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        >
          MATCHDAY PREMIUM
        </motion.h1>
        <p className="mt-3 text-[--color-text]/80">
          Camisetas oficiais e retrô — edição jogador e torcedor.
        </p>
        <Button className="mt-6">Ver lançamentos</Button>
        <motion.div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, #10B98155, transparent)" }}
          animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6 }}
        />
      </section>

      {/* GRID DE PRODUTOS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCard
          title="Corinthians Home 24/25"
          price="R$ 399,90"
          badge="Novo"
          img="/mock/corinthians-2425.jpg"
        />
        <ProductCard
          title="Flamengo Retrô 81"
          price="R$ 349,90"
          badge="Clássico"
          img="/mock/flamengo-81.jpg"
        />
        <ProductCard
          title="Brasil Home 24/25"
          price="R$ 429,90"
          badge="Lançamento"
          img="/mock/brasil-2425.jpg"
        />
      </section>
    </div>
  );
}

