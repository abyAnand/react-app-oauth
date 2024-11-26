import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/user-info', {withCredentials : true})
        .then( response => {
            setUser(response.data)
        })
        .catch( error => {
            console.error('Error occured: ', error)
        })
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            {user ? (
            <div>
                <p><strong>Name: </strong> {user.name}</p>
                <p><strong>Username: </strong> {user.login}</p>
                {user.picture && <img src={user.avatar_url}
                alt="User Profile"
            referrerPolicy="no-referrer"></img>}
            </div>
            ): (
                <p> Loading User Data...</p>
            )}
        </div>
    );

};

export default Dashboard;