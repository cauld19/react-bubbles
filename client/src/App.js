import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage"


import Login from "./components/Login";
import "./styles.scss";

function App() {

  // const [colors, setColors] = useState([])


  // const updateColorList = color => {
  //   setColors([...colors, color])
  // }


  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        
        
        <PrivateRoute exact path ="/BubblePage" component={BubblePage}/>
        {/* <PrivateRoute 
          exact path ="/BubblePage" 
          render={props => {
            return <BubblePage {...props}  updateColorList={updateColorList} />;
          }}
        /> */}
      </div>
    </Router>
  );
}

export default App;
