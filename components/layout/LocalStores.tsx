import Link from "next/link";
import { Star, MapPin, ArrowUpRight, Store, Navigation } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface LocalStore {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  /** Illustrative display distance — not calculated from actual user location */
  distanceKm: number;
  /** Path relative to /public */
  coverImage: string;
  coverImageAlt: string;
  href: string;
  /** Tailwind classes for the store icon container */
  badgeStyle: string;
  /** Accent bottom bar color */
  accentBg: string;
}

// ─── Sample data ──────────────────────────────────────────────────────────────
// All distances and ratings are illustrative sample values for display purposes.

const stores: LocalStore[] = [
  {
    id: "store-1",
    name: "SoundHub Local",
    category: "Electronics",
    rating: 4.8,
    reviewCount: 312,
    distanceKm: 1.2,
    coverImage: "/Images/local_stores/electronics.webp",
    coverImageAlt: "SoundHub Local store interior — shelves of electronics, appliances and gadgets",
    href: "#soundhub-local",
    badgeStyle: "bg-blue-100 text-blue-700",
    accentBg: "bg-blue-600",
  },
  {
    id: "store-2",
    name: "Footwear Studio",
    category: "Fashion & Footwear",
    rating: 4.7,
    reviewCount: 218,
    distanceKm: 0.8,
    coverImage: "/Images/local_stores/footwear.jpg",
    coverImageAlt: "Footwear Studio store interior — wall display of sneakers and footwear",
    href: "#footwear-studio",
    badgeStyle: "bg-orange-100 text-orange-700",
    accentBg: "bg-orange-500",
  },
  {
    id: "store-3",
    name: "Living Space Co.",
    category: "Home & Furniture",
    rating: 4.9,
    reviewCount: 176,
    distanceKm: 2.1,
    coverImage: "/Images/local_stores/living_space.jpg",
    coverImageAlt: "Living Space Co. store interior — multi-level showroom with sofas and furniture",
    href: "#living-space-co",
    badgeStyle: "bg-emerald-100 text-emerald-700",
    accentBg: "bg-emerald-600",
  },
  {
    id: "store-4",
    name: "Glow Botanicals",
    category: "Beauty & Personal Care",
    rating: 4.8,
    reviewCount: 394,
    distanceKm: 1.5,
    coverImage: "/Images/local_stores/botanicals.jpg",
    coverImageAlt: "Glow Botanicals store interior — wooden shelves with skincare and beauty products",
    href: "#glow-botanicals",
    badgeStyle: "bg-pink-100 text-pink-700",
    accentBg: "bg-pink-500",
  },
];

// ─── Star renderer ─────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={
            star <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-slate-200 text-slate-200"
          }
        />
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function LocalStores() {
  return (
    <section
      id="local-stores"
      aria-labelledby="local-stores-heading"
      className="bg-[#f4f0e8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Section header ── */}
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            {/* Eyebrow with location icon */}
            <div className="mb-2 flex items-center gap-1.5">
              <Navigation
                size={13}
                className="text-green-700"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
                Shop Local
              </p>
            </div>

            <h2
              id="local-stores-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Local Stores Near You
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Discover trusted shops and hidden gems in your neighborhood.
            </p>
          </div>

          {/* View all link — desktop only */}
          <Link
            href="#all-stores"
            aria-label="View all local stores"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-green-700 transition hover:text-green-900 sm:inline-flex"
          >
            View all stores
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* ── Store cards: 1 col mobile → 2 tablet → 4 desktop ── */}
        <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stores.map(
            ({
              id,
              name,
              category,
              rating,
              reviewCount,
              distanceKm,
              coverImage,
              coverImageAlt,
              href,
              badgeStyle,
              accentBg,
            }) => (
              <li key={id} className="group">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl">

                  {/* ── Cover image ── */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100 sm:h-48">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={coverImage}
                      alt={coverImageAlt}
                      className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Distance badge — top right */}
                    <span className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
                      <MapPin
                        size={11}
                        className="text-green-600"
                        aria-hidden="true"
                      />
                      {distanceKm} km
                    </span>

                    {/* Accent bottom bar — revealed on hover */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${accentBg}`}
                    />
                  </div>

                  {/* ── Card body ── */}
                  <div className="flex flex-1 flex-col gap-3 p-4">

                    {/* Store icon + name */}
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 ${badgeStyle}`}
                      >
                        <Store size={18} strokeWidth={1.8} aria-hidden="true" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold text-slate-900 transition-colors group-hover:text-green-800 sm:text-[0.9rem]">
                          {name}
                        </h3>
                        <p className="mt-0.5 truncate text-xs text-slate-500">
                          {category}
                        </p>
                      </div>
                    </div>

                    {/* Rating row */}
                    <div className="flex items-center gap-2">
                      <StarRating rating={rating} />
                      <span className="text-[11px] font-semibold text-slate-900">
                        {rating.toFixed(1)}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        ({reviewCount} reviews)
                      </span>
                    </div>

                    {/* CTA — pushed to bottom */}
                    <div className="mt-auto pt-1">
                      <Link
                        href={href}
                        aria-label={`Visit ${name}`}
                        className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-green-700 bg-white px-4 py-2 text-xs font-semibold text-green-700 shadow-sm transition-all duration-200 hover:bg-green-700 hover:text-white active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      >
                        Visit Store
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          )}
        </ul>

        {/* ── Mobile "View all" link ── */}
        <div className="mt-7 flex justify-center sm:hidden">
          <Link
            href="#all-stores"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 transition hover:text-green-900"
          >
            View all stores
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* ── Illustrative data disclaimer ── */}
        <p className="mt-6 text-center text-[11px] text-slate-400">
          Store distances and ratings shown are illustrative sample data and do not reflect real-time location or verified reviews.
        </p>
      </div>
    </section>
  );
}
