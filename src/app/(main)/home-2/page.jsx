"use client";

import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import banner from "@/assets/Banner.webp";
import banner2 from "@/assets/Banner2.webp";
import Farmer1 from "@/assets/Farmer1.webp";
import Farmer2 from "@/assets/Farmer2.webp";
import Farmer3 from "@/assets/Farmer3.webp";
import Farmer4 from "@/assets/Farmer4.webp";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const trustItems = [
  "GST Registered Manufacturer",
  "Since 2018",
  "40+ Products",
  "Pan-India Distribution",
];

const stats = [
  { value: "40+", label: "Products" },
  { value: "6+",  label: "Categories" },
  { value: "2018", label: "Est." },
  { value: "PAN", label: "India Reach" },
];

const categories = [
  {
    title: "Poultry Feed Supplements",
    count: "19 Products",
    desc:  "Growth, immunity, and performance support for broilers and layers.",
    icon:  "🐔",
    accent: true,
  },
  {
    title: "Poultry Feed Additives",
    count: "Targeted Solutions",
    desc:  "Heat stress relief, toxin management, and gut health optimization.",
    icon:  "🌿",
    accent: false,
  },
  {
    title: "Animal Feed Supplements",
    count: "For All Livestock",
    desc:  "Calcium, vitamins, and essential mineral support across species.",
    icon:  "🐄",
    accent: false,
  },
  {
    title: "Cattle Feed Supplements",
    count: "Dairy Focused",
    desc:  "Formulated for dairy cattle productivity and reproductive health.",
    icon:  "🥛",
    accent: false,
  },
  {
    title: "Poultry Disinfectants",
    count: "Farm Hygiene",
    desc:  "Disease prevention through effective farm sanitation solutions.",
    icon:  "🛡️",
    accent: false,
  },
  {
    title: "Mineral Mixtures",
    count: "Macro & Micro",
    desc:  "Liquid calcium and essential mineral supplementation for peak performance.",
    icon:  "⚗️",
    accent: false,
  },
];

const pillars = [
  {
    number: "01",
    title: "Manufacturer Direct",
    desc: "No middlemen, no markups. Consistent quality and competitive pricing straight from our Roorkee facility.",
  },
  {
    number: "02",
    title: "Formulation Expertise",
    desc: "Built on deep knowledge of animal physiology and on-ground farm requirements under Mr. Shambhu Kumar Sharma.",
  },
  {
    number: "03",
    title: "Responsive Support",
    desc: "We're available after every order — for dosage queries, product recommendations, and real results.",
  },
];

const metrics = [
  { value: "40+",  label: "Products",     sub: "Across poultry, cattle & animal nutrition" },
  { value: "6+",   label: "Categories",   sub: "Supplements, additives, disinfectants & more" },
  { value: "2018", label: "Established",  sub: "Serving Indian livestock industry" },
  { value: "PAN",  label: "India",        sub: "Distribution from Roorkee, Haridwar" },
];

const posts = [
  {
    id: 1,
    image: Farmer1,
    date: "May 23, 2026",
    tag: "Insight",
    title: "The Future of Poultry Healthcare",
    excerpt: "New technologies are transforming poultry farming — from advanced vaccines to targeted nutritional solutions.",
    featured: true,
  },
  {
    id: 2,
    image: Farmer2,
    date: "May 20, 2026",
    tag: "Guide",
    title: "Top Challenges Poultry Farmers Face",
    featured: false,
  },
  {
    id: 3,
    image: Farmer3,
    date: "May 15, 2026",
    tag: "Research",
    title: "Why Preventive Care Matters in Poultry",
    featured: false,
  },
  {
    id: 4,
    image: Farmer4,
    date: "May 10, 2026",
    tag: "Nutrition",
    title: "Boosting Poultry Growth & Immunity Naturally",
    featured: false,
  },
];

const audiences = [
  "Poultry Farm Owner",
  "Cattle Farmer",
  "Veterinary Distributor",
  "Agricultural Wholesaler",
];

// ─── SHARED SUB-COMPONENTS ────────────────────────────────────────────────────

