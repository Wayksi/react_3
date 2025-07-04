import styled from "styled-components";
import { Img, Container } from "@styled";
import { StyledButton } from "../../ui/Button/styled";

export const StyledGuide = styled.section`    
    background-color: ${(props) => props.theme.bgWhite};
`;

export const GuideContainer = styled(Container)`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    
    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        padding-top: 100px;
        grid-template-columns: 480px 1fr;
        gap: 120px;
    }  
`;

export const ImageWrapper = styled.div`
    grid-row: 2 / 3;
    position: relative;
    min-height: 416px;
    
    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        grid-template-columns: 480px 1fr;
        grid-row: 1 / 2;
        gap: 120px;
        min-height: 526px;
    }  
`;

export const StyledImg = styled(Img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 358px;
    height: 416px;
    border-radius: 24px;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        width: 350px;
        height: 400px;
        top: ${({ $isFront }) => $isFront ? '126px' : '0'};
        left: ${({ $isFront }) => $isFront ? '130px' : '0'};
    }  
`;

export const TextWrapper = styled.div`  
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 16px;
    line-height: 150%;    

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        padding: 64px 0;
        font-size: 18px; 
        gap: 40px;       
    } 
`;

export const TitleWrapper = styled.div`
    padding: 0;
    margin: 0;
`;

export const StyledText = styled.p`
    padding: 0;
    margin: 0;    
    font-weight: 400;
`;

export const GuideButton = styled(StyledButton)`  
    align-self: center;        
    border: none;    

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        align-self: flex-start;      
    } 

    &:hover {
        outline: 2px solid ${(props) => props.theme.primaryButtonColor};
    }
`;
