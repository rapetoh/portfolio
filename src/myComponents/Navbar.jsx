import React, { useRef } from 'react'
import PropTypes from "prop-types"

const Navbar = (props) => {

    const lastActiveLink = useRef();


    const navItems = [
        {
            id: 'nav-home',
            label: 'Home',
            link: '#home',
            className: 'nav-link',
            ref: lastActiveLink
        },
        {
            id: 'nav-about',
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            id: 'nav-skills',
            label: 'Skills',
            link: '#skills',
            className: 'nav-link'
        },
        {
            id: 'nav-resume',
            label: 'Resume',
            link: '#resume',
            className: 'nav-link'
        },

        {
            id: 'nav-project',
            label: 'Project',
            link: '#project',
            className: 'nav-link'
        },
        // {
        //     id: 'nav-blog',
        //     label: 'Blog',
        //     link: '#blog',
        //     className: 'nav-link'
        // },

        {
            id: 'nav-certificates',
            label: 'Certificates',
            link: '#certificates',
            className: 'nav-link'
        },
        {
            id: 'nav-contact',
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];

    return (
        <nav className={'max-md:navbar longNavbar ' + (props.navOpen ? 'active' : '')}>
            {
                navItems.map((item, key) => (
                    <span id={item.id} ref={item.ref} className={item.className} key={key}>
                        <a href={item.link}>{item.label} </a>
                    </span>
                ))
            }
        </nav>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar
