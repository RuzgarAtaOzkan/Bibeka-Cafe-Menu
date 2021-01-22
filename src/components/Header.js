import React from 'react';
import SidebarItems from './SidebarItems';
import '../styles/Header.css';
import '../styles/SidebarItems.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiSocialInstagram } from 'react-icons/ti';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import setSidebarResponsiveValues from '../dispatchFunctions/setSidebarResponsiveValues';
import logo from '../images/image_logo2.png';

class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showSideBar: false
        }
        
        this.switchSidebar = this.switchSidebar.bind(this);
        this.sidebarContainer = React.createRef();
    }

    switchSidebar() {
        this.props.switchSideBar(); 
    }

    componentDidMount() {
        window.addEventListener('load', () => {
            this.props.setSidebarResponsiveValues(this.sidebarContainer.current);
        });
        this.props.setSidebarResponsiveValues(this.sidebarContainer.current);
    }

    render() {
        return (
            <>
                <div ref={this.page} className="header__container">

                    <ul className="header__container__list">

                        <li onClick={this.switchSidebar}> 
                            <GiHamburgerMenu style={{ fontSize: 35, color: 'white' }} /> 
                        </li>

                        <Link to="/">
                            <li>
                                <img alt="logo2" src={logo} />
                            </li>
                        </Link>

                        <a href="https://instagram.com/bibekacafe?igshid=iz7bgpt9tuxq">
                            <li> 
                                <TiSocialInstagram style={{ fontSize: 38, color: 'white' }} /> 
                            </li>
                        </a>

                    </ul>

                </div>

                <div className={this.props.showSideBar ? "sidebar__container active" : "sidebar__container"}>
                    <ul ref={this.sidebarContainer} className="sidebar__items">
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

function mapStateToProps(state) {
    return {
        showSideBar: state.general.showSideBar,
        sidebarResponsiveHeight: state.general.sidebarResponsiveHeight,
        sidebarResponsiveFontSize: state.general.sidebarResponsiveFontSize
    }
}

function mapDispatchToProps(dispatch) {
    return {
        switchSideBar: () => {
            dispatch({ type: 'SWITCH_SIDEBAR' });
        },
        closeSideBar: () => {
            dispatch({ type: 'CLOSE_SIDEBAR' });
        },
        setSidebarResponsiveValues: setSidebarResponsiveValues(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
