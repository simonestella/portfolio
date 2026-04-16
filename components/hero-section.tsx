import { SectionReveal } from "@/components/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <SectionReveal className="mb-20 pt-6 sm:mb-28 sm:pt-10">
      <div className="glass-card hero-glass p-6 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-8 sm:gap-10">
          <div className="shrink-0">
            <Badge
              variant="secondary"
              className="relative z-10 px-4 py-1.5 text-[13px] font-medium tracking-wide shadow-sm"
            >
              AI Engineer Portfolio
            </Badge>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:items-start">
            <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
              <h1 className="max-w-[22ch] text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
                Costruisco prodotti intelligenti con codice pulito, design chiaro
                e attenzione al dettaglio.
              </h1>

              <p className="max-w-xl text-[15px] leading-relaxed text-[#515154] sm:text-lg sm:leading-[1.55]">
                Seleziono stack moderni e scelte architetturali pragmatiche per
                sviluppare esperienze solide in ambito IA, Java e Web.
              </p>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Button type="button" size="lg" className="w-full sm:w-auto">
                  Contattami
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  className="w-full border border-[#d2d2d7]/90 bg-white/90 text-[#1d1d1f] shadow-sm hover:bg-white sm:w-auto"
                >
                  Vedi progetti
                </Button>
              </div>
            </div>

            <aside className="flex min-w-0 flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-2xl bg-white/80 px-5 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06]">
                  <p className="text-[13px] font-medium text-[#6e6e73]">
                    Progetti
                  </p>
                  <p className="mt-2 text-3xl font-semibold tabular-nums tracking-tight text-[#1d1d1f]">
                    12+
                  </p>
                </div>
                <div className="rounded-2xl bg-white/80 px-5 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06]">
                  <p className="text-[13px] font-medium text-[#6e6e73]">
                    Stack
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug text-[#1d1d1f]">
                    IA / Java / Web
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#0071e3]/[0.12] via-white/60 to-white/90 px-5 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-[#0071e3]/15">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6e6e73]">
                  Focus
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-[#1d1d1f]">
                  UX moderna, performance e codice manutenibile.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
