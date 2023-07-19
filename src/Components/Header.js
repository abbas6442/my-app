import React from "react";

import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";
function Header() {
  return (
    <>
      <nav>
        <h1>Islamic</h1>
        <main>
          <HashLink to={"/#Home"}>Home</HashLink>
          <HashLink to={"/#Islam"}>Islam</HashLink>
          <HashLink to={"/#Quran"}>Quran</HashLink>
          <HashLink to={"/#Hadees"}>Hadees</HashLink>
          <HashLink to={"/#About"}>About </HashLink>
          <HashLink to={"/#Contact"}>Contact</HashLink>
        </main>
      </nav>
    </>
  );
}

export default Header;
