import React from 'react';
import '../css/shared.css';
import { Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

export default function Header(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleDropdown = () => {
      setCollapsed(expanded);
      setExpanded(!expanded);
  };

  React.useEffect(() => {
      const responsiveHandler = () => {
          if (window.innerWidth > 600) {
              setExpanded(false);
              setCollapsed(false);
          }
      };

      window.addEventListener("resize", responsiveHandler);

      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener("resize", responsiveHandler);
  }, []);
  return (
    <header>
            <div className={`main-header ${expanded ? "expanded" : ""} ${collapsed ? "collapsed" : ""} `}>
                <a href="/" className="main-header__title">
                    <Typography varient="h3">Ramsey van der Meer</Typography>
                </a>
                <nav className="main-header__nav">
                    {/* This is kind of jank but it works to help the flex-container center the nav links */}
                    <div className="main-header__nav__flex-helper" />

                    <ul className="main-header__nav__links">
                        <li className="main-header__nav__link">
                            <Button className="main-header__button" href="/" >Home</Button>
                        </li>
                        <li className="main-header__nav__link">
                            <Button className="main-header__button" href="/about" >About Me</Button>
                        </li>
                        <li className="main-header__nav__link">
                            <Button className="main-header__button" href="/projects" >Projects</Button>
                        </li>
                        <li className="main-header__nav__link">
                            <Button className="main-header__button" href="/photography" >Photography</Button>
                        </li>
                        <li className="main-header__nav__link">
                            <Button className="main-header__button" href="/contact" >Contact</Button>
                        </li>
                    </ul>
                </nav>
                <MenuIcon onClick={toggleDropdown} className="main-header__nav__menu-icon">menu</MenuIcon>
            </div>
        </header>
  )
}
