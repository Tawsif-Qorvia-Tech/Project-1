import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={"/"} className='flex items-center gap-1'>
            <Image alt='Together In Community logo' src={"/Logo.png"} width={70} height={70} className='w-12 h-12 lg:w-[70px] lg:h-[70px]'></Image>
        </Link>
    );
};

export default Logo;