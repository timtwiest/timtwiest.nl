'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="relative z-0 flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-blue-200 via-transparent to-transparent">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-5 pt-12 pb-12">
          <h1 className="text-[26px] font-bold leading-[32px] text-black sm:text-3xl md:text-5xl">
            Tim Twiest
          </h1>
          <span className="text-base font-medium text-gray-500 md:text-lg lg:text-xl">
            <span className="text-gray-900">Full-stack</span> Developer @
            PanCompany
          </span>
        </div>
      </div>
    </div>
  );
}
