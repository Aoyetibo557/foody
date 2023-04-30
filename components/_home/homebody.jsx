
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { textboxlist } from '@/consts/home';
import { TextBox } from '@/components/_home/textbox';
import { Testimonials } from '@/components/_home/testimonials';

export const HomeBody = () => {

    return (
        <div className={`w-4/5 homebody_container`}>
            <div className={`flex flex-row items-center gap-10 homebody_topcontent `}>
                {/* top contnet */}
                <div className={`w-1/2 flex flex-col justify-evenly gap-4 homebody_topcontent-textdiv`}>
                   <div className={`text-3xl font-bold`}>
                     Foody could be your daily service.
                   </div>
                   <div className={`text-base text-neutral-500 comfortaa-font`}>
                        Lean into that feeling of being taken care of with the best and freshest grocery delivered to your door step.
                        Our delivery system is simple and efficient. We approve all orders than can be delivered within 20-30 mins. We also offer order pick up from our store location or your prefered delivery location.
                   </div>
                   <div className={`flex flex-col gap-5`}>
                        <div className={`flex flex-row items-center gap-3`}>
                            <Image src={`/static/images/checkmark.png`} width={23} height={30} alt={"Checkmar Icon/Image"} />
                            <span className={`text-base text-neutral-900 comfortaa-font font-medium`}>Best service than others</span>
                        </div>

                        <div className={`flex flex-row items-center gap-3`}>
                            <Image src={`/static/images/checkmark.png`} width={23} height={30} alt={"Checkmar Icon/Image"} />
                            <span className={`text-base text-neutral-900 comfortaa-font font-medium`}>Fresh grocery always</span>
                        </div>

                        <div className={`flex flex-row items-center gap-3`}>
                            <Image src={`/static/images/checkmark.png`} width={23} height={30} alt={"Checkmar Icon/Image"} />
                            <span className={`text-base text-neutral-900 comfortaa-font font-medium`}>User friendly Website</span>
                        </div>

                        <div className={`mt-10`}>
                            <Link href={"/"}>
                                <span className={`text-base comfortaa-font font-medium border-[1px] border-neutral-400 p-3 hover:bg-black hover:text-white hover:border-none`}>Learn More</span>
                            </Link>
                        </div>
                   </div>

                </div>
                <div className={`grid grid-cols-2 gap-10 homebody_textboxes`}>
                    {textboxlist.map((textbox, index) => (
                        <TextBox key={index} icon={textbox.icon} title={textbox.title} subtitle={textbox.subtitle} />
                    ))}
                </div>
            </div>
            <div className={`flex flex-row justify-between gap-4 mt-20 homebody_text`}>
                <div className={`text-3xl abril-font w-3/4`}> We offer people the best and freshest African grocery and items around.</div>
                <div className={`flex flex-col gap-4 w-3/4`}>
                    <span className={`comfortaa-font`}>
                        Serving the community and beyond for over 10 years, we offer a wide variety of consumer friendly produce and products. Our store holds a collection of produce from countries on the african continent. we also sell non consumable items; come check us out.
                    </span>
                    <Link href={"/"} className={`mt-5`}>
                        <span className={` text-sm comfortaa-font font-medium border-[1px] hover:border-neutral-400 hover:bg-white hover:text-black p-3 bg-black text-white`}>Learn More</span>
                    </Link>

                </div>
            </div>

            <div className={`mt-32 text-center `}>
                <div className={`text-3xl mb-10 comfortaa-font font-semibold`}>
                    Feedbacks from our community
                </div>
               <Testimonials /> 
            </div>
         
        </div>
    )
}