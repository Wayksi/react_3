import React from "react";
import { StyledGuide, GuideContainer, ImageWrapper, StyledImg, TextWrapper, TitleWrapper, StyledText, GuideButton } from "./styled";
import backImage from '@assets/guide/back-image.png';
import frontImage from '@assets/guide/front-image.png';
import TitleNotice from "@ui/TitleNotice/titleNotice";
import { Title, TitleSize } from "@ui/Title/title";


function Guide() {
    return (
        <StyledGuide id="guide">
            <GuideContainer>
                <ImageWrapper>
                    <StyledImg src={backImage} width={350} height={400} alt='back-image' />
                    <StyledImg src={frontImage} width={350} height={400} alt='front-image' $isFront />
                </ImageWrapper>
                <TextWrapper>
                    <TitleWrapper>
                        <TitleNotice>о нашем походе</TitleNotice>
                        <Title size={TitleSize.MEDIUM} $marginBottom={0}>Исследуйте все горные массивы мира вместе с нами</Title>
                    </TitleWrapper>
                    <StyledText>
                        Его корни уходят в один фрагмент классической латыни 45 года н.э.,&nbsp;то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
                    </StyledText>
                    <GuideButton>Программа тура</GuideButton>
                </TextWrapper>
            </GuideContainer>
        </StyledGuide>
    );
}

export default Guide;
