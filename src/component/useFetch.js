import { useState, useEffect, useCallback } from "react";
import _ from "lodash"
function useFetch(category, page) {
    const [loadingF, setLoadingF] = useState(true);
    const [errorF, setErrorF] = useState(false);
    const [data, setData] = useState([]);
    const sendCategory = useCallback(_.debounce(async () => {
        try {
            await setLoadingF(true);
            await setErrorF(false);
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/comments?_start=${page}&_limit=20`
            );
            const data = await response.json();
            await setData((prev) => [
                ...new Set([...prev, ...data])
            ]);
            setLoadingF(false);
        } catch (err) {
            setErrorF(err);
        }
    }, 1200), [category, page]);

    useEffect(() => {
        sendCategory(category);
    }, [category, sendCategory, page]);

    useEffect(() => {
        setData([])
    }, [category]);

    return { loadingF, errorF, data };
}

export default useFetch;
