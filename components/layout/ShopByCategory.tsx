import Link from "next/link";
import {
  ArrowUpRight,
  LucideIcon,
  Smartphone,
  Shirt,
  House,
  Sparkles,
  BookOpen,
  ShoppingBag,
} from "lucide-react";

interface Category {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  /** Tailwind classes for the icon container */
  iconStyle: string;
  /** Accent color used for the bottom footer strip */
  accentBg: string;
}

const categories: Category[] = [
  {
    name: "Electronics",
    description: "Gadgets & accessories",
    href: "#electronics",
    icon: Smartphone,
    image: "/Images/categories/electronics.png",
    imageAlt: "Headphones, laptop, smartwatch and wireless earbuds",
    iconStyle: "bg-blue-100 text-blue-700",
    accentBg: "bg-blue-600",
  },
  {
    name: "Fashion",
    description: "Style for every day",
    href: "#fashion",
    icon: Shirt,
    image: "/Images/categories/fashion.png",
    imageAlt: "Handbag, sneakers, sunglasses and knitwear",
    iconStyle: "bg-orange-100 text-orange-700",
    accentBg: "bg-orange-500",
  },
  {
    name: "Home & Furniture",
    description: "Make yourself at home",
    href: "#home",
    icon: House,
    image: "/Images/categories/home.png",
    imageAlt: "Sofa, lamp, coffee table and potted plant",
    iconStyle: "bg-emerald-100 text-emerald-700",
    accentBg: "bg-emerald-600",
  },
  {
    name: "Beauty & Personal Care",
    description: "Your everyday essentials",
    href: "#beauty",
    icon: Sparkles,
    image: "/Images/categories/beauty.png",
    imageAlt: "Perfume, skincare and beauty products",
    iconStyle: "bg-pink-100 text-pink-700",
    accentBg: "bg-pink-500",
  },
  {
    name: "Books & Stationery",
    description: "Ideas start here",
    href: "#books",
    icon: BookOpen,
    image: "/Images/categories/books.png",
    imageAlt: "Books, notebooks, pens and stationery",
    iconStyle: "bg-amber-100 text-amber-700",
    accentBg: "bg-amber-500",
  },
  {
    name: "Daily Essentials",
    description: "Little things that matter",
    href: "#essentials",
    icon: ShoppingBag,
    image: "/Images/categories/essentials.png",
    imageAlt: "Water bottle, towels and daily household essentials",
    iconStyle: "bg-violet-100 text-violet-700",
    accentBg: "bg-violet-600",
  },
];

export default function ShopByCategory() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="bg-[#f4f0e8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Section header ── */}
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
              Find your next favourite
            </p>
            <h2
              id="categories-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Shop by Category
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Explore products across all your favourite departments.
            </p>
          </div>

          <Link
            href="#all-categories"
            aria-label="View all categories"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-green-700 transition hover:text-green-900 sm:inline-flex"
          >
            View all
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* ── Category grid: 2 cols → 3 tablet → 6 desktop ── */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {categories.map(({ name, description, href, icon: Icon, image, imageAlt, iconStyle, accentBg }) => (
            <Link
              key={name}
              href={href}
              aria-label={`Browse ${name}`}
              className="group relative flex h-[230px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:h-[250px]"
            >
              {/* ── Full-bleed product photo ── */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108"
                style={{ transform: "scale(1)" }}
              />

              {/*
                ── Text-area overlay ──
                A narrow top-to-bottom gradient:
                  • top 0–55 %  → opaque white, keeps text crisp
                  • 55–75 %     → fades to transparent
                  • 75–100 %    → fully transparent, product image shows vividly
                No horizontal spread → product fills the bottom ~45 % of the card.
              */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-full"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 35%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0) 72%)",
                }}
              />

              {/* ── Text content ── */}
              <div className="relative z-10 flex flex-col gap-2 p-4 sm:p-4">
                {/* Icon */}
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 ${iconStyle}`}
                >
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </div>

                {/* Category name + description */}
                <div className="mt-1">
                  <h3 className="flex items-center gap-1 text-sm font-bold leading-5 text-slate-900 sm:text-[0.9rem]">
                    {name}
                    {/* Arrow nudge — slides in on hover */}
                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="shrink-0 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-slate-500"
                    />
                  </h3>
                  <p className="mt-0.5 text-xs leading-4 text-slate-500">
                    {description}
                  </p>
                </div>
              </div>

              {/*
                ── Accent bottom bar ──
                A thin 3-px accent line at the very bottom of each card,
                revealed on hover. Adds category colour without cluttering the image.
              */}
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${accentBg}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
