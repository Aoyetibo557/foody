import React, { useState, useEffect } from 'react'
import { MenuList  } from '../_navbar/menulist';
import Link from 'next/link';

export const Header = () => {

    return (
       <div className={`p-6 flex items-center justify-center header`}>
            <div className={`flex flex-row items-center justify-between w-4/5`}>
                <div>
                    <Link href={"/"} className={`abril-font text-4xl`}>
                        F<span className={`text-red-500`}>oo</span>dy
                    </Link>
                    
                </div>
                <div className={``}>
                    <MenuList />
                </div>

            </div>
       </div>
    )
}