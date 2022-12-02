import React from 'react';
import { Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/doortodoorstorage">DoorToDoorStorage</Link>
    </li>
    <li>
      <Link to="/selfaccessstorage">SelfAccessStorage</Link>
    </li>
    <li>
      <Link to="/documentstorage">DocumentStorage</Link>
    </li>
    <li>
      <Link to="/marketingmarchandise">MarketingMarchandise</Link>
    </li>
    <li>
      <Link to="/retailandecommerce">RetailAndEcommerce</Link>
    </li>
    <li>
      <Link to="/coworkingandcowarehouse">CoWorkingAndCoWareHouse</Link>
    </li>
    <li>
      <Link to="/officewithstorage">OfficeWithStorage</Link>
    </li>
  </div>
  );
}
export default Navbar;