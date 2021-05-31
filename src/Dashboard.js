import React, { useState, useEffect } from "react";
import TaskService from "./services/service.task"
import Global from "./styles/global";
import { Box, BoxTitle, BoxText } from "./utils/Container";
import Spinner from "./utils/Spinner";
export const DEAD_TIME = 1000


function Dashboard() {
    const [schoolName, setSchoolName] = useState([{
        title: "accusamus beatae ad facilis cum similique qui sunt",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
    }]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        TaskService.getMyTask().then((response) => {
            //console.log(response.headers['request-duration'], DEAD_TIME)

            if (response.headers['request-duration'] > DEAD_TIME) {
                setLoading(false)
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



const Home = ({ boxData }) => {
    return (
        <>
            {boxData.map((box, index) => (
                <Box key={index} bgColor={`#D5CAFA`}>
                    <BoxTitle>{box.title}</BoxTitle>
                    <BoxText><img src={box.thumbnailUrl} alt={box.title} /></BoxText>
                </Box>
            ))}
        </>
    );
}


export default Dashboard;
