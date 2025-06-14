import styled from "styled-components";
import { Img } from '@styled';

export const Main = styled.main`
    position: relative;    
    padding-top: 16px;    
`;

export const BgImg = styled(Img)`
    position: absolute;
    top: 0;
    width: 100%;
    height: 600px;
    object-fit: cover;
    background-color: #7a8b99;
    z-index: -1;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        height: 985px;
    } 
`;
