'use client';

import React from 'react';
import Image from 'next/image';
import { GithubIcon } from '@components/icons';
import LinkedinIcon from '@components/icons/linkedin-icon';

export default function HomePage() {
  return (
    <div className="relative z-0 flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-zinc-200 via-transparent to-transparent">
      <div className="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-16">
        <div className="p-200 col-span-4 flex items-center justify-center overflow-hidden rounded-2xl bg-pink-200 md:col-span-4 md:h-52">
          <div className="flex flex-col items-center space-y-4 py-8 px-6 md:flex-row md:space-y-0 md:space-x-4">
            <Image
              src={'/me.jpeg'}
              alt={'Tim Twiest'}
              width={96}
              height={96}
              className={
                'h-24 w-24 rounded-full border border-pink-500 object-cover'
              }
            />
            <div className="space-y-1">
              <h1 className="font-title text-center text-xl font-bold tracking-tighter text-pink-900 md:text-left">
                Tim Twiest
              </h1>
              <span className="text-center text-pink-800 md:text-left">
                Full-stack Developer at{' '}
                <a
                  className="hover:border-b-2 hover:border-dotted hover:border-pink-900"
                  href={'https://www.pancompany.com/'}
                >
                  PanCompany &#8599;
                </a>
              </span>
            </div>
          </div>
        </div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/timtwiest"
          className="group col-span-2 h-full"
        >
          <div className="flex h-full transform-gpu items-center justify-center rounded-2xl bg-zinc-900 text-4xl text-white transition-all duration-500 will-change-[outline,_transform] active:scale-100 group-hover:scale-95">
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  );
}
