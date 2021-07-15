import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    padding: 10px 0;
    
    @media (max-width: 600px) {
        padding: 10px 0;
        justify-content: center;
    }
`;

export const Inner = styled.div`
    float: right;
    margin-right: 50px;
`;

export const Link = styled.a`
    margin: 10px;
    color: #6A645A;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
        color: #000;
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }
`;
