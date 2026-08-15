import { portfolio } from "@/config/portfolio";

export function SpecializationsSection() {
  return (
    <section aria-label="Technical specializations" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl px-5 sm:px-8 md:grid-cols-3 lg:px-10">
        {portfolio.specializations.map((item, index) => (
          <article key={item.title} className="border-b border-border py-9 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
            <p className="font-mono text-[10px] text-muted-foreground">0{index + 1}</p>
            <h2 className="mt-8 text-xl font-semibold tracking-[-0.03em]">{item.title}</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
