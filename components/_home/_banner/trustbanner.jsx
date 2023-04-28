import React from 'react';
import {trustlist } from '@/consts/trust';
import Image from 'next/image';

export const TrustBanner = () => {
    return (
        <div className={`bg-gray-100 h-44 flex flex-col gap-4 items-center justify-center`}>
            <div className={`comfortaa-font text-xl `}>Trusted, Loved and supported by the community and beyond. </div>

            <div className={`w-full flex flex-row justify-evenly gap-5`}>
                {trustlist.map((trust, index) => (
                    <div key={index} className={``}>
                        <Image className={`gap-10 object-cover`} width={trust.width || 50} height={trust.height || 50} src={trust.image} alt="banner" />
                    </div>
                ))}
            </div>

        </div>
    )
}