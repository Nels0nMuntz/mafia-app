import React from 'react'
import { Dropdown, Menu } from 'antd';

import './FilterDropdown.scss'

const FilterDropdown = ({ list }) => {



    const menu = (
        <Menu>
            {list.length && (
                list.map(({id, content}) => (
                    <Menu.Item
                        key={id}
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
                {list.length ? list[0].content : ''}
            </a>
        </Dropdown>
    )
}

export default FilterDropdown;
