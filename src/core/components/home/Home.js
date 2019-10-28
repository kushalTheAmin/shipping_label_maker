import React from 'react';

const Home = (props) => {

    const { history } = props;

    return (
        <div>
            <h2> Hi there !</h2>
        <button
         type="button"
         onClick={()=>{
             history.push('/login')
         }}>
            Please Login First ...
        </button>
        </div>
    )
}

export default Home;