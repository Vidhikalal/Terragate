import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section
      title="About Us"
      subtitle="A trusted merchant exporter focused on quality, reliability, and seamless trade."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/75">
          <h3 className="text-lg font-semibold text-white">Who we are</h3>
          <p className="mt-3">
            We connect manufacturers with international buyers efficiently and
            professionally, delivering high-quality products with smooth
            documentation and dependable logistics.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/75">
          <h3 className="text-lg font-semibold text-white">Mission</h3>
          <p className="mt-3">
            To provide world-class export solutions by supplying high-quality
            agricultural products, fresh produce, sanitary ware, and surgical
            products—building long-term partnerships through transparency and
            performance.
          </p>
        </div>
      </div>
    </Section>
  );
}
