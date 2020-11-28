import React from 'react'
import { Menu, Dropdown } from 'antd';

import './GiftDropdown.scss'

const GiftDropdown = ({ list, value, callback }) => {

    // console.log('RENDER GiftDropdown');

    const menu = (
        <Menu
            onClick={callback}
        >
            {list.map((content, index) => (
                <Menu.Item 
                    key={content}
                >
                    <span>{content}</span>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Dropdown
            className="gift-dropdown"
            overlayClassName="gift-dropdown-menu"
            overlay={menu}
            placement="topCenter"
            trigger={['hover']}
        >
            <a className="ant-dropdown-link">
                <p>Подарок</p>
                <p>{value}</p>
            </a>
        </Dropdown>
    )
}

export default GiftDropdown
