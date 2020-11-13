import React from 'react'
import { Dropdown, Menu } from 'antd';

import './HeaderDropdown.scss'

const HeaderDropdown = ({ title, list }) => {

    const menu = (
        <Menu>
            {list && (
                list.map(({id, content}) => (
                    <Menu.Item
                        key={id}    
                    >
                        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                            {content}
                        </a>
                    </Menu.Item>
                ))
            )}
        </Menu>
    );

    return (
        <Dropdown
            overlay={menu}
            overlayClassName='dropdown-overlay'
            placement="bottomLeft"
            trigger={list ? ['click'] : ['contextMen']}
            arrow
        >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>{title}</a>
        </Dropdown>
    )
}

export default HeaderDropdown
