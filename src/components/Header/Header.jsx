import React , { useState }  from "react";
import "./Header.scss";

function Header() {

  const [menuSection, setMenuSection] = useState(0);

  function toggleMenu() {
    let menu = document.querySelector('.menu-section');
    let linesNodeList = document.querySelectorAll('rect')  // svg lines
    let lines = [...linesNodeList]

    if(menuSection===0){
      menu.style.transform = "translateX(0)";
      // console.log(lines);
      // lines[0].style.width= "500";
      // lines[2].style.width= "500";
      // lines[0].style.transform= " translateY(25px) rotate(45deg) ";
      // lines[2].style.transform= "  translateY(-25px)  rotate(-45deg) ";

      setMenuSection(1)
    }else if(menuSection===1){
      menu.style.transform = "translateX(-800px)";
      setMenuSection(0)
    }
  }
 
  return (
    <nav className="navbar container">
      <div className="logo-section">
        {/* <img src="//source.unsplash.com/80x40" alt="logo" /> */}
        <h2>Kunal Singh</h2>
      </div>
      <div className="menu-section">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="10"></rect>
          <rect y="30" width="70" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </div>
    </nav>
  );
}

export default Header;
