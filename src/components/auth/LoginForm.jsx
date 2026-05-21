"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { verifyAdmin } from '@/actions/server/auth';

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    try {
      const res = await verifyAdmin(email, password);

      if (res?.success) {
        alert(`Welcome ${res.user.email} (${res.user.role})`);
        router.push('/dashboard');
      } else {
        alert(res.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('Login error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center gap-0 md:gap-20 bg-gradient-to-br from-base-300 via-base-200 to-primary/10 px-4">
      
      {/* Decorative Left Side for Tablet/Desktop (Utilizing your gap-20) */}
      <div className="hidden md:flex flex-col max-w-sm text-left">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          Welcome Back.
        </h1>
        <p className="mt-4 text-base-content/70 text-lg leading-relaxed">
          Log in to access your dashboard, manage your products, and see what is new today.
        </p>
      </div>

      {/* Main Login Card */}
      <div className="card w-full max-w-md shadow-2xl bg-base-100/80 backdrop-blur-md border border-base-content/5 hover:shadow-primary/5 transition-all duration-300">
        <div className="card-body p-8 sm:p-10">
          
          {/* Header */}
          <div className="space-y-2 text-center mb-4">
            <h2 className="text-3xl font-bold tracking-tight text-base-content">
              Sign In
            </h2>
            <p className="text-sm text-base-content/60">
              Enter your details below to get started
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Input Group */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium opacity-70">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered w-full bg-base-200/50 focus:input-primary transition-all duration-200"
                required
              />
            </div>

            {/* Password Input Group */}
            <div className="form-control w-full">
              <div className="flex justify-between items-center">
                <label className="label">
                  <span className="label-text font-medium opacity-70">Password</span>
                </label>
              </div>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-base-200/50 focus:input-primary transition-all duration-200"
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn btn-primary w-full mt-2 normal-case text-base tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            >
              Sign In to Account
            </button>
          </form>

        </div>
      </div>
      
    </div>
  );
};

export default LoginForm;