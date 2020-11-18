import React from 'react'
import { Dropdown, Menu } from 'antd';

import './HeaderDropdown.scss'

import { Link } from 'react-router-dom';

const HeaderDropdown = ({ type, title, list, iconUrl }) => {

    const matches = window.matchMedia("(max-width: 1100px)").matches;
    const [isMatches, setIsMatches] = React.useState(matches);
    React.useEffect(() => setIsMatches(matches), [matches]);

    const formatPhone = number => {
        return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6 - 8)}-${number.slice(8 - 10)}`;
    };

    const menu = (
        <Menu>
            {type && (
                <p className="ant-dropdown-menu-section" >Служба доставки:</p>
            )}
            {list && (
                list.map(({ id, content, iconUrl }) => (
                    <Menu.Item
                        key={id}
                        icon={iconUrl ? <img src={iconUrl} alt="phone" /> : null}
                    >
                        {type && (
                            <a href={`tel:+38${content}`}>
                                {formatPhone(content)}
                            </a>
                        )}
                        {!type && (
                            <Link>{content}</Link>
                        )}
                    </Menu.Item>
                ))
            )}
            {type && (
                <p className="ant-dropdown-menu-section" >
                    <Link>
                        <button>
                            Написать отзыв
                        </button>
                    </Link>
                </p>
            )}
        </Menu>
    );

    return (
        <Dropdown
            className="header-dropdown"
            overlay={menu}
            overlayClassName='dropdown-overlay'
            placement="bottomLeft"
            trigger={list ? ['click'] : ['contextMen']}
            arrow
        >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {iconUrl && (
                    <div
                        className="ant-dropdown-link-icon"
                        style={{
                            backgroundImage: `url(${iconUrl})`
                        }}
                    ></div>
                )}
                {(isMatches && type === 'contacts') ? "" : title}
            </a>
        </Dropdown>
    )
}

export default HeaderDropdown
