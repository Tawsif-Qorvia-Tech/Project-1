import { getBlogs } from "@/actions/server/Blogs";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const ArrowButton = ({ href, label, className = "" }) => (
  <Link
    href={href}
    className={`group relative overflow-hidden bg-[#af008c] text-white flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 w-max border border-[#af008c] transition-transform duration-300 active:scale-95 ${className}`}
  >
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
    <span className="z-10 text-sm sm:text-base font-semibold text-white group-hover:text-[#af008c] transition-colors duration-300">
      {label}
    </span>
    <div className="bg-white text-[#af008c] flex items-center justify-center rounded-full aspect-square h-8 w-8 z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-45 group-hover:bg-[#af008c] group-hover:text-white">
      <MdOutlineArrowRightAlt size={22} />
    </div>
  </Link>
);

const Farmers = async () => {
  const posts = await getBlogs();

  const featured = posts?.find((p) => p.featured);
  const side = posts?.filter((p) => !p.featured) || [];

  if (!posts || posts.length === 0) return null;

  return (
    <section className="px-4 sm:px-8 md:px-10 pt-20 md:pt-28">
      <div className="max-w-7xl mx-auto">
        {/* Clean Header Block */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-[#1a1a1a] text-5xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.1] tracking-tight">
            For Farmers <span className="text-[#af008c]">&amp; Vets.</span>
          </h2>
        </div>

        {/* Article Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Featured Article Card */}
          {featured && (
            <Link
              href={`/blogs/${featured.slug || "#"}`}
              className="group rounded-2xl overflow-hidden border border-[#e8d0e4] bg-white hover:border-[#af008c]/40 hover:shadow-[0_8px_32px_rgba(175,0,140,0.1)] transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-52 sm:h-64 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  unoptimized
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
          )}

          {/* Side Articles Column List */}
          <div className="flex flex-col gap-4">
            {side.map((post) => (
              <Link
                key={post._id || post.id}
                href={`/blogs/${post.slug || "#"}`}
                className="group flex gap-4 rounded-2xl overflow-hidden border border-[#e8d0e4] bg-white hover:border-[#af008c]/40 hover:shadow-[0_4px_16px_rgba(175,0,140,0.08)] transition-all duration-300 p-4 sm:p-6"
              >
                {/* 1. Increased the width scaling and bumped min-height constraint */}
                <div className="relative w-28 sm:w-40 shrink-0 rounded-xl overflow-hidden self-stretch min-h-[110px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                {/* 2. Switched from py-1 to py-3 to expand the spacing around content layout */}
                <div className="flex flex-col justify-center py-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#faf5f9] text-[#af008c] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {post.tag}
                    </span>
                    <p className="text-[#888] text-xs">{post.date}</p>
                  </div>
                  <h4 className="text-[#1a1a1a] text-sm sm:text-lg font-bold leading-snug group-hover:text-[#af008c] transition-colors duration-200">
                    {post.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Center-aligned CTA button at the bottom of the section */}
        <div className="mt-12 md:mt-16 flex justify-center w-full">
          <ArrowButton href="/knowledge-center" label="Browse All Articles" />
        </div>
      </div>
    </section>
  );
};

export default Farmers;
