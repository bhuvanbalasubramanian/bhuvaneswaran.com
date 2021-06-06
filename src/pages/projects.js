import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Projects = () => {
  return (
    <Layout location="." title="Bhuvaneswaran Balasubramanian">
      <Seo title="Projects | Bhuvaneswaran Balasubramanian" />
      <h1>Projects</h1>
      <hr />
      <section>
        <h2 className="text-blue">UTM Builder for Google Analytics</h2>
        <div className="tech-italic">
          2021 - React, Gatsby, Javascript
        </div>
        <p>
          I built this app to generate UTM urls to share my blog posts in social
          media. UTM codes used to track the website traffic where its coming
          from and track the traffic in Google Analytics.
        </p>
        <p>
          Earlier, I use to append the campaign details manually and share the url in the Linkedin or Twitter.
          So I developed this app to generate the utm urls in a single click.
        </p>
        <img
          className="box mb-5"
          alt="utmbuilder-screenshot"
          src="../utmbuilder-snapshot.png"
        />
        <div className="mb-5">
          <a
            className="btn-primary"
            href="https://github.com/bhuvanbalasubramanian/utmbuilder"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
          <a
            className="btn-primary"
            href="https://utmbuilderga.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>
        <hr />
      </section>
    </Layout>
  )
}

export default Projects
