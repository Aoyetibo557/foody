import React, { useState, useEffect } from 'react';

export const MailingCard = () => {
    const [email, setEmail] = useState('');

    return (
        <div className={` flex flex-row items-center justify-center p-10 gap-15`}>
            <div className={`w-2/5 text-base text-neutral-300 comfortaa-font `}>
                Join our mailing list to receive the latest news and updates from our team.
                Get 20% off your first order!
            </div>
            <div className={`w-2/5 flex flex-row items-center justify-between border-[0.6px] border-neutral-600 rounded-md focus-within:border-neutral-300`}>
                <input type="text" name="email" placeholder="Enter your email address" className={`w-full text-sm text-white comfortaa-font focus:outline-none bg-transparent p-3 rounded-sm`} />
                <button className={`w-44 text-sm comfortaa-font bg-neutral-300  text-neutral-800 hover:bg-neutral-100 p-3 text-center rounded-md `}>Get Reward</button>
            </div>
        </div>
    )
}