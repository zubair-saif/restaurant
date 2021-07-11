import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
          <h3>
              It's Great time for good taste of Burger
          </h3>
          <h1><span>BURGER</span>FOR<br/>WEEK</h1>
          <p className="detail">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"</p>
          <div className="header-btns">
              <a href="#" className="header-btn">Order</a>
          </div>
      </div>
    </div>
  );
}

export default Header;
