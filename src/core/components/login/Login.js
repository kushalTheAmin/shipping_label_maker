import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { useCookies } from 'react-cookie';

const Login = (props) => {

    const [refferRedirect, toggleAuthenication] = useState(false);
    const [cookies, setCookie] = useCookies(['Auth']);

    useEffect(() => {
        const { history } = props;
        if (cookies.Auth.isAuthenticated) {
            history.push('/shipping')
        }
    })

    const onLogin = () => {
        setCookie('Auth', true)
        toggleAuthenication(cookies.Auth);
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