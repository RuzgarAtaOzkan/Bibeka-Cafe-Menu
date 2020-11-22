import React from 'react';
import '../styles/SidebarItems.css';
import { RiRestaurant2Fill } from 'react-icons/ri';
import { BiDrink } from 'react-icons/bi';

class SidebarItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarData: [
                { name: 'Ana Yemekler', icon: <RiRestaurant2Fill />, path: '/anayemekler', cName: "sidebar__item" },
                { name: 'Baslangiclar', icon: <RiRestaurant2Fill />, path: '/baslangiclar', cName: "sidebar__item" },
                { name: 'Salatalar', icon: <RiRestaurant2Fill />, path: '/salatalar', cName: "sidebar__item" },
                { name: 'Makarnalar', icon: <RiRestaurant2Fill />, path: '/makarnalar', cName: "sidebar__item" },
                { name: 'Kahvaltilar', icon: <RiRestaurant2Fill />, path: '/kahvaltilar', cName: "sidebar__item" },
                { name: 'Tatlilar', icon: <RiRestaurant2Fill />, path: '/tatlilar', cName: "sidebar__item" },
                { name: 'Sicak Icicekler', icon: <RiRestaurant2Fill />, path: '/sicakicicekler', cName: "sidebar__item" },
                { name: 'Soguk Icicekler', icon: <RiRestaurant2Fill />, path: '/sogukicicekler', cName: "sidebar__item" },
            ]
        }
    }

    renderSidebarItems() {
        return (
            this.state.sidebarData.map((item, index) => {
                return (
                    <>

                        <a 
                            key={index}
                            href={item.path}
                        >
                            <li className={item.cName}>
                                {item.name.includes('Icicek') || item.path.includes('icicek') ? <BiDrink /> : item.icon}
                                {item.name}
                            </li>
                        </a>
                    </>

                );
            })
        );
    }

    render() {
        return (
            this.renderSidebarItems()
        );
    };
}

export default SidebarItems;