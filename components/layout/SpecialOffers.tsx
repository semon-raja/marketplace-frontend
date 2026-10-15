import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Offer {
  id: string;
  /** Small pill badge — illustrative promotional example only */
  badge: string;
  /** Badge Tailwind classes */
  badgeStyle: string;
  title: string;
  description: string;
  /** Fine-print copy reinforcing this is illustrative */
  finePrint: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  /** CTA button classes */
  btnClass: string;
  /** Accent bottom bar color */
  accentBg: string;
}

// ─── Illustrative offer data ───────────────────────────────────────────────────
// All discounts and promotions are illustrative examples for display purposes only.

const offers: Offer[] = [
  {
    id: "offer-tech",
    badge: "Up to 30% off",
    badgeStyle: "bg-green-700 text-white",
    title: "Tech Upgrade\nDays",
    description: "Save up to 30% on selected electronics",
    finePrint: "Illustrative promotional example. Terms apply.",
    cta: "Explore Electronics",
    href: "#tech-deals",
    image: "/Images/special_offers/Modern Green Tech Showcase.png",
    imageAlt:
      "Laptop, headphones, smartphone, smartwatch, earbuds and speaker on a vibrant green studio backdrop",
    btnClass:
      "bg-green-700 text-white hover:bg-green-800 focus-visible:outline-green-700",
    accentBg: "bg-green-600",
  },
  {
    id: "offer-fashion",
    badge: "Up to 40% off",
    badgeStyle: "bg-orange-500 text-white",
    title: "Fresh Style\nFinds",
    description: "Enjoy up to 40% off selected fashion",
    finePrint: "Illustrative promotional example. Terms apply.",
    cta: "Shop Fashion",
    href: "#fashion-deals",
    image: "/Images/special_offers/Warm Minimalist Fashion Display.png",
    imageAlt:
      "Sneakers, handbag, folded clothes, sunglasses and hat styled on pedestals with a clothing rack behind",
    btnClass:
      "bg-orange-500 text-white hover:bg-orange-600 focus-visible:outline-orange-500",
    accentBg: "bg-orange-500",
  },
  {
    id: "offer-home",
    badge: "Up to 25% off",
    badgeStyle: "bg-indigo-600 text-white",
    title: "Home\nRefresh",
    description: "Save up to 25% on home essentials",
    finePrint: "Illustrative promotional example. Terms apply.",
    cta: "Explore Home",
    href: "#home-deals",
    image: "/Images/special_offers/Sunlit Scandinavian Living Room.png",
    imageAlt:
      "Bright Scandinavian living room with cream sofa, wooden coffee table, plants and a floor lamp",
    btnClass:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600",
    accentBg: "bg-indigo-600",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SpecialOffers() {
  return (
    <section
      id="special-offers"
      aria-labelledby="special-offers-heading"
      className="bg-[#f4f0e8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Section header ── */}
        <div className="mb-7">
          {/* Eyebrow */}
          <div className="mb-2 flex items-center gap-1.5">
            <Tag size={13} className="text-green-700" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
              Deals you&apos;ll love
            </p>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div>
              <h2
                id="special-offers-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              >
                Special Offers &amp; Deals
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Great finds, better prices — shop more and save more.
              </p>
            </div>
            {/* Subtle disclaimer — desktop only */}
            <p className="hidden shrink-0 text-[11px] text-slate-400 sm:block">
              Illustrative examples only
            </p>
          </div>
        </div>

        {/* ── Offer cards: 1 col → 2 tablet → 3 desktop ── */}
        <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map(
            ({
              id,
              badge,
              badgeStyle,
              title,
              description,
              finePrint,
              cta,
              href,
              image,
              imageAlt,
              btnClass,
              accentBg,
            }) => (
              <li key={id} className="group">
                <div className="relative h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:shadow-xl sm:h-[320px]">

                  {/* ── Layer 1: Full-bleed background photo, products sit on the right ── */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={imageAlt}
                    className="absolute inset-0 h-full w-full object-cover object-right transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/*
                    ── Layer 2: Two-stage white overlay ──
                    0 – 50%  solid white  → guaranteed opaque text zone
                    50 – 62% fast fade   → smooth blend into image
                    62 – 78% soft feather → gentle transition
                    78%+     transparent  → full product visibility
                  */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, #ffffff 0%, #ffffff 50%, rgba(255,255,255,0.88) 60%, rgba(255,255,255,0.28) 72%, transparent 82%)",
                    }}
                  />

                  {/*
                    ── Layer 3: Text column ──
                    Width-capped to 54% so all content lives inside the
                    opaque white zone and never overlaps the product imagery.
                  */}
                  <div className="absolute inset-y-0 left-0 flex w-[54%] flex-col justify-between p-5 sm:p-6">

                    {/* Top block: badge + heading + description */}
                    <div>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide shadow-sm ${badgeStyle}`}
                      >
                        <Tag size={10} aria-hidden="true" />
                        {badge}
                      </span>

                      <h3 className="mt-3 whitespace-pre-line text-[1.3rem] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[1.45rem]">
                        {title}
                      </h3>

                      <p className="mt-2 text-[0.78rem] leading-relaxed text-slate-600 sm:text-[0.85rem]">
                        {description}
                      </p>
                    </div>

                    {/* Bottom block: CTA button + fine print */}
                    <div className="flex flex-col gap-1.5">
                      <Link
                        href={href}
                        aria-label={cta}
                        className={`inline-flex w-fit items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-5 sm:py-2.5 sm:text-sm ${btnClass}`}
                      >
                        {cta}
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                      <p className="text-[10px] leading-snug text-slate-400">
                        {finePrint}
                      </p>
                    </div>
                  </div>

                  {/* ── Accent bottom bar — sweeps across on hover ── */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${accentBg}`}
                  />
                </div>
              </li>
            )
          )}
        </ul>

        {/* ── Disclaimer ── */}
        <p className="mt-6 text-center text-[11px] text-slate-400">
          All discounts and promotions shown are illustrative sample data and do
          not represent real, active offers from any store.
        </p>
      </div>
    </section>
  );
}
