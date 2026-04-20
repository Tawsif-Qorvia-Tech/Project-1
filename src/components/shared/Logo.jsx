import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={"/"} className='flex items-center gap-1'>
            <Image alt='Together In Community logo' src={"/Logo.png"} width={40} height={30}></Image>
        </Link>
    );
};

export default Logo;