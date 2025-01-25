import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-background text-white p-4 flex justify-between items-center">
      <Link href="https://finnotech.io" rel="nofollow">
        <div className="text-xl font-bold text-primary">
          Finnotech
        </div>
      </Link>
      <div className="flex items-center">
        <a href="/new" className="bg-primary text-white hover:bg-primary-light p-2 rounded">
          Start New Chat
        </a>
      </div>
    </header>
  );
}