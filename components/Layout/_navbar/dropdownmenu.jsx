import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { menuArray } from '../../../consts/menulist';
import { MenuItem } from './menuitem';

export const DropdownMenu = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={`hamburger`}>
            <button onClick={() => setToggle(!toggle)} >
                <IoIosMenu className={`text-3xl`} />
            </button>

            <div>
                {toggle && (
                    <div className={`absolute right-0 top-20 p-5 bg-white w-full flex flex-col gap-3 dropdownmenu`}>
                        {menuArray.map((item, index) => (
                            <MenuItem key={index} href={item.href} type={item.type}>{item.children}</MenuItem>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}