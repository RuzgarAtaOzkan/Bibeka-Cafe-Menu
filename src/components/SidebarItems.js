import React from 'react';
import '../styles/SidebarItems.css';
import { RiRestaurant2Fill } from 'react-icons/ri';
import { BiDrink } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';

class SidebarItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarData: [
                { name: 'Ana Yemekler', icon: <RiRestaurant2Fill />, path: '/anayemekler', cName: "sidebar__item" },
                { name: 'Gune Baslarken', icon: <RiRestaurant2Fill />, path: '/gunebaslarken', cName: "sidebar__item" },
                { name: 'Salatalar', icon: <RiRestaurant2Fill />, path: '/salatalar', cName: "sidebar__item" },
                { name: 'Makarnalar', icon: <RiRestaurant2Fill />, path: '/makarnalar', cName: "sidebar__item" },
                { name: 'Omlet Cesitleri', icon: <RiRestaurant2Fill />, path: '/omletcesitleri', cName: "sidebar__item" },
                { name: 'Gozleme Cesitleri', icon: <RiRestaurant2Fill />, path: '/gozlemecesitleri', cName: "sidebar__item" },
                { name: 'Tost Cesitleri', icon: <RiRestaurant2Fill />, path: '/tostcesitleri', cName: "sidebar__item" },
                { name: 'Baget Sandvicler', icon: <RiRestaurant2Fill />, path: '/bagetsandvicler', cName: "sidebar__item" },
                { name: 'Tatlilar', icon: <RiRestaurant2Fill />, path: '/tatlilar', cName: "sidebar__item" },
                { name: 'Sicak Icicekler', icon: <BiDrink />, path: '/sicakicicekler', cName: "sidebar__item" },
                { name: 'Soguk Icicekler', icon: <BiDrink />, path: '/sogukicicekler', cName: "sidebar__item" },
            ]
        }
    }

    renderSidebarItems() {
        return (
            this.state.sidebarData.map((item, index) => {
                return (
                    <Link
                        to={`${item.path}`}
                        key={index}
                        onClick={() => setTimeout(() => {
                            window.location.reload();
                        }, 10)} // url changing but content is not downloading so we refresh the page after the url is set and deployed to the link
                    >
                        <li 
                            className={item.cName} 
                        >
                            {item.icon}
                            {item.name}
                        </li>
                    </Link>
                );
            })
        );
    }

    componentDidMount() {
        
    }

    render() {
        return (
            this.renderSidebarItems()
        );
    };
}

export default withRouter(SidebarItems);