
import DashBoard from "../pages/DashBoard";
import React from "react";
import {Route,Routes} from "react-router-dom";
import Customer from "../pages/Customer";
import Item from "../pages/Item";

function App() {
  return (
     // <DashBoard/>
     // <Customer/>
      //<Item/>
      <Routes>
        <Route exact path='/' element={<DashBoard/>}/>
        <Route  path='/cus' element={<Customer/>}/>
        <Route  path='/item' element={<Item/>}/>
      </Routes>
  );
}

export default App;
