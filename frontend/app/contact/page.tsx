import Section from "@/components/Section";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      subtitle="Send your requirement—we’ll respond quickly."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* LEFT INFO CARD */}
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

        {/* FORM */}
        <form
          action="https://formsubmit.co/terragateglobal@gmail.com"
          method="POST"
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          {/* hidden config */}
          <input
            type="hidden"
            name="_subject"
            value="New Website Contact Submission"
          />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/contact?sent=1"
          />

          <div className="grid gap-3">
            <input
              name="name"
              className="w-full rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 focus:ring-yellow-400/40"
              placeholder="Full Name"
              required
            />

            <input
              name="email"
              type="email"
              className="w-full rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 focus:ring-yellow-400/40"
              placeholder="Email"
              required
            />

            <input
              name="phone"
              className="w-full rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 focus:ring-yellow-400/40"
              placeholder="Phone (optional)"
            />

            <textarea
              name="message"
              rows={5}
              className="w-full rounded-xl bg-black/30 p-3 text-sm outline-none ring-1 ring-white/10 focus:ring-yellow-400/40"
              placeholder="Tell us what you want to import/export..."
              required
            />

            <button
              type="submit"
              className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition"
            >
              Submit
            </button>

            <p className="text-xs text-white/50">
              We’ll get back to you within 24 hours.
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
