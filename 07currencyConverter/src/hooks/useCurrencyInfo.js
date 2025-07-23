import { useState } from "react";

function useCurrencyInfo() {
    const [rate, setRate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getRate = async (toCurrency) => {
        setIsLoading(true);
        setError(null);
        setRate(null);

        try {
            const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;
            const formattedCurrency = toCurrency.toUpperCase();
            const url = `https://api.exchangerate.host/live?access_key=${API_KEY}&currencies=${formattedCurrency}&format=1`;

            const response = await fetch(url);
            const result = await response.json();

            if (result.success && result.quotes) {
                const key = `USD${formattedCurrency}`;

                const fetchedRate = result.quotes[key];

                if (fetchedRate) {
                    setRate(fetchedRate);
                    return fetchedRate;
                } else {
                    throw new Error(
                        `Rate not found for currency: ${formattedCurrency}`
                    );
                }
            } else {
                throw new Error(
                    result.error?.info || "API returned unsuccessful response."
                );
            }
        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    return { rate, isLoading, error, getRate };
}

export default useCurrencyInfo;
