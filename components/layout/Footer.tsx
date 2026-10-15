"use client";

import Link from "next/link";
import {
  ShoppingBag,
  MapPin,
  Heart,
  Globe,
  MessageCircle,
  Share2,
  Rss,
  ArrowUpRight,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FooterLink {
  label: string;
  /** href — use a real anchor or route when it exists.
   *  Unimplemented pages are marked "#todo" so they render
   *  as non-navigating spans and are clearly flagged in code. */
  href: string;
  /** True when the link opens an external site */
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

// ─── Navigation data ──────────────────────────────────────────────────────────
// Sections that exist on the current homepage receive their real anchor IDs.
// Pages not yet implemented are left as "#todo" — rendered as <span> not <a>.

const columns: FooterColumn[] = [
  {
    heading: "Shop",
    links: [
      // #popular-products and #categories are live section IDs on the homepage
      { label: "All Products",           href: "#popular-products" },
      { label: "Electronics",            href: "#categories" },
      { label: "Fashion",                href: "#categories" },
      { label: "Home & Furniture",       href: "#categories" },
      { label: "Beauty & Personal Care", href: "#categories" },
    ],
  },
  {
    heading: "For Customers",
    links: [
      // TODO: /account, /orders, /help, /contact, /faq — pages not yet built
      { label: "My Account",   href: "#todo" },
      { label: "My Orders",    href: "#todo" },
      { label: "Help Center",  href: "#todo" },
      { label: "Contact Us",   href: "#todo" },
      { label: "FAQs",         href: "#todo" },
    ],
  },
  {
    heading: "For Sellers",
    links: [
      // TODO: /sell, /seller/register, /seller/login, /seller/support — not yet built
      { label: "Sell on LocalMarket",  href: "#todo" },
      { label: "Seller Registration",  href: "#todo" },
      { label: "Seller Login",         href: "#todo" },
      { label: "Seller Support",       href: "#todo" },
    ],
  },
  {
    heading: "Legal",
    links: [
      // TODO: /privacy, /terms, /returns, /shipping — not yet built
      { label: "Privacy Policy",       href: "#todo" },
      { label: "Terms & Conditions",   href: "#todo" },
      { label: "Return & Refund Policy", href: "#todo" },
      { label: "Shipping Policy",      href: "#todo" },
    ],
  },
];

// ─── Social links ─────────────────────────────────────────────────────────────
// External profiles are placeholders — update hrefs when real accounts exist.

// TODO: Replace icon + href pairs with real social profile URLs and brand-appropriate
// icons (e.g. from a social-icon library) when LocalMarket's accounts are created.
// lucide-react v1.55 does not export brand icons (Instagram, Facebook, etc.),
// so we use generic equivalents as placeholders.
const socialLinks = [
  { label: "Follow us online",  icon: Globe,          href: "#todo-website"  },
  { label: "Community chat",    icon: MessageCircle,  href: "#todo-community" },
  { label: "Share LocalMarket", icon: Share2,         href: "#todo-share"    },
  { label: "Content feed",      icon: Rss,            href: "#todo-feed"     },
] as const;

// ─── Helper — link or non-clickable span ─────────────────────────────────────
// Keeps the UI clean while making unimplemented routes obviously inert and
// distinguishable in code.

function FooterNavLink({ link }: { link: FooterLink }) {
  const baseClass =
    "text-sm text-green-100/75 transition-colors duration-150 hover:text-white focus-visible:text-white focus-visible:outline-none";

  if (link.href === "#todo") {
    // Unimplemented page — render as inert text so nothing navigates to "#todo"
    return (
      <span
        className={`${baseClass} cursor-default opacity-50`}
        title="Coming soon"
        aria-label={`${link.label} (coming soon)`}
      >
        {link.label}
      </span>
    );
  }

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} inline-flex items-center gap-1`}
      >
        {link.label}
        <ArrowUpRight size={12} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link href={link.href} className={baseClass}>
      {link.label}
    </Link>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

// Evaluated once at module load time — avoids Next.js 16's prerender restriction
// on new Date() inside component functions.
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      /*
        Deep forest green background (#14532d = green-900) gives a strong,
        premium feel that complements the green-700 used throughout the site.
        White and green-tinted text creates clear hierarchy without heavy
        decorative elements.
      */
      className="bg-green-900 px-4 pt-12 pb-0 sm:px-6 sm:pt-14 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Upper grid: brand + four link columns ────────────────────── */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] lg:gap-10">

          {/* ── Brand column ──────────────────────────────────────────── */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">

            {/* Logo — mirrors the Header exactly */}
            <Link
              href="/"
              aria-label="LocalMarket — go to homepage"
              className="inline-flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-white shadow-sm">
                <ShoppingBag size={22} aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                LocalMarket
              </span>
            </Link>

            {/* Tagline */}
            <p className="mt-4 text-sm font-semibold text-green-300">
              Your neighborhood. Your marketplace.
            </p>

            {/* Short description */}
            <p className="mt-2 max-w-[22rem] text-sm leading-6 text-green-100/70 lg:max-w-xs">
              Discover great products from trusted local stores near you — all
              in one place, tailored to your neighborhood.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-1.5" aria-label="Social media links">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                /*
                  TODO: Replace href values with real social profile URLs
                  when LocalMarket's accounts are created.
                */
                <a
                  key={label}
                  href={href}
                  aria-label={`${label} (coming soon)`}
                  title={`${label} (coming soon)`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-green-300 opacity-50 transition-all duration-150 hover:bg-green-800 hover:text-white hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Four link columns ─────────────────────────────────────── */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-green-400">
                {col.heading}
              </h3>
              <ul className="space-y-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterNavLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ──────────────────────────────────────────────────── */}
        <div className="mt-12 border-t border-green-800" />

        {/* ── Bottom bar ───────────────────────────────────────────────── */}
        <div className="flex flex-col items-center justify-between gap-2 py-5 sm:flex-row sm:gap-4">

          {/* Copyright */}
          <p className="text-xs text-green-300/70">
            &copy; {CURRENT_YEAR} LocalMarket. All rights reserved.
          </p>

          {/* "Made for your neighborhood" callout */}
          <p className="flex items-center gap-1.5 text-xs text-green-300/70">
            <span>Made for your neighborhood</span>
            <MapPin
              size={13}
              className="text-green-500"
              aria-hidden="true"
            />
            <Heart
              size={12}
              className="fill-green-600 text-green-600"
              aria-hidden="true"
            />
          </p>
        </div>

      </div>
    </footer>
  );
}
