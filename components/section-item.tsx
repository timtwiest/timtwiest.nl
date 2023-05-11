'use client';

import React from 'react';

interface IProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function SectionItem({ children, title, description }: IProps) {
  return (
    <div className="space-y-1 pt-6">
      <h2 className="font-heading text-xl">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
      {children}
    </div>
  );
}
