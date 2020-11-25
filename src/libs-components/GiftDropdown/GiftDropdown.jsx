import React from 'react'
import { Menu, Dropdown, Button } from 'antd';

import './GiftDropdown.scss'

const GiftDropdown = () => {

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    1st menu item
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    2nd menu item
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    3rd menu item
            </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            className="gift-dropdown"
            overlayClassName="gift-dropdown-menu"
            overlay={menu}
            placement="topCenter"
            trigger={['click']}
        >
            <a className="ant-dropdown-link">
                <p>Подарунок</p>
                <p>Pepsi Mango 0,5 л * 2шт</p>
            </a>
        </Dropdown>
    )
}

export default GiftDropdown
