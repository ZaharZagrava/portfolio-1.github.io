import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";
import { DateTime } from "luxon";

import myAvatar from "./images/Untitled.png";
import githubSquare from "./images/github-square-social-media-512.png";
import linkedinSquare from "./images/linkedin-square-social-media-512.png";
import mailSquare from "./images/mail-square-social-media-512.png";
import stackoverflowSquare from "./images/stackoverflow-square-social-media-512.png";
import twitterSquare from "./images/twitter-square-social-media-512.png";
import { animated, useSpring } from "react-spring";

import { getYearDiff } from "./util/util";

const AppContainer = styled.div`
  width: 60%;
  margin: auto;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  color: #303030;

  padding: 10px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

`;


const Main = styled.main``;

const Avatar = styled.img.attrs({
  src: myAvatar,
})`
  width: 300px;
  height: 300px;
  object-fit: cover;
  text-align: center;
`;

const LessIsMore = styled.p`
  font-size: 48px;

  font-style: italic;
  text-align: center;
`;

const List = styled.ul``;

const H1Header = styled.h2`
  font-weight: 300;
  font-size: 36px;
  text-align: center;
`;

const H2Header = styled.h2`
  font-weight: 300;
  font-size: 24px;
`;

const LanguagesList = styled.ul``;

const ListItem = styled.li``;

const Footer = styled.main`
  display: flex;
`;

const FooterNonLastLink = styled.a`
  margin-right: 10px;
`;

const positions = {
  fullStackDev: DateTime.now().set({ year: 2020, month: 10, }),
  techLead: DateTime.now().set({ year: 2021, month: 4, }),
}

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
          year: 2020,
          month: 10,
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
          year: 2017,
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
    rest: {
      professionally: {
        from: DateTime.now().set({
          year: 2020,
          month: 10,
        }),
      },
    },
  },
};

const projects = [
  {
    name: "meetmeinthebar",
    images: [],
    link: "https://meetmeinthebar.com",
    description: "",
  },
  {
    name: "mylivewellhome",
    images: [],
    link: "https://meetmeinthebar.com",
    description: "",
    workingOn: true,
  },
];

const books = [
  "Software Architecture in Practice (SEI Series in Software Engineering) 3rd Edition (Len Bass, Paul Clements, Rick Kazman)",
  "A Concise Introduction to Mathematical Logic 3rd Edition (Wolfgang Rautenberg)",
];

const courses = [
  {
    name: "The Modern GraphQL Bootcamp (with Node.js and Apollo) (Andrew Mead)",
    link: 'https://www.udemy.com/certificate/UC-d052a15d-2dd6-434c-b314-2d3e6fe09119/'
  },
  {
    name: "Node JS: Advanced Concepts (Stephen Grider)",
    link: 'https://www.udemy.com/certificate/UC-b0cee370-75b2-4101-a5cd-c05845c69ca1/'
  },
];

