import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={"/"} className='flex items-center gap-1 no-underline'>
            <Image alt='Together In Community logo' src="/GLogo.png" width={70} height={70} className='w-10 h-10 xs:w-12 xs:h-12 lg:w-17.5 lg:h-17.5 block'></Image>
        </Link>
    );
};

export default Logo;