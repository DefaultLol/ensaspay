import React from 'react'
import {Route,Redirect} from 'react-router-dom';

const SecuredRoutes=({component : Component,path,...otherProps}) =>(
    <Route
        {...otherProps}
        render={(props) =>
            true === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

export default SecuredRoutes;
