import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Home = () => {

    const googleLogin = () => {

    };


    const githubLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/github'
    };

    const centerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    };

    return (
        <div style={centerStyle}>
            <h2>Welcome to the OAuth Demo</h2>
            <button onClick={googleLogin}
            style={
                {margin: '10px', fontSize: '16px', padding: '10px'}
            }>
                <FcGoogle/> Login With Google
            </button>

            <button onClick={githubLogin}
            style={
                {margin: '10px', fontSize: '16px', padding: '10px'}
            }>
                <FaGithub/>Login With Github
            </button>
        </div>
    );
};

export default Home;