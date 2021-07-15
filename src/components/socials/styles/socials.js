import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const LinkBorder = styled.div`
    width: 3px;
    height: 3px;
    margin: 0 10px;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 3px;
    transition: all 0.4s ease;
    
    
    &:hover {
        color: #000;
    }
`;

export const Link = styled.a`
    width: 100%;
    height: 100%;
    color: #333;
    font-size: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;

    &:hover {
        color: #000;
    }
`;