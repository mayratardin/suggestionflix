import styled from 'styled-components';

export const ContainerMessage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

export const DescriptionError = styled.h1`
    color: var(--white);
    font-size: 150px;
    margin: 0;

    @media (max-width: 800px) {
        font-size: 100px;
    }
`

export const DescriptionMessage = styled.p`
    color: var(--white);
    font-size: 30px;
    margin-bottom: 40px;
    text-align: center;

    @media (max-width: 800px) {
        font-size: 24px;
    }
`