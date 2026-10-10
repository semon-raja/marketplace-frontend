
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";



export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0e8]">
      {/* Background image — positioned right so products stay in frame */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover"
        style={{
          backgroundImage: "url('/Images/hero/hero.jpg')",
          backgroundPosition: "right center",
        }}
      />

      {/*
        Overlay strategy:
        • Left ~50 %  → solid #faf9f6 so text stays perfectly readable
        • 50 – 65 %  → quick fade to transparent
        • Right half → fully transparent, image shows at natural colour
        A subtle dark-edge vignette on the far right prevents the image
        from feeling cut off against the section boundary.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, #faf9f6 42%, #faf9f6cc 54%, transparent 68%)",
        }}
      />
      {/* Soft bottom vignette keeps the section edge clean */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#f4f0e8]/60 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-medium text-green-800 backdrop-blur-sm">
            <Sparkles size={16} />
            The new way to shop local
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Everything you love.
            <span className="mt-2 block text-green-700">
              Closer than ever.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Discover great products from trusted local stores,
            with convenient delivery right to your doorstep.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800 active:scale-95"
            >
              Explore products
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#stores"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/90 px-6 py-3 font-semibold text-slate-800 transition hover:border-green-700 hover:text-green-700 active:scale-95"
            >
              Discover local stores
            </Link>
          </div>
        </div>


      </div>
    </section>
  );
}
