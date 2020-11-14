import React from 'react'
import { Dropdown, Menu } from 'antd';

import style from './FilterDropdown.nodule.scss'

const FilterDropdown = ({ title, list }) => {


    const menu = (
        <Menu>
            {/* {list && (
                list.map(item => {

                })
            )} */}
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
            overlay={menu}
            placement="bottomRight"
            trigger={list ? ['click'] : ['contextMen']}
            arrow
        >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>title</a>
        </Dropdown>
    )
}

export default FilterDropdown;
