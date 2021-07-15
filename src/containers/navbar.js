import React from 'react';
import Navbar from '../components/navbar';

export function NavbarContainer() {
    return(
        <Navbar>
            <Navbar.Link href="/">Home</Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar>
    )
}