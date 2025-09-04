import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import * as React from "react";

const button = cva(
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
  {
    variants: {
      variant: {
        primary: "bg-primary text-bg hover:bg-primary-600 shadow-neon",
        secondary: "bg-secondary text-white hover:opacity-90",
        ghost: "bg-transparent text-text hover:bg-surface",
      },
      size: { sm: "h-9", md: "h-10", lg: "h-12 text-base" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

export function Button({ className, variant, size, ...props }: Props) {
  return <button className={cn(button({ variant, size }), className)} {...props} />;
}

