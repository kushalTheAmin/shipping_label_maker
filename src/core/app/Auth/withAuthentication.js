import React from 'react';
import { Redirect } from 'react-router-dom';
import { withCookies } from 'react-cookie'


export default function (ComposedComponent, tag, ...rest) {
      
     const Authenticate = (props) => {

        const renderComponent  = () => {
            if(tag === 'shipping') {

                const [createLabel, Header, labelData, steps] = rest;
                
                return <ComposedComponent {...props} 
                            onComplete={createLabel} 
                            header={Header}
                            wizardContext={labelData}
                            steps={steps} 
                        />
            }
            else{

                const [isLabelReady, labelData] = rest;
                
                return isLabelReady ? <ComposedComponent {...props} success={isLabelReady} displayData={labelData}/>
                        : <Redirect to='/login' />
            }
        };
    
        return (
            (props.cookies.get('Auth') || false) ? renderComponent()
                            : <Redirect to='/login' />
        )

     }

     return withCookies(Authenticate);
}