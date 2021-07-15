import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
`;

export const Inner = styled.div`
    width: 70vw;
    display: flex;
    align-items: flex-end;
`;

export const Pane = styled.div`
    margin: 0 20px;
`;

export const Text = styled.h1`
    font-family: 'Sue Ellen Francisco', Arial, sans-serif;
    font-size: 98px;
    line-height: 1.3;

    @media (max-width: 600px) {
        font-size: 62px;
    }
`;

export const Image = styled.img`
    width: 260px;
`;
