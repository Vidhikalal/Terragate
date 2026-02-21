import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">{site.name}</div>
          <p className="mt-2 text-sm text-white/60">{site.description}</p>
        </div>

        <div>
          <div className="text-sm font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a className="hover:text-white" href={n.href}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Contact</div>
          <div className="mt-3 space-y-2 text-sm text-white/70">
            <div>{site.contact.phone}</div>
            <div>{site.contact.email}</div>
            <div className="text-white/60">{site.contact.address}</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
