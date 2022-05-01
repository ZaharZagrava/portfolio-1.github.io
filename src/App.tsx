import React, { useState } from 'react';

import styled from 'styled-components';

import myAvatar from './images/avatar.jpg';
import { animated } from 'react-spring';

import cs50certificate from './images/cs50-certificate.png';

import StackoverflowImage from './icons/stackoverflow.jpg';

import styles from './App.module.scss';

import { LinkedInIcon, EmailIcon, GithubIcon } from './icons';
import { Overlay } from './components/Overlay/Overlay';

const Root = styled(animated.div)`
  min-height: 100vh;
  max-width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppContainer = styled.div`
  width: 100%;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  color: #303030;

  padding: 0px 15px 15px 15px;

  @media screen and (min-width: 1280px) {
    width: 80%;
  }

  @media screen and (min-width: 1920px) {
    width: 60%;
  }
`;

const FullScreenContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);

  position: fixed;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FullScreenImage = styled.img`
  width: 100%;

  @media screen and (min-width: 960px) {
    width: 75%;
  }

  @media screen and (min-width: 1280px) {
    width: 50%;
  }

  @media screen and (min-width: 1920px) {
    width: 50%;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main``;

const Avatar = styled.img.attrs({
  src: myAvatar,
  alt: 'My Avatar',
})`
  width: 300px;
  height: 300px;
  object-fit: cover;
  text-align: center;
  border-radius: 50%;
`;

const H1Header = styled.h2`
  font-weight: 300;
  font-size: 32px;
  line-height: 32px;
  text-align: center;

  @media screen and (min-width: 1280px) {
    font-size: 36px;
    line-height: 36px;
  }
`;

const H2HeaderCenter = styled.h2`
  font-weight: 300;
  font-size: 24px;
  text-align: center;
`;

const QuoteHeader = styled.p`
  font-style: italic;
  font-weight: 300;
  font-size: 18px;

  text-align: center;
`;

const Socials = styled.main`
  margin: 32px 0px 20px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialsNonLastLink = styled.a`
  margin-right: 10px;
`;

const FlexList = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
`;

const FlexListItem = styled.div`
  border: 1px solid #a9a9a9;
  margin: 5px;
  padding: 5px;

  text-align: center;
`;

function App() {
  const [isCS50Shown, setisCS50Shown] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <Root>
      {!isLoaded && <Overlay />}
      <AppContainer>
        <Header className="header">
          <H1Header>RUSLAN PLASTUN</H1Header>
          <Avatar onLoad={() => setIsLoaded(true)} />
        </Header>
        <Main>
          <QuoteHeader>Back end developer</QuoteHeader>
          <QuoteHeader>Node.js / Typescript / PostgreSQL / MySQL / Nest.js</QuoteHeader>
          <H2HeaderCenter>
            <a target="_blank" rel="noopener noreferrer" href="https://techrez.io/resume/ruslan-plastun" style={{fontWeight: 'normal'}}>
              Resume
            </a>
          </H2HeaderCenter>
          <FlexList>
            <FlexListItem>Use a stand-up desk</FlexListItem>
            <FlexListItem>Use pomodoro (50 min. work / 6 min. rest)</FlexListItem>
            <FlexListItem>Quiet environment</FlexListItem>
            <FlexListItem>Plan ahead before getting to code</FlexListItem>
            <FlexListItem>Take into account all quality attributes before making architecture decisions</FlexListItem>
            <FlexListItem>Software serves business needs, not the other way around</FlexListItem>
            <FlexListItem>Apply domain-driven design to designing software architecture</FlexListItem>
          </FlexList>
          <Socials>
            <SocialsNonLastLink target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/7735423/zahar-zagrava?tab=profile">
              <img src={StackoverflowImage} alt="Stackoverflow" className={styles.stackoverflow_icon} />
            </SocialsNonLastLink>
            <SocialsNonLastLink target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ruslan-plastun/">
              <LinkedInIcon className={styles.icon} />
            </SocialsNonLastLink>
            <SocialsNonLastLink target="_blank" rel="noopener noreferrer" href="https://github.com/ZaharZagrava">
              <GithubIcon className={styles.icon} />
            </SocialsNonLastLink>
            <SocialsNonLastLink target="_blank" rel="noopener noreferrer" href="mailto: zaharzagrava@gmail.com">
              <EmailIcon className={styles.icon} />
            </SocialsNonLastLink>
          </Socials>
        </Main>
      </AppContainer>
      {isCS50Shown && (
        <FullScreenContainer onClick={() => setisCS50Shown(false)}>
          <FullScreenImage src={cs50certificate} alt="CS50 Certificate" onClick={(e) => e.stopPropagation()} />
        </FullScreenContainer>
      )}
    </Root>
  );
}

export default App;
