import Link from "next/link";

export default function CTA() {
  return (
    <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-8 md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold md:text-2xl">
            Ready to export with confidence?
          </h3>
          <p className="mt-2 text-white/70">
            Tell us your requirement—we’ll handle sourcing, documentation, and
            logistics.
          </p>
        </div>
        <Link
          href="/contact"
          className="w-fit rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
