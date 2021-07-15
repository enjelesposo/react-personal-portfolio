import React from 'react';
import Header from '../components/header';
import { SocialsContainer } from './socials';

export function HeaderContainer(){
    return <>
        <Header>
            <Header.Pane>
                <Header.Text>Hello,<br/>I'm Angelica!</Header.Text>
            </Header.Pane>
            <Header.Pane>
                <Header.Image src='/images/profile-img.png' alt='profile photo'/>
            </Header.Pane>
        </Header>

        <SocialsContainer />
    </>
}