const ArrowButton = ({ href, label, className = "" }) => (
  <Link
    href={href}
    className={`group relative overflow-hidden bg-[#af008c] text-white flex items-center gap-3 rounded-full py-[6px] pl-5 pr-[6px] w-max border border-[#af008c] transition-transform duration-300 active:scale-95 ${className}`}
  >
    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
    <span className="z-10 text-sm sm:text-base font-semibold text-white group-hover:text-[#af008c] transition-colors duration-300">
      {label}
    </span>
    <div className="bg-white text-[#af008c] flex items-center justify-center rounded-full aspect-square h-8 w-8 z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-[-45deg] group-hover:bg-[#af008c] group-hover:text-white">
      <MdOutlineArrowRightAlt size={22} />
    </div>
  </Link>
);

const Eyebrow = ({ label }) => (
  <div className="flex items-center gap-2 mb-5">
    <span className="h-px w-8 bg-[#af008c]" />
    <span className="text-[#af008c] text-xs font-semibold tracking-[0.18em] uppercase">
      {label}
    </span>
  </div>
);

// ─── SECTION 1 — HERO / BANNER ────────────────────────────────────────────────

const Banner = () => (
  <section className="relative w-full h-[420px] sm:h-[520px] md:h-[620px] lg:h-[88vh] overflow-hidden rounded-2xl md:rounded-[2rem]">
    <Image
      src={banner}
      alt="Shiv Sunder Agrovet — Poultry and Livestock Feed Supplements"
      fill
      className="object-cover object-[62%_center]"
      priority
    />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

    {/* Left magenta accent line */}
    <div className="absolute top-0 left-0 w-1 h-full bg-[#af008c] rounded-l-[2rem]" />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end pb-10 md:pb-16 px-6 sm:px-10 md:pl-16 lg:pl-20">

      <div className="flex items-center gap-2 mb-4 md:mb-5">
        <span className="h-px w-8 bg-[#af008c]" />
        <span className="text-[#af008c] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
          Roorkee, Uttarakhand
        </span>
      </div>

      <h1 className="text-white font-bold leading-[1.05] tracking-tight mb-4 md:mb-6 text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] max-w-2xl">
        Science-Backed.{" "}
        <span className="text-[#af008c]">Farm-Proven.</span>
      </h1>

      <p className="text-white/75 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md mb-7 md:mb-10">
        Trusted feed supplements for poultry &amp; livestock — manufactured
        directly in Roorkee for better immunity, growth, and farm profitability.
      </p>

      <div className="flex flex-row flex-wrap gap-3">
        <Link
          href="/products"
          className="group relative overflow-hidden bg-[#af008c] text-white rounded-full px-6 py-3 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:bg-[#8f0072] active:scale-95"
        >
          Explore Products
          <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
        <Link
          href="/contact"
          className="bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full px-6 py-3 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:bg-white/20 active:scale-95"
        >
          Talk to Our Team
        </Link>
      </div>

      {/* Trust bar */}
      <div className="mt-8 md:mt-12 pt-6 border-t border-white/20 flex flex-wrap gap-x-6 gap-y-2">
        {trustItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[#af008c] text-xs">✦</span>
            <span className="text-white/60 text-xs sm:text-sm tracking-wide">{item}</span>
          </div>
        ))}
      </div>

    </div>
  </section>
);

// ─── SECTION 2 — PROBLEM / SOLUTION ──────────────────────────────────────────

