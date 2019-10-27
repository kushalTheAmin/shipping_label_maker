import React from 'react';
import { Redirect } from 'react-router-dom';
import { withCookies } from 'react-cookie'


export default function (ComposedComponent, tag, ...rest) {
      
     const Authenticate = (props) => {

        const renderComponent  = () => {
            if(tag === 'shipping') {
                const createLabel = rest[0];
                const Header = rest[1];
                const labelData = rest[2];
                const steps = rest[3]
                
                return <ComposedComponent {...props} 
                            onComplete={createLabel} 
                            header={Header}
                            wizardContext={labelData}
                            steps={steps} 
                        />
            }
            else{
                const isLabelReady = rest[0];
                const labelData = rest[1];

                return <ComposedComponent {...props} success={isLabelReady} displayData={labelData}/>
            }
        };
    
        return (
            (props.cookies.get('Auth') || false) ? renderComponent()
                            : <Redirect to='/login' />
        )

     }

     return withCookies(Authenticate);
}