import React, { useState, useEffect } from "react";
import TaskService from "./services/service.task"
import Global from "./styles/global";

import Home from "./pages/Home/Home";
import Spinner from "./pages/Home/Spinner"
export const DEAD_TIME = 1000

//var schoolNameContext = React.createContext(null);


function App() {
  const [schoolName, setSchoolName] = useState([{
    title: "accusamus beatae ad facilis cum similique qui sunt",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  }]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let payload = 10
    setLoading(true)
    TaskService.getMyTask().then((response) => {
      //console.log(response.headers['request-duration'], DEAD_TIME)

      if (response.headers['request-duration'] > DEAD_TIME) {
        console.warn('Please try after some times! request is taking too much time')
      } else {
        setLoading(false)
        setSchoolName(response.data)
      }
    }
    ).catch((err) => {
      setLoading(false)
      console.log('Error', err)
    });


  }, [])


  return (
    <>
      <Global />
      {loading === true && <Spinner />}
      <Home boxData={schoolName} />
    </>
  );
}

export default App;
