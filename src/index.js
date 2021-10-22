
import { render } from "react-dom";

import Skeleton from "./Skeleton";
import "./App.css";

const App = () => (
  <div className="app">  
    <Skeleton />    
  </div>
);

render(<App />, document.getElementById("root"));
