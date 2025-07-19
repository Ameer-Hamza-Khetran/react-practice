import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;
        const currencies = `${currency}`; // add more like 'PKR, INR, AUD'
        let url = `http://api.exchangerate.host/live?access_key=${API_KEY}&currencies=${currencies}&format=1`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res.quotes));
    }, [currency]);
    console.log(data);

    return data;
}

export default useCurrencyInfo;