const ProblemSolution = () => (
  <section className="px-4 sm:px-8 md:px-10 pt-20 md:pt-28">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div>
          <Eyebrow label="Why It Matters" />
          <h2 className="text-[#1a1a1a] text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight mb-6">
            Feed Right. <br />
            <span className="text-[#af008c]">Farm Better.</span>
          </h2>
          <p className="text-[#444] text-base sm:text-[17px] font-light leading-relaxed mb-6">
            Poor feed quality quietly drains farm profitability — through slower growth, weaker immunity,
            higher mortality, and lower milk or egg output. At Shiv Sunder Agrovet, every supplement we
            manufacture is formulated to directly reverse these losses.
          </p>
          <p className="text-[#444] text-base sm:text-[17px] font-light leading-relaxed">
            From growth boosters and immunity builders to digestive tonics and mineral mixtures — our
            range is built for measurable results under real farm conditions across India.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[130px] ${
                i === 0 ? "bg-[#af008c]" : "bg-[#faf5f9] border border-[#e8d0e4]"
              }`}
            >
              <span className={`text-4xl sm:text-5xl font-bold tracking-tight ${
                i === 0 ? "text-white" : "text-[#af008c]"
              }`}>
                {s.value}
              </span>
              <span className={`text-sm font-medium tracking-wide mt-2 ${
                i === 0 ? "text-white/75" : "text-[#555]"
              }`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

// ─── SECTION 3 — PRODUCT CATEGORIES ──────────────────────────────────────────

const ProductCategories = () => (
  <section className="px-4 sm:px-8 md:px-10 pt-20 md:pt-28">
    <div className="max-w-7xl mx-auto">

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14">
        <div>
          <Eyebrow label="Product Range" />
          <h2 className="text-[#1a1a1a] text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.1] tracking-tight">
            Every Stage, <span className="text-[#af008c]">Covered.</span>
          </h2>
        </div>
        <ArrowButton href="/products" label="View Full Range" className="self-start sm:self-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {categories.map((cat, i) => (
          <Link
            key={i}
            href="/products"
            className={`group relative rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(175,0,140,0.12)] cursor-pointer ${
              cat.accent
                ? "bg-[#af008c] border-[#af008c]"
                : "bg-white border-[#e8d0e4] hover:border-[#af008c]/40"
            }`}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-2xl">{cat.icon}</span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                cat.accent ? "bg-white/20 text-white" : "bg-[#faf5f9] text-[#af008c]"
              }`}>
                {cat.count}
              </span>
            </div>
            <h3 className={`text-lg font-bold leading-snug mb-2 ${
              cat.accent ? "text-white" : "text-[#1a1a1a]"
            }`}>
              {cat.title}
            </h3>
            <p className={`text-sm font-light leading-relaxed ${
              cat.accent ? "text-white/75" : "text-[#555]"
            }`}>
              {cat.desc}
            </p>
            <div className={`mt-5 flex items-center gap-1 text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              cat.accent ? "text-white" : "text-[#af008c]"
            }`}>
              View Products <MdOutlineArrowRightAlt size={16} />
            </div>
          </Link>
        ))}
      </div>

    </div>
  </section>
);

// ─── SECTION 4 — WHY US ───────────────────────────────────────────────────────

