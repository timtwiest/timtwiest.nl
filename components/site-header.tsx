'use client';

import React from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';

export function SiteHeader({}) {
  return (
    <header className="container">
      <div className="flex items-center justify-between border-b py-4">
        <div className="flex items-center space-x-2">
          <div className="flex flex-col space-y-1 text-sm leading-none">
            <Link href="/" className="flex flex-col">
              <span className="text-lg font-bold">Tim Twiest</span>
              <span>Turns out I create, break, and fix things.</span>
            </Link>
            <div className="pt-1">
              <p className="text-muted-foreground">
                I&apos;m a full-stack developer, currently working at{' '}
                <Link
                  href="https://pancompany.com"
                  className="font-medium hover:underline hover:underline-offset-4"
                  target="_blank"
                >
                  PanCompany &#8599;
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
