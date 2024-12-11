import Image from 'next/image';
import Link from 'next/link';

function TopNav() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
      <nav className="w-full flex justify-between items-center pl-2 pr-2  bg-transparent">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/main.svg" width={50} height={50} alt="main icon" />
          <div >
            <h1 className="font-bold text-lg">Sami Syed</h1>
            <p className="text-sm text-gray-600">Software Dev.</p>
          </div>
        </Link>
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-all duration-200 px-4 py-2 text-gray-700 hover:text-amberWhite hover:bg-amberDarker hover:scale-110 rounded"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
  );
}

export default TopNav;
