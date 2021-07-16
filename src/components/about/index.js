import React from 'react';
import { Container, Inner, Title, SubTitle, Body } from './styles/about';

export default function About({ children, ...restProps }) {
    return (
        <Container { ...restProps }>
            <Inner { ...restProps }>{ children }</Inner>
        </Container>
    )
}

About.Title = function AboutTitle({ children, ...restProps }) {
    return <Title { ...restProps }>{ children }</Title>
}

About.SubTitle = function AboutSubTitle({ children, ...restProps }) {
    return <SubTitle { ...restProps }>{ children }</SubTitle>
}

About.Body = function AboutBody({ children, ...restProps }) {
    return <Body { ...restProps }>{ children }</Body>
}