import React from 'react';
import { Redirect } from 'react-router-dom';

export default function (ComposedComponent) {
      
     const Authenticate = (props) => {
        
        const { isAuthenticated } = window.fakeAuth;

        return (
            (isAuthenticated) ? <ComposedComponent {...props} />
                            : <Redirect to='/login' />
        )

     }

     return Authenticate;
}