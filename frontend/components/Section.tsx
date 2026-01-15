type SectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-white/65">{subtitle}</p> : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
