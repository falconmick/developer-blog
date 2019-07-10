import React, {Fragment} from "react"
import Header from "./header"

export default ({ children, ...props }) => (
  <Fragment>
    <Header {...props} />
    <div>
      <div>
        {children}
      </div>
    </div>
  </Fragment>
)
