import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const LoaderWrapper = styled.div`
    &.loading{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 5px solid var(--white);
    }
    
    &.loading-animation{
        margin: 45vh 42vw;
        border-left: 5px solid var(--primary);
        animation: load 3s infinite linear;
        animation-timing-function: ease-in-ease-out;
    }
    @keyframes load{
        0%{
            transform: rotate(0);
        }
        50%{
            border-left: 5px solid var(--primary);
            box-shadow: 0px 0px .1em #000;
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;
