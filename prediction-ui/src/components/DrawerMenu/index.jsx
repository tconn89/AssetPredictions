import React, { useEffect } from 'react';
import { useAppState } from 'stores/GlobalAppStore';
import useGlobalSidebar from '../../hooks/useGlobalDrawer';
import { Link, useHistory } from 'react-router-dom';
import classnames from 'classnames'

import './DrawerMenu.scss';
import { BsViewStacked, BsInfoSquare } from 'react-icons/bs';
import { MdHelpOutline } from "react-icons/md";


function AnonymousMenu(props) {
    return (
        <div className="menu-link-container">
            <div className="menu-links">
                <Link to="/" className="link">
                    <BsViewStacked />
                    <div className="label">Feed</div>
                </Link>
                <Link to="/about" className="link">
                    <BsInfoSquare />
                    <div className="label">About</div>
                </Link>
                <Link to="/about/help" className="link">
                    <MdHelpOutline />
                    <div className="label">Help</div>
                </Link>
            </div>
        </div>
    );
}

function SideBarMenu (props) {
    const state = useAppState().sidebar;
    const sidebar = useGlobalSidebar();
    const dimensions = props.dimensions;

    // calculate the current class structure of the sidenav
    const className = classnames('side-menu', {
        'mode-xs': dimensions.width < 576,
        'mode-sm': dimensions.width >= 576 && dimensions.width < 768,
        'mode-md': dimensions.width >= 768 && dimensions.width < 992,
        'mode-lg': dimensions.width >= 992,
        'hidden': !state.show
    });

    const history = useHistory();
    // sidebar should not stay open during route changes
    useEffect(() =>
        history.listen(() => sidebar.close())
    , [history, sidebar])

    return (
        // <>{ dimensions.width >= 576 ? 'null' : "null" }
            <div id="side-menu" className={className}>
                <div className="overlay" onClick={sidebar.close}></div>
                <div className="menu-panel">
                    <AnonymousMenu />
                </div>
            </div>
        // </>
    );
}

export default SideBarMenu;
