import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <div className="topnav">
        <Link className="header-link-home" to="/">
         <img src="/icon.png" align="left" style={{ marginRight:`6px` }} alt='logo'></img> {title}
        </Link>
        <div className="topnav-right">
          <Link className="header-link-home" to="/articles">
            Articles
          </Link>
          <Link className="header-link-home" to="/projects">
            Projects
          </Link>
          <Link className="header-link-home" to="/books">
            Books
          </Link>
          <Link className="header-link-home" to="/about">
            About me
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} - Built with
        {` `}
        <a href="https://www.gatsbyjs.com" rel="noreferrer" target="_blank">
          Gatsby
        </a>
        , Hosted by {` `}
        <a href="https://www.netlify.com" rel="noreferrer" target="_blank">
          Netlify
        </a>
      </footer>
    </div>
  )
}

export default Layout
