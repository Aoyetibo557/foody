import Image from 'next/image';

export const TestimonialCard = ({ name, image, text }) => {
    return (
        <div className={`w-96 flex flex-col justify-between gap-4 p-8 bg-neutral-100 testimonial_card`}>
            <div>
                <span className={`text-sm comfortaa-font`}>{text}</span>
            </div>
            <div className={`flex flex-row items-center justify-between`}>
                <Image src={image} width={30} height={30} className={`rounded-full bg-neutral-400`} alt={`The avatar for ${name}`} />
                <span className={`comfortaa-font text-sm text-neutral-500 font-semibold`}>- {name}</span>
            </div>
        </div>
    )
};