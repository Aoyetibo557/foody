import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const MenuItem = ({  children, type,  href }) => {
    return (
        <Link title={ type === "image" ? "Image" : children } href={href} >
           {type === "image" ? <Image src={children} width={20} height={20} className={`w-6 h-6 hover:scale-110`} /> : (
            <div className="text-neutral-900 comfortaa-font hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {children}
            </div>
           )}
        </Link>

    )
}