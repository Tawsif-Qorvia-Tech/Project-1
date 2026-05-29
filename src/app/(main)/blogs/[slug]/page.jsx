import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiBookmark, FiShare2, FiCalendar, FiClock, FiMail, FiChevronRight } from 'react-icons/fi';
import { getBlogBySlug } from '@/actions/server/Blogs';


const Details = async ({ params }) => {
    const { slug } = params;
    const post = await getBlogBySlug(slug);

    return (
        <div className="min-h-screen bg-base-200 text-base-content antialiased">
            
            {/* Sticky Navigation / Header Actions */}
            <div className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur-md">
                <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between">
                    <Link href="/farmer" className="btn btn-ghost btn-sm gap-2 normal-case text-base-content/70 hover:text-base-content">
                        <FiArrowLeft className="text-base" />
                        <span>Back to insights</span>
                    </Link>
                    <div className="flex gap-1">
                        <button className="btn btn-ghost btn-circle btn-sm text-base-content/60 hover:text-primary" title="Bookmark">
                            <FiBookmark className="text-lg" />
                        </button>
                        <button className="btn btn-ghost btn-circle btn-sm text-base-content/60 hover:text-primary" title="Share Article">
                            <FiShare2 className="text-lg" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Layout Container */}
            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column: Article Body */}
                <article className="lg:col-span-8 card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
                    
                    {/* Hero Context Image via Next.js Image Component */}
                    <div className="w-full aspect-[2/1] relative bg-base-300">
                        <Image 
                            src={post.image} 
                            alt={post.title} 
                            fill
                            sizes="(max-w-7xl) 100vw, 800px"
                            priority // Speeds up LCP (Largest Contentful Paint) for above-the-fold image
                            className="object-cover"
                        />
                    </div>

                    <div className="card-body p-6 sm:p-8 lg:p-10">
                        {/* Meta Tags */}
                        <div className="flex items-center gap-2">
                            <span className="badge badge-primary badge-outline uppercase font-semibold tracking-wider text-xs px-3 py-2.5">
                                {post.tag}
                            </span>
                        </div>

                        {/* Title Block */}
                        <h1 className="card-title text-3xl font-bold tracking-tight text-base-content sm:text-4xl mt-4 leading-tight">
                            {post.title}
                        </h1>
                        
                        <p className="text-lg text-base-content/70 leading-relaxed max-w-3xl mt-2 grow-0">
                            {post.excerpt}
                        </p>

                        {/* Author & Read Time Metadata Bar */}
                        <div className="flex flex-wrap items-center gap-6 my-6 border-y border-base-200 py-4 text-sm text-base-content/60">
                            {post.author && (
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative overflow-hidden">
                                            <Image 
                                                src={post.author.avatar} 
                                                alt={post.author.name}
                                                fill
                                                sizes="40px"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-base-content">{post.author.name}</p>
                                        <p className="text-xs text-base-content/50">{post.author.role}</p>
                                    </div>
                                </div>
                            )}
                            <div className="hidden sm:block divider divider-horizontal m-0 h-8 bg-base-300 w-[1px]" />
                            <div className="flex items-center gap-1.5">
                                <FiCalendar className="text-base" />
                                <span>{post.date}</span>
                            </div>
                            <div className="hidden sm:block divider divider-horizontal m-0 h-8 bg-base-300 w-[1px]" />
                            <div className="flex items-center gap-1.5">
                                <FiClock className="text-base" />
                                <span>{post.readingTime}</span>
                            </div>
                        </div>

                        {/* Structured Database Content Renderer */}
                        <div className="prose prose-slate max-w-none 
                            prose-headings:text-base-content prose-headings:font-bold
                            prose-p:leading-relaxed prose-p:text-base-content/80 
                            prose-strong:text-base-content">
                            
                            {post.content && post.content.map((block, index) => {
                                switch (block.type) {
                                    case 'heading':
                                        return (
                                            <h2 key={index} className="text-2xl mt-8 mb-4">
                                                {block.text}
                                            </h2>
                                        );
                                    case 'paragraph':
                                        return (
                                            <p key={index} className="mb-4">
                                                {block.text}
                                            </p>
                                        );
                                    case 'blockquote':
                                        return (
                                            <blockquote key={index} className="my-6 italic border-l-4 border-primary bg-base-200 p-4 rounded-r-lg text-base-content/70">
                                                "{block.text}"
                                            </blockquote>
                                        );
                                    case 'takeaways':
                                        return (
                                            <div key={index} className="my-8 card bg-base-200 border border-base-300 rounded-xl">
                                                <div className="card-body p-6">
                                                    <h3 className="card-title text-lg font-bold text-base-content m-0">{block.title}</h3>
                                                    <ul className="mt-4 space-y-3 text-sm text-base-content/80 list-none pl-0">
                                                        {block.items && block.items.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <FiChevronRight className="text-primary mt-0.5 shrink-0 text-base" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        );
                                    default:
                                        return null;
                                }
                            })}
                        </div>

                        {/* Author Profile Footer block */}
                        {post.author && (
                            <div className="mt-12 card bg-base-200 border border-base-300 rounded-2xl">
                                <div className="card-body flex-col sm:flex-row items-center gap-6 p-6 sm:p-8">
                                    <div className="avatar">
                                        <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative overflow-hidden">
                                            <Image 
                                                src={post.author.avatar} 
                                                alt={post.author.name}
                                                fill
                                                sizes="80px"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h4 className="text-lg font-bold text-base-content">{post.author.name}</h4>
                                        <p className="text-sm font-medium text-primary">{post.author.role}</p>
                                        <p className="mt-2 text-sm text-base-content/60 leading-relaxed">
                                            Expert analysis and technical updates provided directly by industry leaders and specialists.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </article>

                {/* Right Column: Sidebar Panels */}
                <aside className="lg:col-span-4 space-y-6">
                    {/* Newsletter Container Block */}
                    <div className="card bg-neutral text-neutral-content shadow-xl border border-neutral-focus">
                        <div className="card-body p-6">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-content">
                                <FiMail className="text-xl" />
                            </div>
                            <h3 className="card-title text-xl font-bold mt-4 text-neutral-content">Stay Ahead of the Curve</h3>
                            <p className="text-sm text-neutral-content/70 leading-relaxed grow-0">
                                Get technical agribusiness analysis and actionable veterinary data briefs sent straight to your inbox weekly.
                            </p>
                            <form onSubmit={(e) => e.preventDefault()} className="mt-4 form-control gap-3">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="input input-bordered w-full text-base-content bg-base-100 border-none focus:outline-primary"
                                    required
                                />
                                <button className="btn btn-primary w-full normal-case font-bold">
                                    Subscribe to Insights
                                </button>
                            </form>
                        </div>
                    </div>
                </aside>

            </main>
        </div>
    );
};

export default Details;