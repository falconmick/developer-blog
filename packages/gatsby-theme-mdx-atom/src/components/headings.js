import React from "react"
import { Link } from 'gatsby';

const heading = Tag => props => (
  <Tag {...props}>
    <Link to={`#${props.id}`}>
        {props.children}
    </Link>
  </Tag>
)

export default {
  h1: heading(`h1`),
  h2: heading(`h2`),
  h3: heading(`h3`),
  h4: heading(`h4`),
  h5: heading(`h5`),
  h6: heading(`h6`),
}
