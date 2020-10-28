import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Saransh {year}</p>
    </footer>
  );
}

export default Footer;
