import { useState, useEffect, useCallback } from "react";
function useFetch(category, page) {
    const [loadingF, setLoadingF] = useState(true);
    const [errorF, setErrorF] = useState(false);
    const [data, setData] = useState([]);

    const sendCategory = useCallback(async () => {
        try {
            await setLoadingF(true);
            await setErrorF(false);
            const response = await fetch(
                `https://hn.algolia.com/api/v1/search?query=JavaScript&page=${page}&hitsPerPage=10`
            );
            const data = await response.json();
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
