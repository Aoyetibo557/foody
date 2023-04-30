import React from 'react'
import { MenuItem } from './menuitem'
import { menuArray } from '../../../consts/menulist'
import { DropdownMenu } from '../_navbar/dropdownmenu';

export const MenuList = () => {
    return (
        <div>
            <div className={`flex flex-row items-center justify-between gap-3 menulist`}>
                {menuArray.map((item, index) => (
                    <MenuItem key={index} href={item.href} type={item.type}>{item.children}</MenuItem>
                ))}
            </div>

            <div>
                <DropdownMenu />
            </div>
        </div>
    )
}