import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

function App() {
    const [to, setTo] = useState("pkr");
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    const { isLoading, error, getRate } = useCurrencyInfo();

    const convert = async () => {
        const fetchedRate = await getRate(to);
        console.log(fetchedRate);
        if (fetchedRate && amount > 0) {
            const result = Number((amount * fetchedRate).toFixed(2));
            setConvertedAmount(result);
        }
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setConvertedAmount(0);
                            convert();
                        }}
                    >
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label={`From USD To ${to.toUpperCase()}`}
                                amount={amount}
                                onCurrencyChange={(currency) => setTo(currency)}
                                onAmountChange={(currency) =>
                                    setAmount(currency)
                                }
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                            disabled={isLoading}
                        >
                            {isLoading
                                ? "Converting..."
                                : `Convert from USD to ${to.toUpperCase()}`}
                        </button>
                        {error && (
                            <p className="text-red-700 text-sm mt-2">
                                Error: {error}
                            </p>
                        )}
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="Converted Amount"
                                amount={convertedAmount}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
