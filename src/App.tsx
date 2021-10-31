import React, { useState } from 'react';

import styled from 'styled-components';
import { DateTime } from 'luxon';

import myAvatar from './images/avatar.jpg';
import { animated } from 'react-spring';

import cs50certificate from './images/cs50-certificate.png';

import StackoverflowImage from './icons/stackoverflow.jpg';

import { getYearDiff } from './util/util';

import styles from './App.module.scss';

import { FacebookIcon, LinkedInIcon, EmailIcon, GithubIcon, TwitterIcon } from './icons';
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

const List = styled.ul`
  list-style-type: '-  ';

  padding-inline-start: 15px;

  @media screen and (min-width: 1280px) {
    padding-inline-start: 40px;
  }
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

const H2Header = styled.h2`
  font-weight: 300;
  font-size: 24px;
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

const ListItem = styled.li``;

const LinkButton = styled.button`
  all: unset;

  font-weight: bold;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

const Paragraph = styled.p``;

const Hr = styled.hr`
  margin: 32px 0px 20px 0px;
`;

const Socials = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialsNonLastLink = styled.a`
  margin-right: 10px;
`;

const FromToDate = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 300;
  font-size: 10px;
`;

const FlexList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FlexListItem = styled.div`
  border: 1px solid #a9a9a9;
  margin: 5px;
  padding: 5px;
`;

const positions = {
  milestep: {
    fullStackDev: {
      from: DateTime.now().set({ year: 2020, month: 10 }),
      to: DateTime.now().set({ year: 2021, month: 7 }),
    },
    techLead: {
      from: DateTime.now().set({ year: 2021, month: 4 }),
      to: DateTime.now().set({ year: 2021, month: 7 }),
    },
  },
  titaniumTechnologies: {
    backendDev: {
      from: DateTime.now().set({ year: 2021, month: 7, day: 6 }),
    },
  },
};

const exp = {
  languages: {
    typescript: {
      professionally: {
        from: DateTime.now().set({
          year: 2020,
          month: 10,
        }),
      },
      personally: {
        from: DateTime.now().set({
          year: 2020,
          month: 5,
        }),
      },
    },
    javascript: {
      professionally: {
        from: DateTime.now().set({
          year: 2020,
          month: 10,
        }),
      },
      personally: {
        from: DateTime.now().set({
          year: 2018,
          month: 9,
        }),
      },
    },
    csharp: {
      personally: {
        from: DateTime.now().set({
          year: 2019,
          month: 1,
        }),
        to: DateTime.now().set({
          year: 2019,
          month: 8,
        }),
      },
    },
  },
  frameworks: {
    nodejs: {
      professionally: {
        from: DateTime.now().set({
          year: 2020,
          month: 10,
        }),
      },
      personally: {
        from: DateTime.now().set({
          year: 2018,
          month: 9,
        }),
      },
    },
    react: {
      professionally: {
        from: DateTime.now().set({
          year: 2020,
          month: 10,
        }),
      },
      personally: {
        from: DateTime.now().set({
          year: 2020,
          month: 5,
        }),
      },
    },
  },
  storageSystems: {
    postgresql: {
      professionally: {
        from: DateTime.now().set({
          year: 2020,
          month: 10,
        }),
      },
      personally: {
        from: DateTime.now().set({
          year: 2020,
          month: 5,
        }),
      },
    },
    redis: {
      professionally: {
        from: DateTime.now().set({
          year: 2020,
          month: 10,
        }),
      },
      personally: {
        from: DateTime.now().set({
          year: 2020,
          month: 5,
        }),
      },
    },
  },
  apis: {
    graphql: {
      professionally: {
        from: DateTime.now().set({
          year: 2021,
          month: 4,
        }),
      },
      personally: {
        from: DateTime.now().set({
          year: 2020,
          month: 5,
        }),
      },
    },
    rest: {
      professionally: {
        from: DateTime.now().set({
          year: 2020,
          month: 10,
        }),
      },
    },
  },
  hostingPlatforms: {
    aws: {
      professionally: {
        from: DateTime.now().set({
          year: 2021,
          month: 4,
        }),
      },
      personally: {
        from: DateTime.now().set({
          year: 2019,
          month: 8,
        }),
      },
    },
    digitalOcean: {
      professionally: {
        from: DateTime.now().set({
          year: 2020,
          month: 10,
        }),
      },
      personally: {
        from: DateTime.now().set({
          year: 2019,
          month: 6,
        }),
      },
    },
  },
};

const projects = [
  {
    name: 'LiveWell Home',
    link: 'https://mylivewellhome.com/navigation-space/dashboard',
    description: 'as a single developer for the project',
  },
  {
    name: 'Meetmeinthebar',
    link: 'https://meetmeinthe.bar',
    description: 'as a full stack developer, recently as a tech lead as well',
  },
];

const books = ['Software Architecture in Practice (SEI Series in Software Engineering) 3rd Edition (Len Bass, Paul Clements, Rick Kazman)', 'A Concise Introduction to Mathematical Logic 3rd Edition (Wolfgang Rautenberg)'];

