'use client'

import { debounce } from '@/utils/uiHelpers';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function TopNav() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'About Me', href: '/about' }
  ];

  return (
    <header>
      <nav className="w-full flex justify-between items-center pl-2 pr-2  bg-transparent">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/main.svg" width={50} height={50} alt="main icon" />
          <div >
            <h1 className="font-bold text-lg">Sami Syed</h1>
            <p className="text-sm text-gray-600">Software Dev.</p>
          </div>
        </Link>
        <div className='block md:hidden'>
          <MobileNav navItems={navItems} />
        </div>
        <div className='hidden md:block'>
          <DeskTopNav navItems={navItems} />
        </div>
      </nav>
    </header>
  );
}

type NavItem = {
  label: string,
  href: string
}
interface NavProps {
  navItems: NavItem[]
}

function MobileNav({ navItems }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const debouncedMenuToggle = debounce(()=>setIsMenuOpen(prev=>!prev),50)

  const menuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      debouncedMenuToggle();
    }
    if (e.key === 'Escape') {
      setIsMenuOpen(false); // Close the menu when Escape is pressed
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={debouncedMenuToggle}
        onKeyDown={handleKeyDown}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen ? 'true' : 'false'}
        className={`transition-all hover:scale-110 focus:scale-110  rounded ${isMenuOpen? `bg-amberWhite`:``}`}
      >
        <Image
          src="./hamburger-menu.svg"
          alt="hamburger menu icon"
          width={50}
          height={50}
        />
      </button>
      <ul
        ref={menuRef}
        className={`
          flex flex-col gap-4 transition-all duration-300 ease-out h-0 -ml-4
          ${isMenuOpen
            ? 'translate-y-2'
            : '-rotate-90 scale-0'}
            `}
        aria-hidden={!isMenuOpen}
        role='menu'
      >
        {...navItems.map((item) => (
          <li key={item.label}>
            <Link
              key={item.href}
              href={item.href}
              className="transition-all duration-200 px-4 py-2  hover:text-amberMedium focus:text-amberMedium hover:scale-110"
              role="menuitem"
            >
              {item.label}
            </Link>
          </li>
        ))
        }
      </ul>
    </div >
  )
}

function DeskTopNav({ navItems }: NavProps) {
  return (
    <div className="flex space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="transition-all duration-200 px-4 py-2 hover:text-amberMedium hover:scale-110 focus:text-amberMedium focus:scale-110"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}