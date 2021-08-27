import React from "react";
import "./Redirect.scss";

const Redirect = () => {
  return (
    <div className="redirect">
      <h1 className="redirect__header">VIDEO UPLOADED!</h1>
      <h3 className="redirect__sub-header">
        ...Redirecting you to the homepage in 2 seconds...
      </h3>
    </div>
  );
};

export default Redirect;