const courses = [
  {
    name: 'The Modern GraphQL Bootcamp (with Node.js and Apollo) (Andrew Mead)',
    link: 'https://www.udemy.com/certificate/UC-d052a15d-2dd6-434c-b314-2d3e6fe09119/',
  },
  {
    name: 'Node JS: Advanced Concepts (Stephen Grider)',
    link: 'https://www.udemy.com/certificate/UC-b0cee370-75b2-4101-a5cd-c05845c69ca1/',
  },
  {
    name: "CS50: CS50's Introduction to Computer Science",
    link: `/images/cs50-certificate.png`,
  },
];

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
          <QuoteHeader>I break things until they start working</QuoteHeader>
          <Socials>
            <SocialsNonLastLink target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ruslan-plastun/">
              <LinkedInIcon className={styles.icon} />
            </SocialsNonLastLink>
            <SocialsNonLastLink target="_blank" rel="noopener noreferrer" href="https://github.com/ZaharZagrava">
              <GithubIcon className={styles.icon} />
            </SocialsNonLastLink>
            <SocialsNonLastLink target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/7735423/zahar-zagrava?tab=profile">
              <img src={StackoverflowImage} alt="Stackoverflow" className={styles.stackoverflow_icon} />
            </SocialsNonLastLink>
            <SocialsNonLastLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/zaharzagrava">
              <TwitterIcon className={styles.icon} />
            </SocialsNonLastLink>
            <SocialsNonLastLink target="_blank" rel="noopener noreferrer" href="mailto: zaharzagrava@gmail.com">
              <EmailIcon className={styles.icon} />
            </SocialsNonLastLink>
            <SocialsNonLastLink target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/zahar.zagrava.1">
              <FacebookIcon className={styles.icon} />
            </SocialsNonLastLink>
          </Socials>
          <H2HeaderCenter>
            <a target="_blank" rel="noopener noreferrer" href="https://techrez.io/resume/ruslan-plastun" style={{fontWeight: 'normal'}}>
              Resume
            </a>
          </H2HeaderCenter>
          <H2Header>Skills</H2Header>
          <FlexList>
            <FlexListItem>Elasticsearch</FlexListItem>
            <FlexListItem>Storybook</FlexListItem>
            <FlexListItem>Docker, docker-compose</FlexListItem>
            <FlexListItem>knex, sequelize, typeorm</FlexListItem>
            <FlexListItem>type-graphql</FlexListItem>
            <FlexListItem>redux, redux-saga, immer, @reduxjs/toolkit</FlexListItem>
            <FlexListItem>styled-components, SASS</FlexListItem>
            <FlexListItem>luxon, moment, lodash</FlexListItem>
            <FlexListItem>formik, yup</FlexListItem>
            <FlexListItem>axios, got, superagent</FlexListItem>
            <FlexListItem>prettier, eslint, typedoc</FlexListItem>
            <FlexListItem>Material UI</FlexListItem>
          </FlexList>
          <H2Header>Languages</H2Header>
          <List>
            <ListItem>English - B2</ListItem>
            <List>
              <ListItem>had professional exprience of interacting with english-speaking clients</ListItem>
            </List>
            <ListItem>Ukrainian - native</ListItem>
            <ListItem>Russian - proficient</ListItem>
          </List>
          <H2Header>Books</H2Header>
          <List>
            {books.map((book) => (
              <ListItem key={book}>{book}</ListItem>
            ))}
          </List>
          <H2Header>Courses</H2Header>
          <List>
            <ListItem>
              <a target="_blank" rel="noopener noreferrer" href={courses[0].link}>
                {courses[0].name}
              </a>
            </ListItem>
            <ListItem>
              <a target="_blank" rel="noopener noreferrer" href={courses[1].link}>
                {courses[1].name}
              </a>
            </ListItem>
            <ListItem>
              <LinkButton onClick={() => setisCS50Shown(true)}>{courses[2].name}</LinkButton>
            </ListItem>
          </List>
          <H2Header>Work</H2Header>
          <List>
            <ListItem>
              When I review a PR or write code myself, I make sure to balance changes to all attributes of the codebase (e.g. maintainability, interoperability, performance), and that the best solution possible was chosen for the task
            </ListItem>
            <ListItem>
              I've been coding since I was 14 years old using C++, then C#, then JavaScript, and I’ve seen many architectures, design principles, and best practices used in software engineering, so I have a solid baggage of tricks to use in my
              day-to-day work
            </ListItem>
            <ListItem>I am a quick and eager learner, so "full-stack new stuff learner" is basically my second job title :)</ListItem>
          </List>
          <FlexList>
            <FlexListItem>Use a stand-up desk</FlexListItem>
            <FlexListItem>Use pomodoro (50 min. work / 6 min. rest)</FlexListItem>
            <FlexListItem>Quiet environment</FlexListItem>
            <FlexListItem>Plan ahead before getting to code</FlexListItem>
          </FlexList>
          <H2Header>Education</H2Header>
          <Paragraph>
            State Higher Educational Institution Banking University Cherkasy Institute <FromToDate></FromToDate> (2018 - 2022)
          </Paragraph>
          <H2Header>Personal</H2Header>
          <Paragraph>I like rambling around the city to relax and reset after work, exploring new places; watching movies, tv shows (Love, death &amp; robots, Game of Thrones, Stranger Things), and... yeah, that's pretty much it :)</Paragraph>
          <Hr />
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
