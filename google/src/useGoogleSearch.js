import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = '3b724b3fb81a9de67';

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.google.com/customsearch/v1?key=${API_KEY}&CX=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData();
    }, [term])
    return {data}
}

export default useGoogleSearch