import React from "react";
const NoMatch = ({ location = { pathname: "/" } }) => (
  <div className="u-p">
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
export default NoMatch;
