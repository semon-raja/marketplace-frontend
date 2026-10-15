import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Smartphone,
  Shirt,
  House,
  Sparkles,
  Store,
  Search,
  Leaf,
  BadgeCheck,
  LayoutGrid,
  ArrowUpRight,
} from "lucide-react";

// ─── Neighbourhood illustration data ─────────────────────────────────────────
// Positions are expressed as Tailwind/inline-style percentages within the
// illustration container. This is purely a conceptual, decorative illustration —
// it does not reflect real locations or real-time data.

const storeNodes = [
  {
    id: "electronics",
    label: "SoundHub",
    sublabel: "Electronics",
    icon: Smartphone,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    dotColor: "bg-blue-500",
    pillBg: "bg-blue-50 border-blue-200",
    pillText: "text-blue-800",
    // position within the illustration SVG viewport (roughly)
    top: "8%",
    left: "5%",
  },
  {
    id: "fashion",
    label: "Footwear Studio",
    sublabel: "Fashion",
    icon: Shirt,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    dotColor: "bg-orange-400",
    pillBg: "bg-orange-50 border-orange-200",
    pillText: "text-orange-800",
    top: "5%",
    left: "64%",
  },
  {
    id: "home",
    label: "Living Space",
    sublabel: "Home & Furniture",
    icon: House,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    dotColor: "bg-emerald-500",
    pillBg: "bg-emerald-50 border-emerald-200",
    pillText: "text-emerald-800",
    top: "62%",
    left: "4%",
  },
  {
    id: "beauty",
    label: "Glow Botanicals",
    sublabel: "Beauty & Care",
    icon: Sparkles,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-700",
    dotColor: "bg-pink-400",
    pillBg: "bg-pink-50 border-pink-200",
    pillText: "text-pink-800",
    top: "65%",
    left: "62%",
  },
];

// ─── Benefits strip data ──────────────────────────────────────────────────────

const benefits = [
  {
    id: "discover",
    icon: Search,
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    title: "Discover Nearby Products",
    desc: "Browse items from stores in your neighbourhood, all in one place.",
  },
  {
    id: "categories",
    icon: LayoutGrid,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    title: "Shop Across Categories",
    desc: "Electronics, fashion, home, beauty — every category covered.",
  },
  {
    id: "local",
    icon: Leaf,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    title: "Support Local Businesses",
    desc: "Every order helps a neighbourhood store thrive.",
  },
];

// ─── Neighbourhood Map Illustration ──────────────────────────────────────────

