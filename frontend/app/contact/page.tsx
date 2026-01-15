import Section from "@/components/Section";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      subtitle="Send your requirement—we’ll respond quickly."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-yellow-200">Direct</div>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            <div>
              <span className="text-white/90">Phone:</span> {site.contact.phone}
            </div>
            <div>
              <span className="text-white/90">Email:</span> {site.contact.email}
            </div>
            <div className="text-white/60">{site.contact.address}</div>
          </div>
        </div>

        <form className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-3">
            <input
              className="w-full rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 focus:ring-yellow-400/40"
              placeholder="Full Name"
            />
            <input
              className="w-full rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 focus:ring-yellow-400/40"
              placeholder="Email"
            />
            <input
              className="w-full rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 focus:ring-yellow-400/40"
              placeholder="Phone (optional)"
            />
            <textarea
              rows={5}
              className="w-full rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 focus:ring-yellow-400/40"
              placeholder="Tell us what you want to import/export..."
            />
            <button
              type="button"
              className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition"
            >
              Submit
            </button>
            <p className="text-xs text-white/50">
              (Hook this form to email/CRM later—currently UI only.)
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