function App() {
  const props = useSpring({
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(0px, 30px)" },
    delay: 0.3,
    config: {
      duration: 500
    },
  });

  return (
    <animated.div style={props}>
    <AppContainer>
      <Header className="header">
        <LessIsMore>Less is more</LessIsMore>
        <Avatar />
        <H1Header>RUSLAN PLASTUN</H1Header>
      </Header>
      <Main>
        <H2Header>Positions</H2Header>
        <List>
          <ListItem>
            Full Stack Developer - {`${getYearDiff(positions.fullStackDev, DateTime.now())}`}
          </ListItem>
          <ListItem>
            Tech Lead - {`${getYearDiff(positions.techLead, DateTime.now())}`}
          </ListItem>
        </List>
        <H2Header>Languages</H2Header>
        <LanguagesList>
          <ListItem>
            Typescript - {`${getYearDiff(exp.languages.typescript.professionally.from, DateTime.now())}`} professional experience, {`${getYearDiff(exp.languages.typescript.personally.from, DateTime.now())}`} total (main specialization)
          </ListItem>
          <ListItem>
            Javascript - {`${getYearDiff(exp.languages.javascript.professionally.from, DateTime.now())}`} professional experience, {`${getYearDiff(exp.languages.javascript.personally.from, DateTime.now())}`} total
          </ListItem>
          <ListItem>
            C# - {`${getYearDiff(exp.languages.csharp.personally.from, DateTime.now())}`} total
          </ListItem>
        </LanguagesList>
        <H2Header>Storage systems</H2Header>
        <List>
          <ListItem>
            PostgreSQL - {`${getYearDiff(exp.storageSystems.postgresql.professionally.from, DateTime.now())}`} professional experience, {`${getYearDiff(exp.storageSystems.postgresql.personally.from, DateTime.now())}`} total
          </ListItem>
          <ListItem>
            Redis - {`${getYearDiff(exp.storageSystems.redis.professionally.from, DateTime.now())}`} professional experience, {`${getYearDiff(exp.storageSystems.redis.personally.from, DateTime.now())}`} total
          </ListItem>
        </List>
        <H2Header>APIs</H2Header>
        <List>
          <ListItem>
            GraphQL - {`${getYearDiff(exp.apis.graphql.professionally.from, DateTime.now())}`} professional experience, {`${getYearDiff(exp.apis.graphql.personally.from, DateTime.now())}`} total
          </ListItem>
          <ListItem>
            REST - {`${getYearDiff(exp.apis.rest.professionally.from, DateTime.now())}`} professional experience
          </ListItem>
        </List>
        <H2Header>Technologies, tools</H2Header>
        <List>
          <ListItem>Redux</ListItem>
          <ListItem>Redux saga</ListItem>
          <ListItem>Luxon, Moment</ListItem>
          <ListItem>lodash (duh...)</ListItem>
          <ListItem>yup</ListItem>
          <ListItem>formik</ListItem>
          <ListItem>axios</ListItem>
          <ListItem>immer</ListItem>
          <ListItem>styled-components</ListItem>
          <ListItem>knex</ListItem>
          <ListItem>type-graphql</ListItem>
          <ListItem>prettier</ListItem>
          <ListItem>typedoc</ListItem>
          <ListItem>SASS</ListItem>
          <ListItem>Material UI</ListItem>
          <ListItem>Elasticsearch</ListItem>
        </List>
        <H2Header>Books read</H2Header>
        <List>
          {books.map(book => <ListItem>{book}</ListItem>)}
        </List>
        <H2Header>Courses Taken</H2Header>
        <List>
          {courses.map(course => <ListItem><a target="_blank" rel="noopener noreferrer" href={course.link}>{course.name}</a></ListItem>)}
        </List>
        <H2Header>Projects</H2Header>
        <List>
          <ListItem>Meetmeinthebar</ListItem>
          <ListItem>LiveWell Home</ListItem>
          <ListItem>Knowledge Base</ListItem>
        </List>
        <H2Header>Contacts</H2Header>
        <Footer>
            <FooterNonLastLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ruslan-plastun/"
            >
              <img
                width="30px"
                src={linkedinSquare}
              />
            </FooterNonLastLink>
            <FooterNonLastLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ZaharZagrava"
            >
              <img
                width="30px"
                src={githubSquare}
              />
            </FooterNonLastLink>
            <FooterNonLastLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://stackoverflow.com/users/7735423/zahar-zagrava?tab=profile"
            >
              <img
                width="30px"
                src={stackoverflowSquare}
              />
            </FooterNonLastLink>
            <FooterNonLastLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/zaharzagrava"
            >
              <img
                width="30px"
                src={twitterSquare}
              />
            </FooterNonLastLink>
            <FooterNonLastLink
              target="_blank"
              rel="noopener noreferrer"
              href="mailto: admin@zaharzagrava.com"
            >
              <img
                width="30px"
                src={mailSquare}
              />
            </FooterNonLastLink>
        </Footer>
      </Main>
    </AppContainer>
  </animated.div>

  );
}

export default App;
