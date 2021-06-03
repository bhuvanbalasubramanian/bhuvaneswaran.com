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
      Being a full stack developer, I have worked in various tools and programming
      languages. Java and Javascript are my favourite languages.
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
      <li>Languages: Node.js, React, Java, JavaScript, TypeScript, HTML5, CSS3</li>
      <li>Frameworks: Express.js, Nest.js, Spring Boot</li>
      <li>Database: MySql, MongoDB</li>
      <li>Web Services: REST API, Microservice Architecture</li> 
      <li>Messaging System: Apache Kafka, Redis Cache, Avro</li>
      <li>Test Automation: Protractor, Cypress</li>
      <li>DevOps: CI/CD</li>     
      <li>Cloud: Microsoft Azure</li>      
    </ul>
    </div>

    <h3>
      Certifications{" "}
      <span role="img" aria-label="laptop">
      📜 {" "}
      </span>
    </h3>

    <div className="about">
      <ul>
        <li>
          <a
            href="https://www.credly.com/badges/3b67a953-13e4-479e-bd50-8863ec21aa85"
            target="_blank"
            rel="noreferrer"
          >
            Microsoft Certified: DevOps Engineer Expert
          </a>
         
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/4644f28a-4e5c-4710-8ec2-4d72ce333081"
            target="_blank"
            rel="noreferrer"
          >
            Microsoft Certified: Azure Developer Associate
          </a>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/dafb9f1c-b03e-443c-b609-768376f355d1"
            target="_blank"
            rel="noreferrer"
          >
            Certified TOGAF Enterprise Architect
          </a>
        </li>
        <li>Certified Scrum Developer® (CSD)</li>
      </ul>
    </div>
    <div>
      <div className="badge"><div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="3b67a953-13e4-479e-bd50-8863ec21aa85" data-share-badge-host="https://www.credly.com"></div></div>
      <div className="badge"><div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="4644f28a-4e5c-4710-8ec2-4d72ce333081" data-share-badge-host="https://www.credly.com"></div></div>
      <div className="badge"><div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="07ca4339-fd7a-46c0-84f8-3fa7216d8143" data-share-badge-host="https://www.credly.com"></div></div>
      <Helmet>
      <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
      </Helmet>
    </div>
    <div className='clear'></div>
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
      </a>{", "}
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
