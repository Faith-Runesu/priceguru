import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../public/logo.png";

const navIcons = [];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image src={Logo} width={28} height={28} alt="price-guru-logo" />

          <p className="text-4xl font-sans">
            Price<span className="text-primary">Guru</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              src={icon.src}
              alt={icon.alt}
              width={20}
              height={20}
              key={icon.alt}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;