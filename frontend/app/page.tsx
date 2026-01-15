import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductGrid from "@/components/ProductGrid";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

const stats = [
  { label: "Trusted Export Partner", value: "India → Global" },
  { label: "Product Categories", value: "Agro • Sanitary • Surgical" },
  { label: "Quality Checks", value: "Strict & Standardized" },
  { label: "Logistics", value: "On-time Delivery" },
];

const steps = [
  {
    title: "Share Requirements",
    desc: "Tell us product specs, quantity, destination, and deadlines.",
  },
  {
    title: "Sourcing & Verification",
    desc: "We shortlist reliable suppliers and confirm quality standards.",
  },
  {
    title: "Documentation & Compliance",
    desc: "We handle export documentation and coordinate approvals.",
  },
  {
    title: "Dispatch & Logistics",
    desc: "We arrange shipment and keep you updated until delivery.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        title="Introduction"
        subtitle="Trusted merchant exporter from India, connecting manufacturers with international buyers."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {/* Intro */}
          <div className="glass card-hover rounded-2xl p-6">
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              We deliver high-quality agro products, fresh produce, sanitary
              ware, and surgical supplies to global markets with a strong focus
              on quality, reliability, and seamless trade.
            </p>

            {/* Quick Stats */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {stats.map((s) => (
                <div key={s.label} className="glass card-hover rounded-xl p-4">
                  <div className="text-xs text-white/60">{s.label}</div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="glass card-hover rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-cyan-200">
                Why Choose Us
              </div>
              <div className="h-8 w-8 rounded-full bg-cyan-400/10 ring-1 ring-cyan-300/20" />
            </div>

            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {site.whyChooseUs.slice(0, 6).map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-teal-300" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Our Products"
        subtitle="Core categories we export for international markets."
      >
        <ProductGrid />
      </Section>

      <Section
        title="How We Work"
        subtitle="A smooth, transparent export process from sourcing to delivery."
      >
        <div className="grid gap-5 md:grid-cols-4">
          {steps.map((s, idx) => (
            <div key={s.title} className="glass card-hover rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-200 ring-1 ring-cyan-300/20">
                  {idx + 1}
                </div>
                <div className="text-sm font-semibold text-white">
                  {s.title}
                </div>
              </div>
              <p className="mt-3 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Technology Integration"
        subtitle="Real-time visibility, smarter coordination, smoother exports."
      >
        <div className="glass card-hover rounded-2xl p-6 text-sm leading-relaxed text-white/75 md:text-base">
          We integrate digital documentation systems, real-time logistics
          tracking, and data-driven coordination to improve efficiency, ensure
          compliance, and provide seamless supply chain visibility.
        </div>
      </Section>

      <Section
        title="Sustainability Commitment"
        subtitle="Responsible trade with ethical sourcing and resource efficiency."
      >
        <div className="glass card-hover rounded-2xl p-6 text-sm leading-relaxed text-white/75 md:text-base">
          We work closely with ethical suppliers, promote efficient use of
          resources, and follow environmentally conscious processes across
          sourcing, packaging, and logistics—supporting global sustainability
          standards.
        </div>
      </Section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <CTA />
      </section>
    </>
  );
}
