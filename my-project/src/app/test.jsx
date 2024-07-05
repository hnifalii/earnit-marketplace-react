import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { React } from "react";

const clientId = "880228978499-gpo594pijdkiqbac9qk7l01ggolqgvql.apps.googleusercontent.com";

const Test = () => {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }
    
    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }
    
    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
        </div>
    );  
};

export default Test;