import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PromoBanner {
  eyebrow: string;
  heading: string;
  description: string;
  cta: string;
  href: string;
  /** Path relative to /public */
  image: string;
  /** Alt text for the background image */
  imageAlt: string;
  /** Subtle solid overlay on the left so text stays readable */
  overlayFrom: string;
  eyebrowColor: string;
  headingColor: string;
  descriptionColor: string;
  btnClass: string;
}

const banners: PromoBanner[] = [
  {
    eyebrow: "UPGRADE YOUR EVERYDAY",
    heading: "Tech that\nmoves you.",
    description: "Discover gadgets and accessories.",
    cta: "Explore tech",
    href: "#tech",
    image: "/Images/hero/tech.png",
    imageAlt: "Headphones, smartphone, smartwatch and accessories on a marble surface",
    overlayFrom: "from-[#d6ede0]/90",
    eyebrowColor: "text-green-800",
    headingColor: "text-slate-900",
    descriptionColor: "text-slate-700",
    btnClass: "bg-green-800 text-white hover:bg-green-900",
  },
  {
    eyebrow: "FIND YOUR STYLE",
    heading: "Make it\nyours.",
    description: "Explore styles for every day.",
    cta: "Explore fashion",
    href: "#fashion",
    image: "/Images/hero/fashion.png",
    imageAlt: "Handbag, sneakers, folded knitwear and sunglasses on a warm beige surface",
    overlayFrom: "from-[#f5e6d3]/90",
    eyebrowColor: "text-orange-700",
    headingColor: "text-slate-900",
    descriptionColor: "text-slate-700",
    btnClass: "bg-orange-500 text-white hover:bg-orange-600",
  },
  {
    eyebrow: "LOVE YOUR SPACE",
    heading: "Refresh\nyour home.",
    description: "Little things, better living.",
    cta: "Explore home",
    href: "#home",
    image: "/Images/hero/home.png",
    imageAlt: "Couch, lamp, plant and coffee table in a bright modern living room",
    overlayFrom: "from-[#dddaf5]/90",
    eyebrowColor: "text-indigo-700",
    headingColor: "text-slate-900",
    descriptionColor: "text-slate-700",
    btnClass: "bg-indigo-600 text-white hover:bg-indigo-700",
  },
];

export default function PromoBanners() {
  return (
    <section
      aria-label="Promotional categories"
      className="bg-[#f4f0e8] px-4 pb-10 pt-5 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {banners.map(
            ({
              eyebrow,
              heading,
              description,
              cta,
              href,
              image,
              imageAlt,
              overlayFrom,
              eyebrowColor,
              headingColor,
              descriptionColor,
              btnClass,
            }) => (
              <li key={eyebrow} className="group">
                {/*
                  Card: full-bleed photo on the right half,
                  left-to-right gradient overlay keeps text crisp.
                */}
                <div className="relative h-[260px] overflow-hidden rounded-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl sm:h-[280px]">
                  {/* Background photo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={imageAlt}
                    className="absolute inset-0 h-full w-full object-cover object-right transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Left-to-right overlay: opaque on the left, fades to transparent */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-r ${overlayFrom} via-transparent to-transparent`}
                  />

                  {/* Text content pinned to the top-left */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div>
                      <p
                        className={`text-[10px] font-bold uppercase tracking-widest ${eyebrowColor}`}
                      >
                        {eyebrow}
                      </p>
                      <h2
                        className={`mt-2 whitespace-pre-line text-[1.6rem] font-extrabold leading-tight tracking-tight ${headingColor}`}
                      >
                        {heading}
                      </h2>
                      <p className={`mt-1 text-sm leading-relaxed ${descriptionColor}`}>
                        {description}
                      </p>
                    </div>

                    <Link
                      href={href}
                      aria-label={cta}
                      className={`inline-flex w-fit items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 active:scale-95 ${btnClass}`}
                    >
                      {cta}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
