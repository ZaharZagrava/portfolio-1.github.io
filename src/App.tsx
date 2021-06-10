import React, { useState } from "react";

import styled from "styled-components";
import { DateTime } from "luxon";

import myAvatar from "./images/avatar.jpg";
import { animated } from "react-spring";

import cs50certificate from "./images/cs50-certificate.png";

import StackoverflowImage from './icons/stackoverflow.jpg'

import { getYearDiff } from "./util/util";

import styles from "./App.module.scss";

import {
  FacebookIcon,
  LinkedInIcon,
  EmailIcon,
  GithubIcon,
  TwitterIcon,
} from "./icons";
import { Overlay } from "./components/Overlay/Overlay";

const Root = styled(animated.div)`
  min-height: 100vh;
  max-width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppContainer = styled.div`
  width: 100%;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
  alt: "My Avatar",
})`
  width: 300px;
  height: 300px;
  object-fit: cover;
  text-align: center;
  border-radius: 50%;
`;

const List = styled.ul`
  list-style-type: "-  ";

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

const Footer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterNonLastLink = styled.a`
  margin-right: 10px;
`;

const positions = {
  fullStackDev: DateTime.now().set({ year: 2020, month: 10 }),
  techLead: DateTime.now().set({ year: 2021, month: 4 }),
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
    name: "Meetmeinthebar",
    link: "https://meetmeinthe.bar",
    description: "as a full stack developer, recently as a tech lead as well",
    workingOn: true,
  },
  {
    name: "LiveWell Home",
    link: "http://mylivewellhome.com",
    description: "as a single developer for the project",
    workingOn: true,
  },
  {
    name: "Knowledge Base",
    link: "https://portfolio-project-2-f7d94.web.app/",
    description:
      "my first, very simple project in React before I got my first job.",
  },
  {
    name: "Zigravio",
    link: "https://bitbucket.org/zagrava/zigravio/src/master/",
    description:
      "is the real-time 2d shooter browser game, that I was working on in school. Only node.js and socket.io basically, no other frameworks.",
  },
];

const books = [
  "Software Architecture in Practice (SEI Series in Software Engineering) 3rd Edition (Len Bass, Paul Clements, Rick Kazman)",
  "A Concise Introduction to Mathematical Logic 3rd Edition (Wolfgang Rautenberg)",
];

const courses = [
  {
    name: "The Modern GraphQL Bootcamp (with Node.js and Apollo) (Andrew Mead)",
    link: "https://www.udemy.com/certificate/UC-d052a15d-2dd6-434c-b314-2d3e6fe09119/",
  },
  {
    name: "Node JS: Advanced Concepts (Stephen Grider)",
    link: "https://www.udemy.com/certificate/UC-b0cee370-75b2-4101-a5cd-c05845c69ca1/",
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
      {!isLoaded && <Overlay /> }
      <AppContainer>
        <Header className="header">
          <H1Header>RUSLAN PLASTUN</H1Header>
          <Avatar onLoad={() => setIsLoaded(true)} />
        </Header>
        <Main>
          <H2Header>Experience</H2Header>
          <List>
            <ListItem>
              Full Stack Developer -{" "}
              {`${getYearDiff(positions.fullStackDev, DateTime.now())}`}
            </ListItem>
            <ListItem>
              Tech Lead - {`${getYearDiff(positions.techLead, DateTime.now())}`}
            </ListItem>
          </List>
          <H2Header>Projects</H2Header>
          <List>
            {projects.map((project) => (
              <ListItem key={project.name}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  {project.name}
                </a>{" "}
                - {project.description}
                {project.workingOn && " (currently working on)."}
              </ListItem>
            ))}
          </List>
          <H2Header>Languages</H2Header>
          <List>
            <ListItem>
              Typescript -{" "}
              {`${getYearDiff(
                exp.languages.typescript.professionally.from,
                DateTime.now()
              )}`}{" "}
              professional experience,{" "}
              {`${getYearDiff(
                exp.languages.typescript.personally.from,
                DateTime.now()
              )}`}{" "}
              total (main specialization)
            </ListItem>
            <ListItem>
              Javascript -{" "}
              {`${getYearDiff(
                exp.languages.javascript.professionally.from,
                DateTime.now()
              )}`}{" "}
              professional experience,{" "}
              {`${getYearDiff(
                exp.languages.javascript.personally.from,
                DateTime.now()
              )}`}{" "}
              total
            </ListItem>
            <ListItem>
              C# -{" "}
              {`${getYearDiff(
                exp.languages.csharp.personally.from,
                exp.languages.csharp.personally.to
              )}`}{" "}
              total
            </ListItem>
          </List>
          <H2Header>Frameworks</H2Header>
          <List>
            <ListItem>
              Node.js -{" "}
              {`${getYearDiff(
                exp.frameworks.nodejs.professionally.from,
                DateTime.now()
              )}`}{" "}
              professional experience,{" "}
              {`${getYearDiff(
                exp.frameworks.nodejs.personally.from,
                DateTime.now()
              )}`}{" "}
              total (it is a runtime, but acts as a framework as well)
            </ListItem>
            <ListItem>
              React.js -{" "}
              {`${getYearDiff(
                exp.frameworks.react.professionally.from,
                DateTime.now()
              )}`}{" "}
              professional experience,{" "}
              {`${getYearDiff(
                exp.frameworks.react.personally.from,
                DateTime.now()
              )}`}{" "}
              total
            </ListItem>
          </List>
          <H2Header>Storage systems</H2Header>
          <List>
            <ListItem>
              PostgreSQL -{" "}
              {`${getYearDiff(
                exp.storageSystems.postgresql.professionally.from,
                DateTime.now()
              )}`}{" "}
              professional experience,{" "}
              {`${getYearDiff(
                exp.storageSystems.postgresql.personally.from,
                DateTime.now()
              )}`}{" "}
              total
            </ListItem>
            <ListItem>
              Redis -{" "}
              {`${getYearDiff(
                exp.storageSystems.redis.professionally.from,
                DateTime.now()
              )}`}{" "}
              professional experience,{" "}
              {`${getYearDiff(
                exp.storageSystems.redis.personally.from,
                DateTime.now()
              )}`}{" "}
              total
            </ListItem>
          </List>
          <H2Header>APIs</H2Header>
          <List>
            <ListItem>
              GraphQL -{" "}
              {`${getYearDiff(
                exp.apis.graphql.professionally.from,
                DateTime.now()
              )}`}{" "}
              professional experience,{" "}
              {`${getYearDiff(
                exp.apis.graphql.personally.from,
                DateTime.now()
              )}`}{" "}
              total
            </ListItem>
            <ListItem>
              REST -{" "}
              {`${getYearDiff(
                exp.apis.rest.professionally.from,
                DateTime.now()
              )}`}{" "}
              professional experience
            </ListItem>
          </List>
          <H2Header>Hosting platforms</H2Header>
          <List>
            <ListItem>
              AWS -{" "}
              {`${getYearDiff(
                exp.hostingPlatforms.aws.professionally.from,
                DateTime.now()
              )}`}{" "}
              professional experience,{" "}
              {`${getYearDiff(
                exp.hostingPlatforms.aws.personally.from,
                DateTime.now()
              )}`}{" "}
              total
            </ListItem>
            <ListItem>
              Digital Ocean -{" "}
              {`${getYearDiff(
                exp.hostingPlatforms.digitalOcean.professionally.from,
                DateTime.now()
              )}`}{" "}
              professional experience
            </ListItem>
          </List>
          <H2Header>Other technologies</H2Header>
          <List>
            <ListItem>Elasticsearch</ListItem>
            <ListItem>redux, redux-saga, immer</ListItem>
            <ListItem>type-graphql</ListItem>
            <ListItem>knex</ListItem>
            <ListItem>styled-components</ListItem>
            <ListItem>luxon, moment, lodash</ListItem>
            <ListItem>yup</ListItem>
            <ListItem>formik</ListItem>
            <ListItem>axios, got, superagent</ListItem>
            <ListItem>prettier, eslint, typedoc</ListItem>
            <ListItem>SASS</ListItem>
            <ListItem>Material UI</ListItem>
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={courses[0].link}
              >
                {courses[0].name}
              </a>
            </ListItem>
            <ListItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={courses[1].link}
              >
                {courses[1].name}
              </a>
            </ListItem>
            <ListItem>
              <LinkButton onClick={() => setisCS50Shown(true)}>
                {courses[2].name}
              </LinkButton>
            </ListItem>
          </List>
          <H2Header>About Me</H2Header>
          <Paragraph>
            I like rambling around the city to
            relax and reset after work, exploring new places;
            watching movies, tv shows (Love, death &amp; robots, Game of Thrones,
            Stranger Things), and... yeah, that's pretty much it :)
          </Paragraph>
          <Hr />
          <Footer>
            <FooterNonLastLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ruslan-plastun/"
            >
              <LinkedInIcon className={styles.icon} />
            </FooterNonLastLink>
            <FooterNonLastLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ZaharZagrava"
            >
              <GithubIcon className={styles.icon} />
            </FooterNonLastLink>
            <FooterNonLastLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://stackoverflow.com/users/7735423/zahar-zagrava?tab=profile"
            >
              <img src={StackoverflowImage} alt="Stackoverflow" className={styles.stackoverflow_icon}  />
            </FooterNonLastLink>
            <FooterNonLastLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/zaharzagrava"
            >
              <TwitterIcon className={styles.icon} />
            </FooterNonLastLink>
            <FooterNonLastLink
              target="_blank"
              rel="noopener noreferrer"
              href="mailto: zaharzagrava@gmail.com"
            >
              <EmailIcon className={styles.icon} />
            </FooterNonLastLink>
            <FooterNonLastLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/zahar.zagrava.1"
            >
              <FacebookIcon className={styles.icon} />
            </FooterNonLastLink>
          </Footer>
        </Main>
      </AppContainer>
      {isCS50Shown && (
        <FullScreenContainer onClick={() => setisCS50Shown(false)}>
          <FullScreenImage
            src={cs50certificate}
            alt="CS50 Certificate"
            onClick={(e) => e.stopPropagation()}
          />
        </FullScreenContainer>
      )}
    </Root>)

}

export default App;
