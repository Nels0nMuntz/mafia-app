import React from 'react'
import { Dropdown, Menu } from 'antd';

import './FilterDropdown.scss'

const FilterDropdown = ({ list, value, callback }) => {

    const onClickItem = ({key}) => callback(key);

    const menu = (
        <Menu onClick={onClickItem} >
            {list.length && (
                list.map(({content}) => (
                    <Menu.Item
                        key={content}
                    >
                        <span>{content}</span>
                    </Menu.Item>
                ))
            )}
        </Menu>
    );

    return (
        <Dropdown
            overlay={menu}
            trigger={list ? ['click'] : ['contextMen']}
            placement="bottomLeft"
            arrow
        >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {value}
            </a>
        </Dropdown>
    )
}

export default FilterDropdown;
