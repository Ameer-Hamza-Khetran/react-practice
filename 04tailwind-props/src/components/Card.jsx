import React from "react";

// one way - original syntax ---
// function Card(props) {
//     console.log(props.username);

// sometimes we directly destructure it
// Also we can pass default value here instead of below for better readability.
function Card({ username, btnText = "Visit Me" }) {
    // function Card({ username, btnText }) {
    console.log(username, btnText);
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mt-4">
            <img
                src="https://images.pexels.com/photos/3737300/pexels-photo-3737300.jpeg"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
                <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                    {username}
                </span>
                <h2 className="text-xl font-semibold tracking-wide">
                    {/** One way to pass the default vale. This approach affects readability.
                     * It does not have affect on performance.
                     * Other approach is to pass in the function definition */}
                    {/* {btnText || "Value not passed in component"} */}
                    {btnText}
                </h2>
            </div>
            <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio tempora ipsum soluta amet
            </p>
        </div>
    );
}

export default Card;
