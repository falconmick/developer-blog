import React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"

const Footer = ({ previous, next }) => (
  <footer>
    <hr />
    <Bio />
    {(previous || next) && (
      <ul>
        <li>
          {previous && (
            <Link to={previous.node.slug} rel="prev">
              ← {previous.node.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.node.slug} rel="next">
              {next.node.title} →
            </Link>
          )}
        </li>
      </ul>
    )}
  </footer>
)

export default Footer
