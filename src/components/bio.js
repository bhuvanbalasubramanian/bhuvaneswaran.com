/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.jpg"
        width={150}
        height={150}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
         {author?.summary || null}  
          {` `} 
          { /* Follow me on {` `} 
          <a target='_blank' rel="noreferrer" href={`https://twitter.com/${social?.twitter || ``} `}>
          Twitter
          </a>,{` `}
          <a target='_blank' rel="noreferrer" href={`https://www.linkedin.com/in/${social?.linkedin || ``} `}>Linkedin</a>. */}
          <br/><Link to="/about">More about me →</Link> {` `} {` `} <Link to="/projects">My Projects →</Link>
        </p>
      )}
    </div>
  )
}

export default Bio
