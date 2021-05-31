import React, { useState, useEffect } from "react";
import { arrayOf, shape, string } from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

import { UL, LI } from "./styles";

const Menu = ({ menuItems }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <UL>
      {menuItems.map((item) => (
        <LI
          key={item.title}
          onClick={() => {
            setActive(item.key);
          }}
        >
          <NavLink
            to={item.url}
            exact={item.exact}
            activeClassName={active === item.url ? "active" : ""}
          >
            {item.title}
          </NavLink>
        </LI>
      ))}
    </UL>
  );
};

Menu.propTypes = {
  menuItems: arrayOf(
    shape({
      key: string,
      title: string,
      url: string,
    })
  ),
};

Menu.defaultProps = {
  menuItems: [],
};

export default Menu;
