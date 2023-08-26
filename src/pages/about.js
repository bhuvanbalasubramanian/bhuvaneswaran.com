import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const AboutPage = () => (
  <Layout location="/" title="Bhuvan">
    <Seo title="About me | Bhuvaneswaran Balasubramanian" />
    <h1>About me</h1>
    <section>
      <p>
        Hello!{" "}
        <span role="img" aria-label="hello">
          👋
        </span>{" "}
        &nbsp; My name is Bhuvaneswaran Balasubramanian. I was born and raised
        in Chennai, India. I started using computers from the age of 14. 
        <br/>
        Much passionate about computer science that fascinated me to do bachelor
        degree(B.E) in computer science engineering and masters(M.Tech) in Artificial Intelligence and Data Science.
        I have started my career as a Software Engineer and currently working as a Software Development Lead in Denmark based company in Chennai.
      </p>

      <p>
        Being a full stack developer, I have worked in various
        tools and programming languages. Typescript and Python are my favourite
        languages.
      </p>

      <p>
        You can contact me by email at{" "}
        <a href="mailto:bhuvan@bhuvaneswaran.com">bhuvan@bhuvaneswaran.com</a> to
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
        <table className="text-base text-gray-700">
          <tr>
            <td className="font-bold py-2 pr-4">Languages</td>{" "}
            <td className="py-2 px-4">
              Node.js, React, Java, JavaScript, TypeScript, HTML5, CSS3
            </td>
          </tr>{" "}
          <tr>
            <td className="font-bold py-2 pr-4">Frameworks</td>{" "}
            <td className="py-2 px-4">Express.js, Nest.js</td>
          </tr>{" "}
          <tr>
            <td className="font-bold py-2 pr-4">Database</td>
            <td className="py-2 px-4">MySql, MongoDB</td>
          </tr>{" "}
          <tr>
            <td className="font-bold py-2 pr-4">Web Services</td>{" "}
            <td className="py-2 px-4">REST API, Microservice Architecture</td>
          </tr>
          <tr>
            <td className="font-bold py-2 pr-4">Messaging System</td>{" "}
            <td className="py-2 px-4">Apache Kafka, Redis Cache, Avro</td>
          </tr>
          <tr>
            <td className="font-bold py-2 pr-4">Test Automation</td>{" "}
            <td className="py-2 px-4">Protractor, Cypress</td>
          </tr>
          <tr>
            <td className="font-bold py-2 pr-4">Cloud</td>{" "}
            <td className="py-2 px-4">Microsoft Azure</td>
          </tr>
        </table>

        <div className="tools-icon">
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
        <table className="text-base text-gray-700">
          <tr>
            <td className="font-bold py-2 pr-4">DevOps Engineer</td>
            <td className="py-2 px-4">Microsoft DevOps Engineer Expert</td>
          </tr>
          <tr>
            <td className="font-bold py-2 pr-4">Cloud Developer</td>
            <td className="py-2 px-4">Microsoft Azure Developer Associate</td>
          </tr>
          <tr>
            <td className="font-bold py-2 pr-4">EA</td>
            <td className="py-2 px-4">Certified TOGAF 9.2 Enterprise Architect</td>
          </tr>
          <tr>
            <td className="font-bold py-2 pr-4">Agile</td>
            <td className="py-2 px-4">Certified Scrum Developer® (CSD)</td>
          </tr>
        </table>
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
      <table className="text-base text-gray-700">
        <tr>
          <td className="font-bold py-2 pr-4">
            Reading{" "}
            <span role="img" aria-label="books">
              📚
            </span>
          </td>{" "}
          <td className="py-2 px-4">Kindle Paperwhite (10th gen)</td>
        </tr>{" "}
        <tr>
          <td className="font-bold py-2 pr-4">
            Cycling{" "}
            <span role="img" aria-label="cycle">
              🚴‍♂️
            </span>
          </td>{" "}
          <td className="py-2 px-4">MachCity bike</td>
        </tr>{" "}
        <tr>
          <td className="font-bold py-2 pr-4">
            Swimming{" "}
            <span role="img" aria-label="swim">
              🏊
            </span>
          </td>
          <td className="py-2 px-4">Freestyle</td>
        </tr>{" "}
        <tr>
          <td className="font-bold py-2 pr-4">
            Gaming console{" "}
            <span role="img" aria-label="game">
              🎮
            </span>
          </td>{" "}
          <td className="py-2 px-4">PS4 pro</td>
        </tr>
      </table>
    </section>
    <hr />
    <section>
      <h3> Books <span role="img" aria-label="booklist">
        📚
      </span></h3>
      <p>Here is my collection of books which I finished reading.</p>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className='col-sm-3'>
                <div className="card">
                  <img className="card-img-top" src="../books/book2.jpg" alt="tuesdaywithmorrie_cover" />
                  <div className="card-body">
                    <a href="https://www.goodreads.com/book/show/6900.Tuesdays_with_Morrie" className="card-link" target="_blank"
                      rel="noreferrer"><h5 className="card-text">Tuesdays with Morrie</h5></a>
                  </div>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className="card">
                  <img className="card-img-top" src="../books/book1.jpg" alt="thealchemist_cover" />
                  <div className="card-body">
                    <a href="https://www.goodreads.com/book/show/18144590-the-alchemist" className="card-link" target="_blank"
                      rel="noreferrer"><h5 className="card-text">The Alchemist</h5></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

      <table className="text-base text-gray-700">
        <tr>
          <td className="font-bold py-2 pr-4">
            France{" "}
            <span role="img" aria-label="game">
              🇫🇷
            </span>
          </td>{" "}
          <td className="py-2 px-4">Paris</td>
        </tr>{" "}
        <tr>
          <td className="font-bold py-2 pr-4">
            Netherlands{" "}
            <span role="img" aria-label="game">
              🇳🇱
            </span>
          </td>{" "}
          <td className="py-2 px-4">Amsterdam</td>
        </tr>{" "}
        <tr>
          <td className="font-bold py-2 pr-4">
            Germany{" "}
            <span role="img" aria-label="game">
              🇩🇪
            </span>
          </td>{" "}
          <td className="py-2 px-4">Hamburg</td>
        </tr>{" "}
        <tr>
          <td className="font-bold py-2 pr-4">
            Italy{" "}
            <span role="img" aria-label="game">
              🇮🇹
            </span>
          </td>{" "}
          <td className="py-2 px-4">Venice, Rome, Florence</td>
        </tr>{" "}
        <tr>
          <td className="font-bold py-2 pr-4">
            Denmark{" "}
            <span role="img" aria-label="game">
              🇩🇰
            </span>
          </td>{" "}
          <td className="py-2 px-4">Copenhagen, Nordborg & Aarhus</td>
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
          href="https://twitter.com/heybhuvan"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        {", "}
        <a
          href="https://www.linkedin.com/in/bhuvaneswaran-balasubramanian/"
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
