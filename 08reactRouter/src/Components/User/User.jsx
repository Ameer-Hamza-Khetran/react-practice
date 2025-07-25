import React from "react";
import { useParams } from "react-router";
function User() {
    const { userid } = useParams();

    return (
        <div className="text-3xl text-gray-700 font-bold">User: {userid}</div>
    );
}

export default User;
