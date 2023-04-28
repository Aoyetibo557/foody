import React from 'react';
import { bannerImages } from '@/consts/banner';
import Image from 'next/image';

export const ImageGrid = () => {

    return (
        <div className={`grid grid-cols-2 gap-5`}> 
            {bannerImages.map((image, index) => (
                <div key={index} className={``}>
                    <Image className={`gap-10 h-80 object-cover`} width={image.width || 300} height={image.height || 200} src={image.src} alt="banner" />
                </div>
            ))}
        </div>
    )
};