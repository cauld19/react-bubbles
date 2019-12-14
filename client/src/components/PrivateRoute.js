import React from "react";
import {Route, Redirect} from "react-router-dom";
import BubblePage from "./BubblePage";

const PrivateRoute =({component: Component, ...theRest}) => {
    return (
        <Route 
            {...theRest}
            render={() => {
                if (localStorage.getItem("token")) {
                    return <Component />
                } else {
                    return <Redirect to="/login" />
                }
            }}
        />
    )
}

export default PrivateRoute;