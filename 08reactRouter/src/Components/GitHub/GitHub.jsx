// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
function GitHub() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Ameer-Hamza-Khetran")
    //         .then((response) => {
    //             console.log(response);
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setData(data);
    //         });
    // }, []);
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            GitHub Public Repos: {data.public_repos}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    );
}

export default GitHub;
