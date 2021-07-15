import React from 'react';
import { Container, Link, LinkBorder } from './styles/socials';

export default function Socials({ children, ...restProps}) {
    return (
        <Container { ...restProps }>{ children }</Container>
    )
}

Socials.LinkBorder = function SocialsLinkBorder({ children, ...restProps }) {
    return <LinkBorder { ...restProps }>{ children }</LinkBorder>
}

Socials.Link = function SocialsLink({ children, ...restProps }) {
    return <Link { ...restProps }>{ children }</Link>
}
