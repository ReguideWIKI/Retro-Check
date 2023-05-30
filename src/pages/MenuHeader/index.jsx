import {Menu} from 'antd';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const items = [
    {
        label: 'zkSync Lite + Era (Coming soon more project)',
        key: 'zksync',
    },
    {
        label: 'Donate team',
        key: 'coffee',
    },
];
const MenuHeader = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState();
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            setCurrent('zksync');
        }
    }, [location.pathname]);
    useEffect(() => {
        if (current === 'zksync') {
            navigate('/zksync');
        }
        if (current === 'coffee') {
            navigate('/coffee');
        }
    }, [current]);
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            {items.map(item =>
                <Menu.Item key={item.key}>
                    {item.label}
                </Menu.Item>
            )}
        </Menu>
    );

};
export default MenuHeader;
