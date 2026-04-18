import type { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionReveal({ children, className, id }: SectionRevealProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
