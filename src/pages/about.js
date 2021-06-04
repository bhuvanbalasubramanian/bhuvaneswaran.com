import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const AboutPage = () => (
  <Layout location="/" title="Bhuvaneswaran Balasubramanian">
    <Seo title="About me | Bhuvaneswaran Balasubramanian" />
    <h1>About me</h1>

    <p>
      Hello!{" "}
      <span role="img" aria-label="hello">
        👋
      </span>{" "}
      &nbsp; My name is Bhuvaneswaran Balasubramanian. I was born and raised in
      Chennai, India. I started using computers from the age of 14. Much
      passionate about computer science that drags me to do Bachelor degree in
      Computer Science Engineering and became a software engineer.
    </p>

    <p>
      Being a full stack developer/DevOps engineer, I have worked in various tools and
      programming languages. Java and Javascript are my favourite languages.
    </p>
    
    <p>
      You can contact me by email at{" "}
      <a href="mailto:hello@bhuvaneswaran.com">hello@bhuvaneswaran.com</a> to
      say Hi!
    </p>

    <h3>
      Skills{" "}
      <span role="img" aria-label="swimming">
        💻
      </span>
    </h3>
    <div className="about">
      <ul>
        <li>
          Languages: Node.js, React, Java, JavaScript, TypeScript, HTML5, CSS3
        </li>
        <li>Frameworks: Express.js, Nest.js, Spring Boot</li>
        <li>Database: MySql, MongoDB</li>
        <li>Web Services: REST API, Microservice Architecture</li>
        <li>Messaging System: Apache Kafka, Redis Cache, Avro</li>
        <li>Test Automation: Protractor, Cypress</li>
        <li>Cloud: Microsoft Azure</li>
      </ul>

      <div>
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

    <h3>
      Certifications{" "}
      <span role="img" aria-label="laptop">
        📜{" "}
      </span>
    </h3>

    <div className="about">
      <ul>
        <li>Microsoft Certified: DevOps Engineer Expert</li>
        <li>Microsoft Certified: Azure Developer Associate</li>
        <li>Certified TOGAF Enterprise Architect</li>
        <li>Certified Scrum Developer® (CSD)</li>
      </ul>
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
    <div className="clear"></div>
    <h3>
      Hobbies{" "}
      <span role="img" aria-label="swimming">
        ⛷
      </span>
    </h3>
    <div className="about">
      <ul>
        <li>Cycling: MachCity bike</li>
        <li>Swimming: Freestyle</li>
        <li>Gaming console: PS4 pro</li>
      </ul>
    </div>

    <h3>
      Travel{" "}
      <span role="img" aria-label="world">
        🌏
      </span>
    </h3>
    <p>Few places I travelled,</p>
    <div className="about">
      <ul>
        <li>France: Paris</li>
        <li>Netherlands: Amsterdam</li>
        <li>Germany: Hamburg</li>
        <li>Denmark: Copenhagen, Nordborg</li>
      </ul>
    </div>
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
  </Layout>
)
export default AboutPage
