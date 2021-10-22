import { useState, useEffect, useCallback } from "react";
import { useQuery } from "react-query";


function useFetch(category, page) {
    const [loadingF, setLoadingF] = useState(true);
    const [errorF, setErrorF] = useState(false);
    const [data, setData] = useState([]);


    const fetchUsers = async () => {
        console.log('fetchUsers')
        const res = await fetch(
            `https://hn.algolia.com/api/v1/search?query=JavaScript&page=${page}&hitsPerPage=10`
        );
        return res.json();
      };
    

    const sendCategory = useCallback(async () => {
        try {
            await setLoadingF(true);
            await setErrorF(false);
            const data = await useQuery("users", fetchUsers);
            console.log('come',data)
            await setData((prev) => [
                ...new Set([...prev, ...data.hits])
            ]);
            setLoadingF(false);
        } catch (err) {
            setErrorF(err);
        }
    }, [category, page]);

    useEffect(() => {
        sendCategory(category);
    }, [category, sendCategory, page]);

    useEffect(() => {
        setData([])
    }, [category]);

    return { loadingF, errorF, data };
}

export default useFetch;
