"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { Rating } from "@/components/ui/Rating";

export default function Page() {
  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface to-card p-8 md:p-16 shadow-card border border-white/5">
        <motion.h1
          className="font-display text-5xl md:text-7xl text-[--color-text]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Matchday Premium
        </motion.h1>
        <p className="mt-4 text-[--color-text]/80">
          Camisetas oficiais e retrô — edição jogador e torcedor.
        </p>
        <Button className="mt-6">Ver lançamentos</Button>

        <motion.div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, #10B98155, transparent)" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </div>

      {/* CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center justify-between">
            <h3 className="text-lg">Corinthians Home 24/25</h3>
            <Badge>Novo</Badge>
          </div>
          <div className="mt-3 text-[--color-primary] font-semibold">R$ 399,90</div>
          <div className="mt-3 flex gap-2">
            <Chip active>S</Chip>
            <Chip>M</Chip>
            <Chip>L</Chip>
            <Chip>XL</Chip>
          </div>
          <div className="mt-3">
            <Rating value={4} />
          </div>
          <Button className="mt-4 w-full">Adicionar ao carrinho</Button>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <h3 className="text-lg">Flamengo Retrô 81</h3>
            <Badge>Clássico</Badge>
          </div>
          <div className="mt-3 text-[--color-primary] font-semibold">R$ 349,90</div>
          <Button variant="secondary" className="mt-4 w-full">
            Detalhes
          </Button>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <h3 className="text-lg">Brasil Home 24/25</h3>
            <Badge>Lançamento</Badge>
          </div>
          <div className="mt-3 text-[--color-primary] font-semibold">R$ 429,90</div>
          <Button variant="ghost" className="mt-4 w-full">
            Ver PDP
          </Button>
        </Card>
      </section>
    </div>
  );
}

