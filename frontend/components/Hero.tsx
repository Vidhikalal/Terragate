import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grain">
      <div className="absolute inset-0">
        <Image
          src="/hero1.jpg"
          alt="Global shipping"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/70 to-neutral-950" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs text-yellow-200">
            Import • Export • Sourcing • Logistics
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            {site.name}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
            {site.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition"
            >
              Explore Products
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Our Services
            </Link>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              "Premium Quality",
              "Seamless Documentation",
              "Reliable Logistics",
            ].map((t) => (
              <div key={t} className="glass rounded-2xl p-4">
                <div className="text-sm font-semibold">{t}</div>
                <div className="mt-1 text-xs text-white/60">
                  Built for international standards and on-time delivery.
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
