import React from "react";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.css";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  // use to style the position of darkMode btn, move to left.
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="toggle">
      <img src={sun} className="toggle-icon" alt="sun" />
      <img src={moon} className="toggle-icon" alt="moon" />
      <div
        className="toggle-btn"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
