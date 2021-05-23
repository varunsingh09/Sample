import React, { useState, useEffect, Fragment } from "react";
import TaskService from "./services/service.task"

import Global from "./styles/global";

import Home from "./pages/Home/Home";
export const DEAD_TIME = 1000

var schoolNameContext = React.createContext(null);


function App() {
  var [schoolName, setSchoolName] = useState([{
    title: "accusamus beatae ad facilis cum similique qui sunt",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  }]);

  useEffect(() => {
    let payload=10
    TaskService.getMyTask().then((response) => {
      console.log(response.headers['request-duration'], DEAD_TIME)
     
      if (response.headers['request-duration'] > DEAD_TIME) {
        console.warn('Please try after some times! request is taking too much time')
      } else {
        setSchoolName(response.data)
      }
    }
    ).catch((err) => console.log('Error', err));

    
  }, [])

  console.log('schoolName', schoolName)
  return (
    <>
      <Global />
      <Home boxData={schoolName} />
    </>
  );
}

export default App;
