'use client';

import { useTheme } from 'next-themes';
import { Icons } from '@/components/icons';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex h-6 w-6 items-center justify-center rounded-md border"
    >
      <span className="sr-only">Toggle mode</span>
      {theme === 'dark' ? <Icons.Sun /> : <Icons.Moon />}
    </button>
  );
}
