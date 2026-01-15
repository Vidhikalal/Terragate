import Image from "next/image";
import Section from "@/components/Section";
import ProductGrid from "@/components/ProductGrid";

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh]">
        <Image
          src="/hero2.jpg"
          alt="Agro export products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Our Products</h1>
        </div>
      </div>

      <Section title="Export Categories">
        <ProductGrid />
      </Section>
    </>
  );
}
