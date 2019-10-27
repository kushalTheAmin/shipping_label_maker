import React from 'react';
import { Redirect } from 'react-router-dom';
import { withCookies } from 'react-cookie'


export default function (ComposedComponent, tag, ...rest) {
      
     const Authenticate = (props) => {

        const renderComponent  = () => {
            if(tag === 'shipping') {
                const  createLabel = rest[0];
                return <ComposedComponent {...props} onComplete={createLabel} />
            }
            else{
                const isLabelReady = rest[0];
                return <ComposedComponent {...props} success={isLabelReady} />
            }
        };
    
        return (
            (props.cookies.get('Auth') || false) ? renderComponent()
                            : <Redirect to='/login' />
        )

     }

     return withCookies(Authenticate);
}