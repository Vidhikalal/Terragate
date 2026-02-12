import Image from "next/image";
import Section from "@/components/Section";

const products = [
  {
    title: "Rice (Basmati & Non-Basmati)",
    img: "/rice.png",
    desc: "Premium export-quality rice sourced from trusted Indian farms. Available in bulk packaging with strict quality checks and global shipping support.",
  },
  {
    title: "Cumin Seeds (Jeera)",
    img: "/cumin.png",
    desc: "High-grade cumin seeds with strong aroma and purity. Ideal for international spice markets with custom packaging options.",
  },
  {
    title: "Fresh Pomegranates",
    img: "/pomegranate.png",
    desc: "Farm-fresh pomegranates packed with care for long-distance export. Quality sorting and cold-chain logistics supported.",
  },
  {
    title: "Sanitary Ware",
    img: "/sanitry.png",
    desc: "Modern sanitary ware including toilets, basins, and fittings. Export-ready with safe packaging and container shipping.",
  },
  {
    title: "Tiles & Ceramics",
    img: "/tiles.png",
    desc: "Durable floor and wall tiles with premium finish. Available in multiple sizes and export packaging.",
  },
  {
    title: "Surgical Products",
    img: "/surgical.png",
    desc: "Medical and surgical products manufactured to international standards with reliable global distribution.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative h-[50vh]">
        <Image
          src="/hero-2.jpg"
          alt="Products hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Our Products</h1>
        </div>
      </div>

      {/* GRID */}
      <Section
        title="Export Categories"
        subtitle="High-quality products sourced and delivered to global markets."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.title}
              className="glass card-hover overflow-hidden rounded-2xl"
            >
              <div className="relative h-52">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-cyan-200">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-white/70">{p.desc}</p>

                <button className="mt-4 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-300 transition">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
