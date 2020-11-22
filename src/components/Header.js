import React from 'react';
import faker from 'faker';
import SidebarItems from './SidebarItems';
import '../styles/Header.css';
import '../styles/SidebarItems.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiSocialInstagram } from 'react-icons/ti';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showSideBar: false
        }
        this.switchSidebar = this.switchSidebar.bind(this);
    }

    switchSidebar() {
        this.setState({ showSideBar: !this.state.showSideBar });
    }

    render() {
        return (
            <>
                <div className="header__container">

                    <ul className="header__container__list">

                        <li onClick={this.switchSidebar}> 
                            <GiHamburgerMenu style={{ fontSize: 35, color: 'white' }} /> 
                        </li>

                        <Link to="/">
                            <li>
                                <img alt="logo" src={faker.image.food()} />
                            </li>
                        </Link>

                        <a href="https://instagram.com/bibekacafe?igshid=iz7bgpt9tuxq">
                            <li> 
                                <TiSocialInstagram style={{ fontSize: 38, color: 'white' }} /> 
                            </li>
                        </a>

                    </ul>

                </div>

                <div className={this.state.showSideBar ? "sidebar__container active" : "sidebar__container"}>
                    <ul className="sidebar_items">
                        <li
                            key={Math.random().toString()}
                            onClick={this.switchSidebar}
                            className="sidebar__toggle"
                        >
                            <GrClose />
                        </li>
                        <SidebarItems />
                    </ul>
                </div>
            </>
        );
    };
}

export default Header;