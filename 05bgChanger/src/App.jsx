import { useState } from "react";

function App() {
    const [color, setColor] = useState("olive");
    function handleColor() {
        setColor("green");
    }
    return (
        <div
            className="w-full h-screen duration-200"
            style={{ backgroundColor: color }}
        >
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-4 py-4 rounded-3xl">
                    <button
                        onClick={() => setColor("red")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "red" }}
                    >
                        Red
                    </button>
                    <button
                        onClick={handleColor}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "green" }}
                    >
                        Green
                    </button>
                    <button
                        onClick={() => setColor("blue")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "blue" }}
                    >
                        Blue
                    </button>
                    <button
                        onClick={() => setColor("lavender")}
                        className="outline-none px-4 py-1 rounded-full text-gray-700 shadow-lg"
                        style={{ backgroundColor: "lavender" }}
                    >
                        Lavender
                    </button>
                    <button
                        onClick={() => setColor("purple")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "purple" }}
                    >
                        Purple
                    </button>
                    <button
                        onClick={() => setColor("orange")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "orange" }}
                    >
                        Orange
                    </button>
                    <button
                        onClick={() => setColor("grey")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "grey" }}
                    >
                        Grey
                    </button>
                    <button
                        onClick={() => setColor("white")}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                        style={{ backgroundColor: "white" }}
                    >
                        White
                    </button>
                    <button
                        onClick={() => setColor("black")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "Black" }}
                    >
                        Black
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