const WhyUs = () => (
  <section className="px-4 sm:px-8 md:px-10 pt-20 md:pt-28">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Image column */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-[#af008c]/10 z-0" />
          <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-2xl bg-[#af008c]/6 z-0" />
          <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src={banner2}
              alt="Shiv Sunder Agrovet manufacturing facility"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", display: "block" }}
              className="rounded-2xl md:rounded-3xl"
            />
          </div>
          <div className="absolute bottom-6 left-6 z-20 bg-[#af008c] text-white rounded-xl px-4 py-3">
            <p className="text-2xl font-bold leading-none">Since</p>
            <p className="text-3xl font-bold leading-none">2018</p>
          </div>
        </div>

        {/* Text column */}
        <div>
          <Eyebrow label="Why Choose Us" />
          <h2 className="text-[#1a1a1a] text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.1] tracking-tight mb-8">
            Farms Trust Us. <br />
            <span className="text-[#af008c]">Here&apos;s Why.</span>
          </h2>

          <div className="flex flex-col gap-6 mb-8">
            {pillars.map((p, i) => (
              <div key={i} className="flex gap-5 items-start group">
                <span className="shrink-0 w-10 h-10 rounded-full border border-[#e8d0e4] flex items-center justify-center text-xs font-bold text-[#af008c] group-hover:bg-[#af008c] group-hover:text-white group-hover:border-[#af008c] transition-all duration-300">
                  {p.number}
                </span>
                <div>
                  <h3 className="text-[#1a1a1a] text-base font-bold mb-1">{p.title}</h3>
                  <p className="text-[#555] text-sm font-light leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <ArrowButton href="/about-us" label="Learn More About Us" />
        </div>

      </div>
    </div>
  </section>
);

// ─── SECTION 5 — NUMBERS ─────────────────────────────────────────────────────

const Numbers = () => (
  <section className="px-4 sm:px-8 md:px-10 pt-20 md:pt-28">
    <div className="max-w-7xl mx-auto">
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#1a1a1a] px-8 sm:px-12 py-12 sm:py-16">

        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#af008c]/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#af008c]/8 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10">
          <Eyebrow label="Our Work in Numbers" />
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-12 max-w-md">
            Results That <span className="text-[#af008c]">Speak.</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-white leading-none tracking-tight">
                  {m.value}
                </span>
                <span className="text-[#af008c] text-sm font-bold tracking-wide uppercase mt-1">
                  {m.label}
                </span>
                <span className="text-white/50 text-xs font-light leading-snug mt-1">
                  {m.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ─── SECTION 6 — KNOWLEDGE CENTRE ────────────────────────────────────────────

const KnowledgeCenter = () => {
  const featured = posts.find((p) => p.featured);
  const side     = posts.filter((p) => !p.featured);

  return (
    <section className="px-4 sm:px-8 md:px-10 pt-20 md:pt-28">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <Eyebrow label="Knowledge Centre" />
            <h2 className="text-[#1a1a1a] text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.1] tracking-tight">
              For Farmers <span className="text-[#af008c]">&amp; Vets.</span>
            </h2>
          </div>
          <ArrowButton href="/knowledge-center" label="Browse All Articles" className="self-start sm:self-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

          {/* Featured */}
          <Link
            href="#"
            className="group rounded-2xl overflow-hidden border border-[#e8d0e4] bg-white hover:border-[#af008c]/40 hover:shadow-[0_8px_32px_rgba(175,0,140,0.1)] transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full h-52 sm:h-64 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-[#af008c] text-white text-xs font-bold px-3 py-1 rounded-full">
                {featured.tag}
              </span>
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <p className="text-[#888] text-xs mb-2">{featured.date}</p>
              <h3 className="text-[#1a1a1a] text-lg sm:text-xl font-bold leading-snug mb-3 group-hover:text-[#af008c] transition-colors duration-200">
                {featured.title}
              </h3>
              <p className="text-[#555] text-sm font-light leading-relaxed flex-1">
                {featured.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-1 text-[#af008c] text-xs font-bold tracking-wide">
                Read Article <MdOutlineArrowRightAlt size={15} />
              </div>
            </div>
          </Link>

          {/* Side posts */}
          <div className="flex flex-col gap-4">
            {side.map((post) => (
              <Link
                key={post.id}
                href="#"
                className="group flex gap-4 rounded-2xl overflow-hidden border border-[#e8d0e4] bg-white hover:border-[#af008c]/40 hover:shadow-[0_4px_16px_rgba(175,0,140,0.08)] transition-all duration-300 p-3 sm:p-4"
              >
                <div className="relative w-24 sm:w-32 shrink-0 rounded-xl overflow-hidden self-stretch min-h-[80px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center py-1 gap-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#faf5f9] text-[#af008c] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {post.tag}
                    </span>
                    <p className="text-[#888] text-xs">{post.date}</p>
                  </div>
                  <h4 className="text-[#1a1a1a] text-sm sm:text-base font-bold leading-snug group-hover:text-[#af008c] transition-colors duration-200">
                    {post.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── SECTION 7 — CONTACT CTA ──────────────────────────────────────────────────

const ContactCTA = () => (
  <section className="px-4 sm:px-8 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28">
    <div className="max-w-7xl mx-auto">
      <div className="relative rounded-2xl md:rounded-3xl bg-[#faf5f9] border border-[#e8d0e4] overflow-hidden px-8 sm:px-12 md:px-16 py-14 sm:py-16 md:py-20">

        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#af008c]/8 -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-20 w-40 h-40 rounded-full bg-[#af008c]/6 translate-y-1/2 pointer-events-none" />
        <div className="absolute top-0 left-0 h-1 w-24 bg-[#af008c] rounded-t-3xl" />

        <div className="relative z-10 max-w-2xl">
          <Eyebrow label="Get In Touch" />

          <h2 className="text-[#1a1a1a] text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.1] tracking-tight mb-5">
            Need a Reliable <span className="text-[#af008c]">Supplier?</span>
          </h2>

          <p className="text-[#444] text-base sm:text-[17px] font-light leading-relaxed mb-7">
            Whether you&apos;re a farm owner, distributor, or wholesaler — tell us your requirements
            and we&apos;ll suggest the right products. Our team responds within 24 hours.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {audiences.map((a, i) => (
              <span
                key={i}
                className="bg-white border border-[#e8d0e4] text-[#555] text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {a}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <ArrowButton href="/contact" label="Send Us an Enquiry" />
            <p className="text-[#888] text-xs leading-snug">
              No sales pressure.{" "}
              <span className="text-[#555]">Just a straightforward conversation about your needs.</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="px-4 sm:px-8 md:px-10 pt-4 sm:pt-6">
        <Banner />
      </div>
      <ProblemSolution />
      <ProductCategories />
      <WhyUs />
      <Numbers />
      <KnowledgeCenter />
      <ContactCTA />
    </main>
  );
}