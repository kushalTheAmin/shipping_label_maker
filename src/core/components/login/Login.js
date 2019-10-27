import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'

const Login = (props) => {

    const [refferRedirect, toggleAuthenication] = useState(false);

    useEffect(() => {
        const { history } = props;
        if (window.fakeAuth.isAuthenticated) {
            history.push('/shipping')
        }
    })

    const onLogin = () => {
        window.fakeAuth.isAuthenticated = true;
        toggleAuthenication(true);
    }

    return (
        refferRedirect ? <Redirect to='/shipping' />
        :(
            <div> In Log In
                <button
                    type="button"
                    onClick={onLogin}
                >
                    Click to Log In
                </button>
            </div>
        )
        
    );
}

export default Login;