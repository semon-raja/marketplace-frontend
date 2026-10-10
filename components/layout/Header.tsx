
"use client";

import { useState } from "react";
import {
  ShoppingBag,
  MapPin,
  Search,
  UserRound,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  LayoutGrid,
  Monitor,
  Shirt,
  House,
  Sparkles,
  BookOpen,
} from "lucide-react";

const categories = [
  { name: "All", icon: LayoutGrid },
  { name: "Electronics", icon: Monitor },
  { name: "Fashion", icon: Shirt },
  { name: "Home & Furniture", icon: House },
  { name: "Beauty & Personal Care", icon: Sparkles },
  { name: "Books & Stationery", icon: BookOpen },
  { name: "Daily Essentials", icon: ShoppingBag },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [location, setLocation] = useState("Choose your location");
  const [activeCategory, setActiveCategory] = useState("All");

  function selectLocation(value: string) {
    const trimmedValue = value.trim();

    if (trimmedValue) {
      setLocation(trimmedValue);
      setLocationOpen(false);
      setMenuOpen(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main header */}
        <div className="flex h-16 items-center gap-3 sm:gap-5">
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-white">
              <ShoppingBag size={22} />
            </span>

            <span className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
              LocalMarket
            </span>
          </a>

          {/* Desktop location selector */}
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setLocationOpen(!locationOpen)}
              aria-expanded={locationOpen}
              className="flex items-center gap-2 rounded-lg px-2 py-2 text-left hover:bg-gray-50"
            >
              <MapPin size={20} className="shrink-0 text-green-700" />

              <span className="max-w-36">
                <span className="block text-xs text-gray-500">
                  Shopping location
                </span>
                <span className="block truncate text-sm font-medium text-gray-800">
                  {location}
                </span>
              </span>

              <ChevronDown size={16} className="text-gray-500" />
            </button>

            {locationOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                <p className="font-semibold text-gray-900">
                  Choose your location
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Select a city or enter a PIN code to explore local
                  availability.
                </p>

                <form
                  className="mt-3"
                  onSubmit={(event) => {
                    event.preventDefault();

                    const formData = new FormData(event.currentTarget);
                    selectLocation(String(formData.get("location") ?? ""));
                  }}
                >
                  <input
                    name="location"
                    type="text"
                    placeholder="City or PIN code"
                    aria-label="Enter city or PIN code"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-700"
                  />

                  <button
                    type="submit"
                    className="mt-3 w-full rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800"
                  >
                    Apply location
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Desktop search */}
          <form
            className="hidden min-w-0 flex-1 md:block"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 focus-within:border-green-700">
              <Search size={19} className="shrink-0 text-gray-500" />

              <input
                type="search"
                placeholder="Search products and local stores..."
                aria-label="Search products and local stores"
                className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
              />
            </div>
          </form>

          {/* Account, cart and mobile menu */}
          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Account"
              className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100"
            >
              <UserRound size={22} />
            </button>

            <button
              type="button"
              aria-label="Shopping cart"
              className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100"
            >
              <ShoppingCart size={22} />
            </button>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen(!menuOpen);
                setLocationOpen(false);
              }}
              className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <form
          className="pb-3 md:hidden"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 focus-within:border-green-700">
            <Search size={19} className="shrink-0 text-gray-500" />

            <input
              type="search"
              placeholder="Search products and stores..."
              aria-label="Search products and stores"
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
          </div>
        </form>

        {/* Desktop category navigation */}
        <nav
          aria-label="Product categories"
          className="hidden border-t border-gray-100 md:block"
        >
          <div className="flex items-stretch gap-1 overflow-x-auto">
            {categories.map(({ name, icon: Icon }) => {
              const isActive = activeCategory === name;

              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveCategory(name)}
                  aria-pressed={isActive}
                  className={`relative flex shrink-0 items-center gap-2 whitespace-nowrap px-3 py-4 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-green-700"
                      : "text-gray-600 hover:text-green-700"
                  }`}
                >
                  <Icon
                    size={19}
                    strokeWidth={isActive ? 2.4 : 1.8}
                  />

                  <span>{name}</span>

                  {isActive && (
                    <span className="absolute inset-x-3 bottom-0 h-[3px] rounded-t-full bg-green-700" />
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-gray-100 py-3 md:hidden"
          >
            {/* Mobile location selector */}
            <button
              type="button"
              onClick={() => setLocationOpen(!locationOpen)}
              aria-expanded={locationOpen}
              className="mb-2 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <MapPin size={19} className="text-green-700" />
              <span className="flex-1">{location}</span>
              <ChevronDown size={16} />
            </button>

            {locationOpen && (
              <form
                className="mb-3 px-3"
                onSubmit={(event) => {
                  event.preventDefault();

                  const formData = new FormData(event.currentTarget);
                  selectLocation(String(formData.get("location") ?? ""));
                }}
              >
                <input
                  name="location"
                  type="text"
                  placeholder="Enter city or PIN code"
                  aria-label="Enter city or PIN code"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-700"
                />

                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800"
                >
                  Apply location
                </button>
              </form>
            )}

            {categories.map(({ name, icon: Icon }) => (
              <button
                key={name}
                type="button"
                onClick={() => {
                  setActiveCategory(name);
                  setMenuOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                  activeCategory === name
                    ? "bg-green-50 font-semibold text-green-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon size={19} />
                <span>{name}</span>
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
