import React from 'react';

const MyProfile = ({ user }) => {
  // Fallback defaults in case data is loading or missing
  const {
    name = "John Doe",
    email = "john.doe@company.com",
    role = "Administrator",
    createdAt = new Date()
  } = user || {};

  // Format the registration date beautifully
  const joinedDate = new Date(createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="pt-10 flex justify-center items-start">
      <div className="w-full max-w-3xl bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        
        {/* Header Banner Accent */}
        <div className="h-32 bg-linear-to-r from-slate-800 to-slate-900 px-8 flex items-end">
          {/* Subtle profile avatar overlap spacer */}
          <div className="w-20 h-20 bg-white rounded-xl border-4 border-white shadow-md flex items-center justify-center translate-y-6">
            <span className="text-xl font-bold text-slate-700 font-mono">
              {name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
            </span>
          </div>
        </div>

        {/* Profile Content Body */}
        <div className="pt-10 pb-8 px-8">
          
          {/* Identity Header */}
          <div className="mb-8 border-b border-slate-100 pb-6">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{name}</h1>
            <p className="text-sm font-medium text-indigo-600 mt-0.5">{role}</p>
          </div>

          {/* Account Details Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Email Field Row */}
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Email Address
              </span>
              <span className="text-sm font-medium text-slate-800 block">
                {email}
              </span>
            </div>

            {/* Role Field Row */}
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Workspace Role
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {role}
              </div>
            </div>

            {/* Created At / Member Since Row */}
            <div className="space-y-1 md:col-span-2 pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Account Created
              </span>
              <span className="text-sm font-medium text-slate-600 font-mono block">
                {joinedDate}
              </span>
            </div>

          </div>

          {/* Optional Footer Security Note */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <p>Your workspace configuration is handled by your enterprise identity provider.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;