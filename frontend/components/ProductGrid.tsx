import { site } from "@/lib/site";

type CardProps = {
  title: string;
  items: string[];
};

function Card({ title, items }: CardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-sm font-semibold text-yellow-200">{title}</div>

      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-yellow-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProductGrid() {
  // ✅ Defensive fallback (prevents runtime crash)
  const products = site?.products ?? {
    agro: [],
    sanitary: [],
    surgical: [],
  };

  return (
    <div className="grid gap-5 md:grid-cols-3">
      <Card title="Agro & Fresh Produce" items={products.agro} />
      <Card title="Sanitary Ware" items={products.sanitary} />
      <Card title="Surgical Products" items={products.surgical} />
    </div>
  );
}
