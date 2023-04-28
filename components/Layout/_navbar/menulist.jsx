import React from 'react'
import { MenuItem } from './menuitem'
import { menuArray } from '../../../consts/menulist'

export const MenuList = () => {
    return (
        <div className={`flex flex-row items-center justify-between gap-3`}>
            {menuArray.map((item, index) => (
                <MenuItem key={index} href={item.href} type={item.type}>{item.children}</MenuItem>
            ))}
        </div>
    )
}