import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  const TitleWrapper = location.pathname === rootPath ? 'h1' : 'p';
  return (
    <TitleWrapper>
      <Link to={`/`} >
        {children}
      </Link>
    </TitleWrapper>
  )
}

export default ({ children, title, ...props }) => {
  return (
    <header>
      <div>
        <div>
          <Title {...props}>{title}</Title>
          {children}
        </div>
        {props.location.pathname === rootPath && <Bio />}
      </div>
    </header>
  )
}
