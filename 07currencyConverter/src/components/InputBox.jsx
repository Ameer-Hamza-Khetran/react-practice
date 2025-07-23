import React, { useId } from "react";

function InputBox({ label, amount, onAmountChange, className = "" }) {
    const amountInputId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label
                    htmlFor={amountInputId}
                    className="text-black/40 mb-2 inline-block"
                >
                    {label}
                </label>
                <input
                    id={amountInputId}
                    type="number"
                    className="outline-none w-full bg-transparent py-1.5"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />
            </div>
        </div>
    );
}

export default InputBox;
