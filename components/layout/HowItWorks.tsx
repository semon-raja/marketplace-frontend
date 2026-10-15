import React from "react";
import Link from "next/link";
import { MapPin, Store, ShoppingBag, ArrowRight, Sparkles, LucideIcon } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  illustration: "location" | "store" | "bag";
  // Card palette
  cardBg: string;
  cardBorder: string;
  hoverBorder: string;
  // Number badge palette
  numberBg: string;
  numberColor: string;
  // Icon palette
  iconBg: string;
  iconColor: string;
  // Illustration area bg
  illBg: string;
}

// ─── Step data ────────────────────────────────────────────────────────────────

const steps: Step[] = [
  {
    id: "step-location",
    number: "01",
    title: "Choose Your Location",
    description:
      "Set your area to discover stores and products available around your neighborhood.",
    illustration: "location",
    cardBg: "bg-white",
    cardBorder: "border-green-100",
    hoverBorder: "hover:border-green-300",
    numberBg: "bg-green-50",
    numberColor: "text-green-700",
    iconBg: "bg-green-700",
    iconColor: "text-white",
    illBg: "bg-[#f0fdf4]",
  },
  {
    id: "step-discover",
    number: "02",
    title: "Discover Local Stores",
    description:
      "Explore nearby shops and browse products across your favorite categories.",
    illustration: "store",
    cardBg: "bg-[#f7fbf8]",
    cardBorder: "border-emerald-100",
    hoverBorder: "hover:border-emerald-300",
    numberBg: "bg-emerald-50",
    numberColor: "text-emerald-700",
    iconBg: "bg-emerald-600",
    iconColor: "text-white",
    illBg: "bg-[#ecfdf5]",
  },
  {
    id: "step-order",
    number: "03",
    title: "Shop and Place Your Order",
    description:
      "Choose your products and follow the checkout process to place your order.",
    illustration: "bag",
    cardBg: "bg-[#faf9f6]",
    cardBorder: "border-slate-100",
    hoverBorder: "hover:border-green-200",
    numberBg: "bg-[#f0f9f4]",
    numberColor: "text-green-800",
    iconBg: "bg-green-800",
    iconColor: "text-white",
    illBg: "bg-[#f0fdf4]",
  },
];

// ─── Compact inline SVG illustrations ────────────────────────────────────────
// All sized to fit within a consistent 80 × 64 viewBox at a fixed display
// height. aria-hidden on the SVG; the surrounding container is decorative.

function LocationIllustration() {
  return (
    <svg
      viewBox="0 0 80 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      {/* Map outline */}
      <rect x="8" y="6" width="64" height="52" rx="7" fill="#dcfce7" stroke="#bbf7d0" strokeWidth="1.2" />
      {/* Road grid */}
      <line x1="8" y1="32" x2="72" y2="32" stroke="#86efac" strokeWidth="3.5" />
      <line x1="40" y1="6"  x2="40" y2="58" stroke="#86efac" strokeWidth="3.5" />
      {/* City blocks */}
      <rect x="13" y="11" width="22" height="17" rx="4" fill="#bbf7d0" fillOpacity="0.75" />
      <rect x="45" y="11" width="22" height="17" rx="4" fill="#bbf7d0" fillOpacity="0.55" />
      <rect x="13" y="37" width="22" height="17" rx="4" fill="#bbf7d0" fillOpacity="0.55" />
      <rect x="45" y="37" width="22" height="17" rx="4" fill="#bbf7d0" fillOpacity="0.75" />
      {/* Pin drop */}
      <circle cx="40" cy="30" r="8" fill="#16a34a" />
      <circle cx="40" cy="30" r="3.2" fill="white" />
      <line x1="40" y1="38" x2="40" y2="43" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pulse ring */}
      <circle cx="40" cy="30" r="13" stroke="#16a34a" strokeWidth="1" strokeOpacity="0.28" strokeDasharray="3.5 3" />
    </svg>
  );
}

