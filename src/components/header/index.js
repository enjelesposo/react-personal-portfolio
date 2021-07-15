import React from 'react';
import { Container, Inner, Pane, Text, Image } from './styles/header';

export default function Header({ children, ...restProps }) {
    return(
        <Container { ...restProps }>
            <Inner { ...restProps }>{ children }</Inner>
        </Container>
    )
}

Header.Pane = function HeaderPane({ children, ...restProps }) {
    return <Pane { ...restProps }>{ children }</Pane>
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text { ...restProps }>{ children }</Text>
}

Header.Image = function HeaderImage({ ...restProps }) {
    return <Image { ...restProps }/>
}