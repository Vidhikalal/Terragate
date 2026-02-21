import Image from "next/image";
import Section from "@/components/Section";

const services = [
  {
    title: "End-to-end Export Solutions",
    desc: "From sourcing to final dispatch—handled professionally for global markets.",
  },
  {
    title: "Premium Quality Assurance",
    desc: "Verified suppliers + strict checks aligned to international standards.",
  },
  {
    title: "Documentation & Compliance",
    desc: "Smooth export procedures with accurate paperwork and coordination.",
  },
  {
    title: "Reliable Logistics",
    desc: "Efficient shipment planning and on-time deliveries.",
  },
  {
    title: "Custom Trade Solutions",
    desc: "Flexible services tailored to your market and buyer requirements.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/hero3.webp"
          alt="Warehouse logistics"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold text-white md:text-4xl">
            Our Services
          </h1>
        </div>
      </div>

      {/* Content */}
      <Section
        title="Services"
        subtitle="Everything you need for efficient and compliant global trade."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm font-semibold text-yellow-200">
                {s.title}
              </div>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
