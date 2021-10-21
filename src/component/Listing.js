import react, { useEffect, useState } from "react";
import UserService from "./../services/service.user"
import Spinner from 'react-bootstrap/Spinner'

const Listing = () => {

    const [listingData, setListingData] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        async function fetchData() {
            // You can await here
            const response = await UserService.getDataFromApi()
            if (response.status === 200) {
                setLoading(false)
                setListingData(response.data.drinks)
            }
        }
        fetchData();
    }, []);


    return <ul>
        {loading ===true &&<Spinner animation="border" />}
        {listingData && listingData.map((list, index) => {
            return <li key={index}>{list.strDrink}</li>
        })}
    </ul>;
}


export default Listing
