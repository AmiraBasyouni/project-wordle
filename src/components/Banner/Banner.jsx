import React from "react";

function Banner({ children, banner_type }) {
  return <div className={`${banner_type} banner`}>{children}</div>;
}

export default Banner;
