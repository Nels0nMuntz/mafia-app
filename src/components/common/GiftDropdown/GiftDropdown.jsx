import React from 'react'
import { Menu, Dropdown } from 'antd';

import './GiftDropdown.scss'

const GiftDropdown = ({ list, value, callback }) => {

    const onClickHandler = ({key}) => {
        console.log(key);
        callback(key);
    }

    const menu = (
        <Menu
            // callback will return value of attribute "key" of <Menu.Item></Menu.Item>
            onClick={onClickHandler}
        >
            {list.map(content => (
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
                <p>Подарок:</p>
                <p>{value}</p>
            </a>
        </Dropdown>
    )
}

export default GiftDropdown
