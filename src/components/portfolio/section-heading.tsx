export function SectionHeading({
  index,
  label,
  title,
  description,
  inverted = false,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
  inverted?: boolean;
}) {
  return (
    <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1fr_2.15fr]">
      <div className={`flex items-start gap-4 font-mono text-[11px] uppercase tracking-[0.12em] ${inverted ? "text-black/55" : "text-muted-foreground"}`}>
        <span>{index}</span>
        <span>{label}</span>
      </div>
      <div>
        <h2 className={`max-w-4xl text-balance text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl sm:leading-[1.02] sm:tracking-[-0.055em] ${inverted ? "text-black" : "text-foreground"}`}>
          {title}
        </h2>
        {description ? (
          <p className={`mt-5 max-w-2xl text-sm leading-6 sm:mt-6 sm:text-base sm:leading-7 ${inverted ? "text-black/60" : "text-muted"}`}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
