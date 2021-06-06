import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const AboutPage = () => (
  <Layout location="/" title="Bhuvaneswaran Balasubramanian">
    <Seo title="About me | Bhuvaneswaran Balasubramanian" />
    <h1>About me</h1>
    <section>
      <p>
        Hello!{" "}
        <span role="img" aria-label="hello">
          👋
        </span>{" "}
        &nbsp; My name is Bhuvaneswaran Balasubramanian. I was born and raised
        in Chennai, India. I started using computers from the age of 14. Much
        passionate about computer science that fascinated me to do Bachelor
        degree in Computer Science Engineering and became a software engineer.
      </p>

      <p>
        Being a full stack developer / DevOps engineer, I have worked in various
        tools and programming languages. Java and Javascript are my favourite
        languages.
      </p>

      <p>
        You can contact me by email at{" "}
        <a href="mailto:hello@bhuvaneswaran.com">hello@bhuvaneswaran.com</a> to
        say Hi!
      </p>
    </section>
    <hr />
    <section>
      <h3>
        Tech Skills{" "}
        <span role="img" aria-label="swimming">
          💻
        </span>
      </h3>
      <div className="about">
        <table class="text-base text-gray-700">
          <tr>
            <td class="font-bold py-2 pr-4">Languages</td>{" "}
            <td class="py-2 px-4">
              Node.js, React, Java, JavaScript, TypeScript, HTML5, CSS3
            </td>
          </tr>{" "}
          <tr>
            <td class="font-bold py-2 pr-4">Frameworks</td>{" "}
            <td class="py-2 px-4">Express.js, Nest.js, Spring Boot</td>
          </tr>{" "}
          <tr>
            <td class="font-bold py-2 pr-4">Database</td>
            <td class="py-2 px-4">MySql, MongoDB</td>
          </tr>{" "}
          <tr>
            <td class="font-bold py-2 pr-4">Web Services</td>{" "}
            <td class="py-2 px-4">REST API, Microservice Architecture</td>
          </tr>
          <tr>
            <td class="font-bold py-2 pr-4">Messaging System</td>{" "}
            <td class="py-2 px-4">Apache Kafka, Redis Cache, Avro</td>
          </tr>
          <tr>
            <td class="font-bold py-2 pr-4">Test Automation</td>{" "}
            <td class="py-2 px-4">Protractor, Cypress</td>
          </tr>
          <tr>
            <td class="font-bold py-2 pr-4">Cloud</td>{" "}
            <td class="py-2 px-4">Microsoft Azure</td>
          </tr>
        </table>

        <div class="tools-icon">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
            alt="nodejs"
            width="50px"
            height="50px"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="java"
            width="50px"
            height="50px"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            alt="react"
            width="50px"
            height="50px"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="typescript"
            width="50px"
            height="50px"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="50px"
            height="50px"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            alt="html5"
            width="50px"
            height="50px"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            alt="css3"
            width="50px"
            height="50px"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
            alt="css3"
            width="50px"
            height="50px"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg"
            alt="nestjs"
            width="50px"
            height="50px"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg"
            alt="spring"
            width="50px"
            height="50px"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
            alt="mongodb"
            width="50px"
            height="50px"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
            alt="mysql"
            width="50px"
            height="50px"
          />
        </div>
      </div>
    </section>
    <hr />
    <section>
      <h3>
        Certifications{" "}
        <span role="img" aria-label="laptop">
          📜{" "}
        </span>
      </h3>
      <div className="about">
        <table class="text-base text-gray-700">
          <tr>
            <td class="font-bold py-2 pr-4">DevOps Engineer</td>
            <td class="py-2 px-4">Microsoft DevOps Engineer Expert</td>
          </tr>
          <tr>
            <td class="font-bold py-2 pr-4">Cloud Developer</td>
            <td class="py-2 px-4">Microsoft Azure Developer Associate</td>
          </tr>
          <tr>
            <td class="font-bold py-2 pr-4">EA</td>
            <td class="py-2 px-4">Certified TOGAF 9.2 Enterprise Architect</td>
          </tr>
          <tr>
            <td class="font-bold py-2 pr-4">Agile</td>
            <td class="py-2 px-4">Certified Scrum Developer® (CSD)</td>
          </tr>
        </table>
      </div>
      <div>
        <div className="badge">
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="3b67a953-13e4-479e-bd50-8863ec21aa85"
            data-share-badge-host="https://www.credly.com"
          ></div>
        </div>
        <div className="badge">
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="4644f28a-4e5c-4710-8ec2-4d72ce333081"
            data-share-badge-host="https://www.credly.com"
          ></div>
        </div>
        <div className="badge">
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="07ca4339-fd7a-46c0-84f8-3fa7216d8143"
            data-share-badge-host="https://www.credly.com"
          ></div>
        </div>
        <Helmet>
          <script
            type="text/javascript"
            async
            src="//cdn.credly.com/assets/utilities/embed.js"
          ></script>
        </Helmet>
      </div>
    </section>
    <div className="clear"></div>
    <hr />
    <section>
      <h3>
        Hobbies{" "}
        <span role="img" aria-label="swimming">
          ⛷
        </span>
      </h3>
      <table class="text-base text-gray-700">
        <tr>
          <td class="font-bold py-2 pr-4">
            Reading{" "}
            <span role="img" aria-label="books">
              📚
            </span>
          </td>{" "}
          <td class="py-2 px-4">Kindle Paperwhite (10th gen)</td>
        </tr>{" "}
        <tr>
          <td class="font-bold py-2 pr-4">
            Cycling{" "}
            <span role="img" aria-label="cycle">
              🚴‍♂️
            </span>
          </td>{" "}
          <td class="py-2 px-4">MachCity bike</td>
        </tr>{" "}
        <tr>
          <td class="font-bold py-2 pr-4">
            Swimming{" "}
            <span role="img" aria-label="swim">
              🏊
            </span>
          </td>
          <td class="py-2 px-4">Freestyle</td>
        </tr>{" "}
        <tr>
          <td class="font-bold py-2 pr-4">
            Gaming console{" "}
            <span role="img" aria-label="game">
              🎮
            </span>
          </td>{" "}
          <td class="py-2 px-4">PS4 pro</td>
        </tr>
      </table>
    </section>
    <hr />
    <section>
      <h3>
        Travel{" "}
        <span role="img" aria-label="world">
          🌏
        </span>
      </h3>
      <p>Few places I travelled,</p>

      <table class="text-base text-gray-700">
        <tr>
          <td class="font-bold py-2 pr-4">
            France{" "}
            <span role="img" aria-label="game">
              🇫🇷
            </span>
          </td>{" "}
          <td class="py-2 px-4">Paris</td>
        </tr>{" "}
        <tr>
          <td class="font-bold py-2 pr-4">
            Netherlands{" "}
            <span role="img" aria-label="game">
              🇳🇱
            </span>
          </td>{" "}
          <td class="py-2 px-4">Amsterdam</td>
        </tr>{" "}
        <tr>
          <td class="font-bold py-2 pr-4">
            Germany{" "}
            <span role="img" aria-label="game">
              🇩🇪
            </span>
          </td>{" "}
          <td class="py-2 px-4">Hamburg</td>
        </tr>{" "}
        <tr>
          <td class="font-bold py-2 pr-4">
            Denmark{" "}
            <span role="img" aria-label="game">
              🇩🇰
            </span>
          </td>{" "}
          <td class="py-2 px-4">Copenhagen, Nordborg & Aarhus</td>
        </tr>
      </table>
    </section>
    <hr />
    <section>
      <h3>
        Social{" "}
        <span role="img" aria-label="world">
          👍
        </span>
      </h3>
      <p>
        You can follow me on{" "}
        <a
          href="https://twitter.com/BhuvanOnCode"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        {", "}
        <a
          href="https://www.linkedin.com/in/bhuvan-balasubramanian/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </p>
    </section>
    <hr />
  </Layout>
)
export default AboutPage
