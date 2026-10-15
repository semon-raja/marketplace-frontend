"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShoppingBag,
  Check,
  Store,
  ArrowUpRight,
  Info,
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  vendor: string;
  image: string;
  imageAlt: string;
  badge?: string;
}

export const popularProducts: Product[] = [
  {
    id: "prod-1",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 4999,
    originalPrice: 6999,
    rating: 4.8,
    reviewCount: 128,
    vendor: "SoundHub Local",
    image: "/Images/categories/electronics.png",
    imageAlt: "Wireless headphones and audio accessories",
    badge: "Best Seller",
  },
  {
    id: "prod-2",
    name: "Everyday Sneakers",
    category: "Fashion",
    price: 2499,
    originalPrice: 3499,
    rating: 4.7,
    reviewCount: 94,
    vendor: "Footwear Studio",
    image: "/Images/categories/fashion.png",
    imageAlt: "Everyday white sneakers and accessories",
    badge: "Trending",
  },
  {
    id: "prod-3",
    name: "Modern Table Lamp",
    category: "Home & Furniture",
    price: 1899,
    originalPrice: 2499,
    rating: 4.9,
    reviewCount: 62,
    vendor: "Living Space Co.",
    image: "/Images/categories/home.png",
    imageAlt: "Modern table lamp and home decor",
    badge: "Top Rated",
  },
  {
    id: "prod-4",
    name: "Daily Skincare Set",
    category: "Beauty & Personal Care",
    price: 1299,
    originalPrice: 1799,
    rating: 4.8,
    reviewCount: 156,
    vendor: "Glow Botanicals",
    image: "/Images/categories/beauty.png",
    imageAlt: "Daily skincare essentials set",
    badge: "Popular",
  },
  {
    id: "prod-5",
    name: "Minimal Desk Organizer",
    category: "Books & Stationery",
    price: 899,
    originalPrice: 1199,
    rating: 4.6,
    reviewCount: 48,
    vendor: "Craft & Paper Store",
    image: "/Images/categories/books.png",
    imageAlt: "Minimalist wooden desk organizer",
    badge: "Featured",
  },
  {
    id: "prod-6",
    name: "Smartwatch",
    category: "Daily Essentials",
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviewCount: 210,
    vendor: "Tech Corner Local",
    image: "/Images/categories/essentials.png",
    imageAlt: "Smartwatch with fitness tracking",
    badge: "Best Value",
  },
];

export default function PopularProducts() {
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = (id: string, name: string) => {
    setAddedItems((prev) => {
      const isCurrentlyAdded = !!prev[id];
      const newState = { ...prev, [id]: !isCurrentlyAdded };

      if (!isCurrentlyAdded) {
        setToastMessage(`Added "${name}" to your demo cart!`);
        setTimeout(() => setToastMessage(null), 3000);
      }
      return newState;
    });
  };

  return (
    <section
      id="popular-products"
      aria-labelledby="popular-products-heading"
      className="bg-[#f4f0e8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── Section header ── */}
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
              CURATED FOR YOU
            </p>
            <h2
              id="popular-products-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Popular Products
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Discover what&apos;s trending in stores near you.
            </p>
          </div>

          <Link
            href="#all-products"
            aria-label="View all popular products"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-green-700 transition hover:text-green-900 sm:inline-flex"
          >
            View all
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* ── Live Toast Notification for Demo Cart Action ── */}
        {toastMessage && (
          <div
            role="status"
            aria-live="polite"
            className="mb-4 flex items-center justify-between rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-medium text-white shadow-md sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-400" />
              <span>{toastMessage}</span>
            </div>
            <span className="text-[11px] text-slate-400">(Demo Mode)</span>
          </div>
        )}

        {/* ── Products Grid: 2 cols mobile → 3 tablet → 6 desktop ── */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {popularProducts.map(
            ({
              id,
              name,
              category,
              price,
              originalPrice,
              rating,
              reviewCount,
              vendor,
              image,
              imageAlt,
              badge,
            }) => {
              const isAdded = !!addedItems[id];

              return (
                <article
                  key={id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2"
                >
                  {/* Top Image Container */}
                  <div>
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50">
                      {badge && (
                        <span className="absolute left-2 top-2 z-10 rounded-md bg-slate-900/80 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                          {badge}
                        </span>
                      )}

                      <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Product Metadata */}
                    <div className="mt-3 flex flex-col gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-green-700">
                        {category}
                      </span>

                      <h3 className="line-clamp-1 text-xs font-bold text-slate-900 transition-colors group-hover:text-green-800 sm:text-sm">
                        {name}
                      </h3>

                      {/* Rating & Reviews */}
                      <div className="flex items-center gap-1 text-[11px] text-slate-600">
                        <Star
                          size={12}
                          className="fill-amber-400 text-amber-400"
                          aria-hidden="true"
                        />
                        <span className="font-semibold text-slate-900">
                          {rating}
                        </span>
                        <span className="text-slate-400">({reviewCount})</span>
                      </div>

                      {/* Vendor Label */}
                      <div className="flex items-center gap-1 text-[11px] text-slate-500">
                        <Store
                          size={11}
                          className="shrink-0 text-slate-400"
                          aria-hidden="true"
                        />
                        <span className="truncate">Sold by {vendor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Price & Action */}
                  <div className="mt-3 pt-2 border-t border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-extrabold text-slate-900 sm:text-base">
                        ₹{price.toLocaleString("en-IN")}
                      </span>
                      {originalPrice && (
                        <span className="text-[11px] text-slate-400 line-through">
                          ₹{originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>

                    {/* Accessible Add to Cart Button */}
                    <button
                      type="button"
                      onClick={() => handleAddToCart(id, name)}
                      aria-label={
                        isAdded
                          ? `${name} added to demo cart`
                          : `Add ${name} to cart`
                      }
                      className={`mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 px-3 text-xs font-semibold shadow-sm transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ${
                        isAdded
                          ? "bg-slate-900 text-white hover:bg-slate-800"
                          : "bg-green-700 text-white hover:bg-green-800"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={14} aria-hidden="true" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={14} aria-hidden="true" />
                          <span>Add to cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            }
          )}
        </div>

        {/* ── Demonstration data disclaimer ── */}
        <div className="mt-8 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
          <Info size={14} className="shrink-0 text-slate-400" />
          <span>
            Demonstration product listings. Prices, ratings, and vendor information are for illustrative display.
          </span>
        </div>
      </div>
    </section>
  );
}
