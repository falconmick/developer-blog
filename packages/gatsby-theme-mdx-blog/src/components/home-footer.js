import React, { Fragment } from "react"

const Footer = ({ socialLinks }) => (
  <footer>
    {socialLinks.map((platform, i, arr) => (
      <Fragment key={platform.url}>
        <a href={platform.url} target="_blank" rel="noopener noreferrer">
          {platform.name}
        </a>
        {arr.length - 1 !== i && (
          <Fragment>
            {` `}&bull;{` `}
          </Fragment>
        )}
      </Fragment>
    ))}
  </footer>
)
export default Footer
