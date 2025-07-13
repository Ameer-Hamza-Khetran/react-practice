import "./App.css";
import Card from "./components/Card";
function App() {
    let obj = {
        username: "hamza",
    };

    let newArr = [1, 2, 3];
    return (
        <>
            <h1 className="bg-green-400 p-4 text-black rounded-xl mb-4">
                Tailwind Test
            </h1>
            <Card
                username="chai aur code"
                btnText="Click me"
                myobj={obj}
                arr={newArr}
            />
            <Card username="my owl" />
        </>
    );
}

export default App;
