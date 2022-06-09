import { useState, useEffect, useCallback } from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import StyledHeader from "../STYLEDCOMPONENTS/StyledHeader";

const Header = () => {
  const [lightMode, setlightMode] = useState(false);

  const toggleTheme = useCallback(() => {
    setlightMode((prev) => !prev);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (lightMode) {
      html.classList.add("lightmode");
    } else {
      html.classList.remove("lightmode");
    }
  }, [lightMode]);

  return (
    <StyledHeader className={lightMode && 'lightBg'}>
      <div className="head">
        <h1>TODO</h1>

        <button className="theme" onClick={toggleTheme}>
          {lightMode ? <img src={moon} alt="" /> : <img src={sun} alt="" />}
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;
