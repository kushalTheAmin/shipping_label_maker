import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { useCookies } from 'react-cookie';

const Login = (props) => {

    const [refferRedirect, toggleAuthenication] = useState(false);
    const [cookies, setCookie] = useCookies(['Auth']);
    const [userDetail, setUserDetail] = useState({
        userName: '',
        password: '',
        error: false
    });


    const { userName, password , error } = userDetail;

    useEffect(() => {
        const { history } = props;
        if (cookies.Auth) {
            history.push('/shipping')
        }
    })

    const onLogin = () => {
        if (userName === 'admin' && password === 'admin') {
            setCookie('Auth', true)
            toggleAuthenication(cookies.Auth);
        } else {
            setUserDetail({
                userName: '',
                password: '',
                error: true
            })
        }
    }

    return (
        refferRedirect ? <Redirect to='/shipping' />
        :(
            <div className="login-container"> 
                <input
                    className="form-control"
                    placeholder="User Name"
                    type="text"
                    onChange={(e) => {
                        setUserDetail({ ...userDetail, userName : e.target.value})
                    }}
                    value={userName}
                    autoFocus
                />
                <input
                    className="form-control"
                    placeholder="******"
                    type="password"
                    onChange={(e) => {
                        setUserDetail({ ...userDetail, password : e.target.value })
                    }}
                    value={password}
                    autoFocus
                />
                <button
                    type="button"
                    onClick={onLogin}
                >
                    Click to Log In
                </button>
                { error && 
                    <div className='error-container'>
                        Sorry! not Authorized ...
                    </div>             
                }
            </div>
        )
        
    );
}

export default Login;