import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiCalendar, FiClock, FiShare2, FiChevronRight } from 'react-icons/fi';
import { getBlogBySlug } from '@/actions/server/Blogs';

const Details = async ({ params }) => {
    const { slug } = await params;
    const post = await getBlogBySlug(slug);

    if (!post) {
        return (
            <div className="min-h-[70vh] flex flex-col justify-center items-center gap-4">
                <h2 className="text-2xl font-bold text-base-content">Article Not Found</h2>
                <Link href="/" className="text-primary hover:underline text-sm">← Back to home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">

            {/* ── TOP NAV BAR ─────────────────────────────────────── */}
            <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#af008c] transition-colors duration-200"
                    >
                        <FiArrowLeft className="transition-transform duration-200 group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                    <button
                        className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-[#af008c] transition-colors duration-200 uppercase tracking-widest"
                        title="Share Article"
                    >
                        <FiShare2 size={14} />
                        Share
                    </button>
                </div>
            </div>

            {/* ── HERO ────────────────────────────────────────────── */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-10 pb-10 sm:pb-14 max-w-6xl mx-auto">
                    <span className="inline-block bg-[#af008c] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                        {post.tag}
                    </span>

                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight max-w-3xl mb-5">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-5 text-white/70 text-xs font-medium">
                        {post.author && (
                            <div className="flex items-center gap-2.5">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#af008c]/60 shrink-0">
                                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" sizes="32px" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm leading-none">{post.author.name}</p>
                                    <p className="text-white/50 text-[11px] mt-0.5">{post.author.role}</p>
                                </div>
                            </div>
                        )}
                        <span className="hidden sm:block w-px h-4 bg-white/20" />
                        <div className="flex items-center gap-1.5">
                            <FiCalendar size={12} />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FiClock size={12} />
                            {post.readingTime}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MAIN CONTENT AREA ───────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                {/* LEFT: Article body */}
                <article className="lg:col-span-8">

                    <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed border-l-4 border-[#af008c] pl-5 mb-10">
                        {post.excerpt}
                    </p>

                    <div className="space-y-6 text-[15px] sm:text-base text-gray-700 leading-relaxed font-light">
                        {post.content && post.content.map((block, index) => {
                            switch (block.type) {

                                case 'heading':
                                    return (
                                        <h2 key={index} className="text-xl sm:text-2xl font-bold text-[#1a1a1a] tracking-tight pt-6 pb-1">
                                            {block.text}
                                        </h2>
                                    );

                                case 'paragraph':
                                    return (
                                        <p key={index} className="leading-[1.85]">
                                            {block.text}
                                        </p>
                                    );

                                case 'blockquote':
                                    return (
                                        <blockquote key={index} className="relative my-8 pl-6 pr-4 py-5 bg-[#faf5f9] rounded-r-xl border-l-4 border-[#af008c]">
                                            <p className="text-[#3d1a35] italic font-medium leading-relaxed text-[15px]">
                                                "{block.text}"
                                            </p>
                                        </blockquote>
                                    );

                                case 'takeaways':
                                    return (
                                        <div key={index} className="my-10 rounded-2xl border border-[#e8d0e4] bg-[#faf5f9] overflow-hidden">
                                            <div className="bg-[#af008c] px-6 py-4 flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-white/60" />
                                                <h3 className="text-white font-bold text-sm tracking-wide uppercase">
                                                    {block.title}
                                                </h3>
                                            </div>
                                            <ul className="px-6 py-5 space-y-3">
                                                {block.items && block.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-[#3d1a35] font-medium">
                                                        <FiChevronRight className="text-[#af008c] mt-0.5 shrink-0" size={16} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );

                                default:
                                    return null;
                            }
                        })}
                    </div>

                    {post.author && (
                        <div className="mt-14 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-5">
                                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 ring-2 ring-[#af008c]/20">
                                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" sizes="64px" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#af008c] mb-1">Written by</p>
                                    <h4 className="text-[#1a1a1a] font-bold text-lg leading-none">{post.author.name}</h4>
                                    <p className="text-gray-500 text-sm mt-1">{post.author.role}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </article>

                {/* RIGHT: Sidebar */}
                <aside className="lg:col-span-4 space-y-6 sticky top-20 self-start">

                    <div className="rounded-2xl bg-[#1a1a1a] p-6 text-white">
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[#af008c] mb-3">Stay Updated</p>
                        <h3 className="text-xl font-bold leading-snug mb-3">
                            Get the latest farm science in your inbox
                        </h3>
                        <p className="text-white/50 text-xs leading-relaxed mb-5">
                            Weekly insights on poultry nutrition, disease control, and veterinary best practices.
                        </p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#af008c] transition-colors"
                            />
                            <button className="w-full bg-[#af008c] hover:bg-[#8f0072] text-white font-semibold text-sm py-2.5 rounded-xl transition-colors duration-200">
                                Subscribe to Insights
                            </button>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#e8d0e4] bg-[#faf5f9] p-6">
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[#af008c] mb-3">Need a Solution?</p>
                        <h3 className="text-[#1a1a1a] font-bold text-lg leading-snug mb-2">
                            Talk to our veterinary team
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed mb-5">
                            Get personalized product recommendations for your farm's specific challenges.
                        </p>
                        <Link
                            href="/contact-us"
                            className="flex items-center justify-center gap-2 w-full bg-[#1a1a1a] hover:bg-[#af008c] text-white font-semibold text-sm py-2.5 rounded-xl transition-colors duration-200"
                        >
                            Get a Free Consultation
                        </Link>
                    </div>

                    <div className="rounded-2xl border border-gray-100 p-5 space-y-4">
                        <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Article Details</p>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 font-medium">Category</span>
                                <span className="bg-[#faf5f9] text-[#af008c] text-xs font-bold px-2.5 py-1 rounded-full">{post.tag}</span>
                            </div>
                            <div className="flex justify-between items-center border-t border-gray-50 pt-3">
                                <span className="text-gray-400 font-medium">Published</span>
                                <span className="text-[#1a1a1a] font-semibold">{post.date}</span>
                            </div>
                            <div className="flex justify-between items-center border-t border-gray-50 pt-3">
                                <span className="text-gray-400 font-medium">Read time</span>
                                <span className="text-[#1a1a1a] font-semibold">{post.readingTime}</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* ── BOTTOM CTA STRIP ────────────────────────────────── */}
            <div className="bg-[#1a1a1a] mt-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-[#af008c] text-xs font-bold tracking-widest uppercase mb-2">Ready to act?</p>
                        <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
                            Find the right supplement <br className="hidden sm:block" /> for your flock.
                        </h3>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                        <Link
                            href="/our-products"
                            className="px-6 py-3 bg-[#af008c] hover:bg-[#8f0072] text-white font-semibold text-sm rounded-full transition-colors duration-200 text-center"
                        >
                            Explore Products
                        </Link>
                        <Link
                            href="/contact-us"
                            className="px-6 py-3 border border-white/20 hover:border-white/50 text-white font-semibold text-sm rounded-full transition-colors duration-200 text-center"
                        >
                            Contact Our Team
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;