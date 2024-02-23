import React, { Fragment as _F } from "react";

import { Link } from "react-router-dom";

const NavToolBar = () => {
  return (
    <_F>
      {/* CountrySelect */}
      <select>
        {/* CountrySelect.Option */}
        <option value="en">Finland (EUR)</option>
        <option value="en">Estonia (EUR)</option>
        <option value="en">Latvia (EUR)</option>
        <option value="en">Lithuania (EUR)</option>
        <option value="es">Norway (NOK)</option>
        <option value="es">Sweden (SEK)</option>
        <option value="es">Denmark (DKK)</option>
      </select>
      <Link to="/login">👤 Login</Link>

      <div>🔎 Search</div>
      <div>🛒 Cart</div>
    </_F>
  );
};

export default NavToolBar;
