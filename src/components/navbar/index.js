import React from 'react';
import { Container, Inner, Link } from './styles/navbar';

export default function Navbar({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Navbar.Link = function NavbarLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}