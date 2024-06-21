import Link from 'next/link';
import Image from 'next/image'
import React from 'react';


const navIcons = [
    {src: 'assets/icons/search.svg', alt: 'search icon'},
    {src: 'assts/icons/heart.svg', alt: 'heart icon'},
]
const Navbar = () => {
    return (
        <header className='w-full'>
            <nav className='nav'>
                <Link href='/' className='flex items-center gap-1'>
                    <Image
                    src="assets/icons/logo.svg"
                    width={28}
                    height={28}
                    alt='PriceGuru logo'
                    />

                    <p className='nav-logo'>
                        Price<span className='text-primary'>Guru</span>
                    </p>
                </Link>
                <div className='flex items-center gap-5'>
                    {navIcons.map((icon) => (
                        <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={20}
                        height={20}
                        key={icon.alt}
                        className='object-contain'
                        />
                    ))}
                </div>
            </nav>
        </header>

    );
};

export default Navbar;