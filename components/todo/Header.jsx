import { useState } from "react";
import Button from "./Button";

const Header = ({ title, btnTitle, toggle }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button title={btnTitle} color="blue" btnToggle={toggle} />
    </header>
  );
};

Header.defaultProps = {
  title: "todo",
};

export default Header;