function NeighbourhoodMap() {
  return (
    <div
      className="relative w-full select-none overflow-hidden rounded-3xl border border-green-100 bg-gradient-to-br from-[#f0f7f2] via-[#faf9f6] to-[#eef4fb] p-2 shadow-inner"
      style={{ aspectRatio: "4/3" }}
      aria-hidden="true"
    >
      {/* ── Street grid SVG ──────────────────────────────────────── */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Road grid — muted warm-grey */}
        <line x1="0" y1="150" x2="400" y2="150" stroke="#d1ccc4" strokeWidth="6" strokeLinecap="round" />
        <line x1="200" y1="0" x2="200" y2="300" stroke="#d1ccc4" strokeWidth="6" strokeLinecap="round" />
        <line x1="0" y1="75"  x2="400" y2="75"  stroke="#e0dbd2" strokeWidth="2.5" strokeDasharray="8 6" />
        <line x1="0" y1="225" x2="400" y2="225" stroke="#e0dbd2" strokeWidth="2.5" strokeDasharray="8 6" />
        <line x1="100" y1="0" x2="100" y2="300" stroke="#e0dbd2" strokeWidth="2.5" strokeDasharray="8 6" />
        <line x1="300" y1="0" x2="300" y2="300" stroke="#e0dbd2" strokeWidth="2.5" strokeDasharray="8 6" />

        {/* Connecting paths from centre hub to each store node */}
        {/* Electronics — top-left */}
        <line x1="200" y1="150" x2="68" y2="50" stroke="#16a34a" strokeWidth="1.8" strokeDasharray="5 4" strokeOpacity="0.55" />
        {/* Fashion — top-right */}
        <line x1="200" y1="150" x2="286" y2="42" stroke="#f97316" strokeWidth="1.8" strokeDasharray="5 4" strokeOpacity="0.55" />
        {/* Home — bottom-left */}
        <line x1="200" y1="150" x2="70" y2="222" stroke="#10b981" strokeWidth="1.8" strokeDasharray="5 4" strokeOpacity="0.55" />
        {/* Beauty — bottom-right */}
        <line x1="200" y1="150" x2="282" y2="232" stroke="#ec4899" strokeWidth="1.8" strokeDasharray="5 4" strokeOpacity="0.55" />

        {/* Decorative blocks — city texture */}
        <rect x="10"  y="10"  width="72" height="44" rx="6" fill="#e8f5ee" fillOpacity="0.7" />
        <rect x="318" y="10"  width="72" height="44" rx="6" fill="#fff3e8" fillOpacity="0.7" />
        <rect x="10"  y="200" width="72" height="44" rx="6" fill="#e8f5ee" fillOpacity="0.7" />
        <rect x="318" y="200" width="72" height="44" rx="6" fill="#fce8f3" fillOpacity="0.7" />
        {/* Tiny building details */}
        <rect x="22"  y="19" width="12" height="8"  rx="2" fill="#16a34a" fillOpacity="0.25" />
        <rect x="38"  y="19" width="12" height="8"  rx="2" fill="#16a34a" fillOpacity="0.18" />
        <rect x="54"  y="19" width="20" height="28" rx="2" fill="#16a34a" fillOpacity="0.12" />
        <rect x="330" y="19" width="20" height="28" rx="2" fill="#f97316" fillOpacity="0.15" />
        <rect x="354" y="19" width="12" height="8"  rx="2" fill="#f97316" fillOpacity="0.22" />
        <rect x="22"  y="209" width="12" height="8" rx="2" fill="#10b981" fillOpacity="0.25" />
        <rect x="38"  y="209" width="20" height="20" rx="2" fill="#10b981" fillOpacity="0.14" />
        <rect x="330" y="209" width="20" height="28" rx="2" fill="#ec4899" fillOpacity="0.14" />
        <rect x="354" y="209" width="12" height="8"  rx="2" fill="#ec4899" fillOpacity="0.22" />

        {/* Tree / park dots */}
        <circle cx="145" cy="100" r="7" fill="#bbf7d0" />
        <circle cx="155" cy="100" r="5" fill="#86efac" fillOpacity="0.7" />
        <circle cx="258" cy="100" r="7" fill="#bbf7d0" />
        <circle cx="268" cy="100" r="5" fill="#86efac" fillOpacity="0.7" />
        <circle cx="145" cy="200" r="7" fill="#bbf7d0" />
        <circle cx="258" cy="200" r="7" fill="#bbf7d0" />
      </svg>

      {/* ── Central LocalMarket hub ─────────────────────────────── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Outer pulse ring */}
        <span className="absolute inset-0 -m-3 animate-ping rounded-full bg-green-300 opacity-20 [animation-duration:2.8s] motion-reduce:animate-none" />
        {/* Hub pill */}
        <div className="relative flex flex-col items-center gap-0.5 rounded-2xl border-2 border-green-600 bg-white px-3 py-2 shadow-lg">
          <Store size={20} className="text-green-700" />
          <span className="whitespace-nowrap text-[10px] font-black tracking-wide text-green-800">
            LocalMarket
          </span>
          {/* Location pin underneath */}
          <MapPin size={10} className="text-green-500" />
        </div>
      </div>

      {/* ── Store node markers ──────────────────────────────────── */}
      {storeNodes.map(({ id, label, sublabel, icon: Icon, iconBg, iconColor, dotColor, pillBg, pillText, top, left }) => (
        <div
          key={id}
          className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:-translate-y-[calc(50%+4px)] motion-reduce:transition-none"
          style={{ top, left }}
        >
          {/* Store card */}
          <div className={`flex items-center gap-1.5 rounded-xl border px-2 py-1.5 shadow-sm backdrop-blur-sm ${pillBg}`}>
            <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
              <Icon size={13} className={iconColor} strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <p className={`truncate text-[10px] font-bold leading-tight ${pillText}`}>{label}</p>
              <p className="truncate text-[9px] leading-none text-slate-500">{sublabel}</p>
            </div>
          </div>
          {/* Pin drop */}
          <div className={`mx-auto mt-0.5 h-1.5 w-1.5 rounded-full ${dotColor}`} />
        </div>
      ))}

      {/* ── Floating micro-labels ──────────────────────────────── */}
      <div className="absolute left-[38%] top-[28%] rounded-full bg-white/80 px-2 py-0.5 text-[9px] font-semibold text-slate-600 shadow-sm backdrop-blur-sm">
        ⭐ 4.8
      </div>
      <div className="absolute right-[20%] top-[42%] rounded-full bg-white/80 px-2 py-0.5 text-[9px] font-semibold text-slate-600 shadow-sm backdrop-blur-sm">
        📦 Fast delivery
      </div>
      <div className="absolute bottom-[22%] left-[36%] rounded-full bg-white/80 px-2 py-0.5 text-[9px] font-semibold text-slate-600 shadow-sm backdrop-blur-sm">
        🏪 4 stores nearby
      </div>

      {/* ── "Conceptual illustration" notice ──────────────────── */}
      <p className="absolute bottom-1.5 right-2.5 text-[9px] italic text-slate-400">
        Conceptual illustration
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function WhyShopWithUs() {
  return (
    <section
      id="why-localmarket"
      aria-labelledby="why-heading"
      className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* ════════════════════════════════════════════════════════
            Editorial two-column layout
            Left  → headline + copy + CTAs   (text-heavy, generous)
            Right → neighbourhood illustration
        ════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* ── LEFT: editorial copy column ────────────────────── */}
          <div className="lg:max-w-lg">

            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-1.5">
              <BadgeCheck size={14} className="text-green-700" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-green-700">
                Why LocalMarket
              </span>
            </div>

            {/* Headline — large, editorial weight */}
            <h2
              id="why-heading"
              className="mt-1 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.18]"
            >
              Big marketplace.{" "}
              <span className="text-green-700">Local roots.</span>
            </h2>

            {/* Supporting copy */}
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Discover the stores around you, explore products across categories,
              and bring your neighbourhood&apos;s shopping experience online.
            </p>

            {/* Divider accent */}
            <div className="mt-7 h-px w-12 rounded-full bg-green-300" />

            {/* Feature list — three tightly spaced proof points */}
            <ul className="mt-6 space-y-4">
              {[
                {
                  text: "Every order supports a store in your neighbourhood.",
                  accent: "text-green-700",
                },
                {
                  text: "Browse electronics, fashion, home & beauty in one session.",
                  accent: "text-blue-700",
                },
                {
                  text: "No complex sign-up — just find what you need, locally.",
                  accent: "text-orange-600",
                },
              ].map(({ text, accent }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 ${accent}`}>
                    <svg viewBox="0 0 8 8" className="h-2.5 w-2.5" aria-hidden="true">
                      <circle cx="4" cy="4" r="3" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="text-sm leading-6 text-slate-700 sm:text-base">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#local-stores"
                className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-800 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                Explore Local Stores
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="#categories"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-700 active:scale-95"
              >
                How it works
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: neighbourhood illustration ──────────────── */}
          <div className="w-full lg:pl-4">
            <NeighbourhoodMap />
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            Benefits strip — 3 compact cards below the split layout
        ════════════════════════════════════════════════════════ */}
        <div className="mt-16 grid grid-cols-1 gap-4 border-t border-slate-100 pt-12 sm:grid-cols-3 sm:gap-6">
          {benefits.map(({ id, icon: Icon, iconBg, iconColor, title, desc }) => (
            <div
              key={id}
              className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-[#faf9f6] p-5 transition-all duration-200 hover:border-green-200 hover:shadow-sm"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 ${iconBg}`}
              >
                <Icon size={20} className={iconColor} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 sm:text-[0.9rem]">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
