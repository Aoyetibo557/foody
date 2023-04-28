import Link from 'next/link';
import Image from 'next/image';
import { MailingCard } from '@/components/_home/mailingcard'

export const Footer = () => {
    return (
        <div className={`flex flex-col bg-neutral-800 p-10 `}>
            <div className={`flex flex-row h-80 justify-evenly items-center`}>
                <div className={`flex flex-col text-white gap-5`}>
                    <div className={`text-xl comfortaa-font`} >Navigation Bar</div>
                    <div className={`grid grid-cols-2 gap-10`}>
                        <Link href={`/`} className={`text-sm comfortaa-font text-neutral-300 hover:text-neutral-100 hover:scale-105`}>Categories</Link>
                        <Link href={`/`} className={`text-sm comfortaa-font text-neutral-300 hover:text-neutral-100 hover:scale-105`}>Services</Link>
                        <Link href={`/`} className={`text-sm comfortaa-font text-neutral-300 hover:text-neutral-100 hover:scale-105`}>About</Link>
                        <Link href={`/`} className={`text-sm comfortaa-font text-neutral-300 hover:text-neutral-100 hover:scale-105`}>{`FAQ's`}</Link>

                    </div>
                    <Link href={`/`} className={`border-[1px] border-neutral-600 bg-transparent text-sm text-white p-2 hover:border-neutral-100 rounded-md text-center`}>
                        Contact Us
                    </Link>
                </div>

                <div className={ `w-2/5 flex flex-col items-center gap-5 text-white `}>
                    <div className={`abril-font text-3xl`}>Foody</div>
                    <div className={`comfortaa-font text-sm text-neutral-300`}>
                        We are a local shop that pride ourselves in providing the best quality grocery and goods to our customers. We hope to share our
                        culture and heritage with you through our products. Feel free to contact us for any questions or concerns. We are opening a new location in
                        the near future. Stay tuned for more information.
                    </div>
                    <div className={`text-sm comfortaa-font text-neutral-300`}>© 2023 Foody</div>
                </div>
                <div className={`flex flex-col items-center text-white  gap-5`}>
                    <div className={`comfortaa-font text-xl`}>Contact Us</div>
                    <div className={`comfortaa-font text-sm text-neutral-300`}>
                        7328 8th Ave, Brooklyn, NY 11228 <br />
                    </div>
                    <div className={`flex flex-row gap-9`}>
                        <Image src="/static/images/facebookicon.png" width={25} height={25} className={`invert`}  alt={"Facebook Icon"} />
                        <Image src="/static/images/twittericon.png" width={25} height={25} className={`invert`}  alt={"Twitter Icon"} />
                        <Image src="/static/images/instagramicon.png" width={25} height={25} className={`invert`} alt={"Instagram Icon"}  />
                        <Image src="/static/images/tiktokicon.png" width={25} height={25} className={`invert`}  alt={"TikTok Icon"} />
                    </div>

                    
                </div>
            </div>
            <div className={`flex items-center justify-center gap-4`}>
                <MailingCard />
            </div>

            <div className={`flex fex-col gap-3 justify-center text-center text-neutral-500`}>
                <div>This is a demo website for a local grocery store. This website is built using Next.js, TailwindCSS, and HeadlessUI.</div>                
                <div>
                    &copy; Developed by <a href="https://anuoluwapo-min-portfolio.vercel.app/home" rel="noreferrer" target="_blank" className={`text-neutral-300 hover:text-neutral-100`}>Anuoluwapo Oyetibo</a>
                </div>
            </div>
        </div>
    )
}