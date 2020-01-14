import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => (
  <header
    css={css`
      background-color: #333;
      padding: 15px;
    `}
  >
    <Link to="/">Adopt me!</Link>
  </header>
);

export default NavBar;