function StoreIllustration() {
  return (
    <svg
      viewBox="0 0 80 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      {/* Storefront walls */}
      <rect x="10" y="28" width="60" height="30" rx="4" fill="#bbf7d0" />
      {/* Roof / awning */}
      <path d="M6 28 L40 12 L74 28 Z" fill="#6ee7b7" />
      {/* Awning shadow edge */}
      <line x1="6" y1="28" x2="74" y2="28" stroke="#34d399" strokeWidth="1.5" />
      {/* Door */}
      <rect x="32" y="38" width="16" height="20" rx="3" fill="#16a34a" />
      <circle cx="45" cy="48" r="1.8" fill="white" />
      {/* Left window */}
      <rect x="14" y="34" width="13" height="11" rx="2.5" fill="white" fillOpacity="0.9" />
      <line x1="20.5" y1="34" x2="20.5" y2="45" stroke="#86efac" strokeWidth="1" />
      <line x1="14"   y1="39.5" x2="27" y2="39.5" stroke="#86efac" strokeWidth="1" />
      {/* Right window */}
      <rect x="53" y="34" width="13" height="11" rx="2.5" fill="white" fillOpacity="0.9" />
      <line x1="59.5" y1="34" x2="59.5" y2="45" stroke="#86efac" strokeWidth="1" />
      <line x1="53"   y1="39.5" x2="66" y2="39.5" stroke="#86efac" strokeWidth="1" />
      {/* Store sign bar */}
      <rect x="24" y="17" width="32" height="6" rx="2.5" fill="#059669" />
      <rect x="28" y="19" width="9"  height="2" rx="1" fill="white" fillOpacity="0.55" />
      <rect x="42" y="19" width="9"  height="2" rx="1" fill="white" fillOpacity="0.55" />
      {/* Star badge */}
      <circle cx="67" cy="19" r="7.5" fill="#fef9c3" stroke="#fde68a" strokeWidth="1" />
      <text x="67" y="22.5" textAnchor="middle" fontSize="8.5" fill="#d97706">★</text>
    </svg>
  );
}

function BagIllustration() {
  return (
    <svg
      viewBox="0 0 80 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      {/* Bag body */}
      <rect x="14" y="24" width="52" height="34" rx="7" fill="#bbf7d0" />
      {/* Bag handle arc */}
      <path d="M28 24 C28 14 52 14 52 24" stroke="#6ee7b7" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* Horizontal stripe */}
      <rect x="14" y="37" width="52" height="5" fill="#86efac" />
      {/* Checkmark circle */}
      <circle cx="40" cy="44" r="9.5" fill="#16a34a" />
      <path d="M34.5 44 L38 47.5 L45.5 39.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Small sparkle dots */}
      <circle cx="12" cy="19" r="3"   fill="#bbf7d0" />
      <circle cx="68" cy="17" r="2.2" fill="#6ee7b7" />
      <circle cx="7"  cy="36" r="1.8" fill="#d1fae5" />
      <circle cx="73" cy="38" r="2"   fill="#a7f3d0" />
    </svg>
  );
}

// Map illustration keys → components. Typed to exactly the Step["illustration"] union.
const illustrationMap: Record<Step["illustration"], () => React.ReactElement> = {
  location: LocationIllustration,
  store: StoreIllustration,
  bag: BagIllustration,
};

// ─── Icon component map ───────────────────────────────────────────────────────

const iconMap: Record<Step["illustration"], LucideIcon> = {
  location: MapPin,
  store: Store,
  bag: ShoppingBag,
};

// ─── Desktop arrow connector ──────────────────────────────────────────────────
// Sits between two cards in the desktop row. Kept deliberately subtle.

function Connector() {
  return (
    <div
      aria-hidden="true"
      className="hidden shrink-0 items-center justify-center lg:flex"
      style={{ width: "2.75rem" }}
    >
      <svg
        viewBox="0 0 44 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-11"
      >
        {/* Dotted line */}
        <line
          x1="2" y1="12" x2="38" y2="12"
          stroke="#16a34a"
          strokeWidth="1.8"
          strokeDasharray="4 3.5"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
        {/* Arrowhead */}
        <path
          d="M32 7 L38 12 L32 17"
          stroke="#16a34a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.65"
        />
      </svg>
    </div>
  );
}

// ─── Mobile arrow connector ───────────────────────────────────────────────────

function MobileConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex justify-center py-1 lg:hidden"
    >
      <svg
        viewBox="0 0 20 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-5"
      >
        <line
          x1="10" y1="1" x2="10" y2="20"
          stroke="#16a34a"
          strokeWidth="1.8"
          strokeDasharray="3.5 3"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
        <path
          d="M5 16 L10 22 L15 16"
          stroke="#16a34a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.65"
        />
      </svg>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-[#f4f0e8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="mb-10 text-center sm:mb-12">

          {/* Eyebrow */}
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-white/80 px-3.5 py-1.5">
            <Sparkles size={12} className="text-green-600" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-green-700">
              Simple as 1, 2, 3
            </span>
          </div>

          <h2
            id="how-it-works-heading"
            className="mt-1 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Your neighborhood shopping,{" "}
            <span className="text-green-700">made simple.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Discover great products from local stores without the hassle.
          </p>

          {/* Thin accent rule */}
          <div className="mx-auto mt-4 h-0.5 w-10 rounded-full bg-green-400" />
        </div>

        {/* ── Three-step journey ─────────────────────────────────────────── */}
        {/*
          Layout contract:
            Mobile (< lg):  flex-col — cards stack, MobileConnectors between them
            Desktop (≥ lg): flex-row — cards share equal width, Connectors between them
        */}
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-0">
          {steps.map((step, index) => {
            const Illustration = illustrationMap[step.illustration];
            const Icon = iconMap[step.illustration];

            return (
              <div
                key={step.id}
                className="flex flex-col lg:flex-1 lg:flex-row lg:items-stretch"
              >
                {/* ── Step card ── */}
                <article
                  id={step.id}
                  aria-label={`Step ${step.number}: ${step.title}`}
                  className={[
                    // Base
                    "group relative flex flex-col overflow-hidden rounded-2xl border shadow-sm",
                    "transition-all duration-300 motion-reduce:transition-none",
                    "hover:-translate-y-1 hover:shadow-md",
                    // Grow to fill the lg row
                    "lg:flex-1",
                    step.cardBg,
                    step.cardBorder,
                    step.hoverBorder,
                  ].join(" ")}
                >
                  {/* ── Illustration area: fixed height, full-width band ── */}
                  <div
                    className={[
                      "relative flex items-center justify-center overflow-hidden",
                      // Fixed visual height — consistent across all three cards
                      "h-[140px] sm:h-[152px]",
                      step.illBg,
                    ].join(" ")}
                  >
                    {/* Number badge — top-left absolute */}
                    <div
                      className={[
                        "absolute left-4 top-4 flex h-9 w-9 items-center justify-center",
                        "rounded-xl text-sm font-black leading-none shadow-sm",
                        step.numberBg,
                        step.numberColor,
                      ].join(" ")}
                    >
                      {step.number}
                    </div>

                    {/* Compact illustration — capped width so it never dominates */}
                    <div className="h-[88px] w-[110px]">
                      <Illustration />
                    </div>
                  </div>

                  {/* ── Content area ── */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {/* Icon badge */}
                    <div
                      className={[
                        "mb-3 flex h-9 w-9 items-center justify-center rounded-xl",
                        "transition-transform duration-300 group-hover:scale-110",
                        "motion-reduce:transition-none",
                        step.iconBg,
                        step.iconColor,
                      ].join(" ")}
                    >
                      <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    </div>

                    <h3 className="text-sm font-extrabold leading-snug tracking-tight text-slate-900 sm:text-[0.95rem]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Accent bottom bar — sweeps in on hover */}
                  <div
                    aria-hidden="true"
                    className={[
                      "absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 rounded-b-2xl",
                      "transition-transform duration-300 group-hover:scale-x-100",
                      "motion-reduce:scale-x-100 motion-reduce:transition-none",
                      step.iconBg,
                    ].join(" ")}
                  />
                </article>

                {/* Connectors between steps (not after the last) */}
                {index < steps.length - 1 && (
                  <>
                    <Connector />
                    <MobileConnector />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="#popular-products"
            className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-800 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 motion-reduce:transition-none"
          >
            Start Exploring
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
