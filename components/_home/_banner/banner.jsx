
import React from 'react';
import Link from 'next/link';
import { ImageGrid } from './imagegrid';

export const HomeBanner = () => {
    return (
        <>
            <div className={`flex flex-row items-center justify-center gap-10 banner__container`}>
                <article  className={`w-1/2 flex flex-col gap-5 banner_article`}>
                    <div className={`abril-font font-medium text-5xl banner_article-h2`}>African Grocerey Store and products made easy for all.</div>
                    <div className={`comfortaa-font text-xl text-neutral-800 banner_article-h3`}>We are a trusted african grocery shop where you can buy your necessary produce and african items.</div>
                    <Link className={`comfortaa-font text-base bg-black p-2 w-32 text-white text-center border-[1px] hover:text-black hover:bg-white hover:border-black`} href="/shop" >Shop Now</Link>
                </article>
                <div>
                    <ImageGrid />
                </div>
            </div>
        </>
    )
};