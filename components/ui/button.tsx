import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[var(--apple-blue)]/30",
  {
    variants: {
      variant: {
        default: "bg-[var(--apple-blue)] text-white hover:opacity-90",
        secondary: "bg-[var(--card-bg)] text-[var(--ink)] border border-[var(--surface-border)] hover:bg-[var(--surface)] hover:border-[var(--apple-blue)]/40 hover:shadow-[0_0_0_3px_rgba(0,113,227,0.09),0_2px_8px_rgba(0,113,227,0.12)]"
      },
      size: {
        default: "min-h-11 px-6 py-2.5 text-sm",
        sm: "min-h-9 px-4 py-2 text-xs",
        lg: "min-h-[3rem] px-8 py-3 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
