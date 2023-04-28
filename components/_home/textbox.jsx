import Image from 'next/image';

export const TextBox = ({icon, title, subtitle}) => {
    return (
        <div className={`flex flex-col justify-evenly gap-5 border-[0.5px] w-80 h-56 border-neutral-300 rounded-md p-5`}>
            <Image src={icon} width={50} height={20} className={` bg-neutral-100 rounded-full`} />
            <div className={`text-xl font-semibold`}>{title}</div>
            <div className={`text-sm comfortaa-font font-medium text-neutral-500`}>{subtitle}</div>
        </div>
    )
}