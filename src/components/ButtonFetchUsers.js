import React from 'react';

const ButtonFetchUsers = (props) => {
    return (
        <button style={{
            padding: '10px 20px',
            border: '2px solid black',
            backgroundColor: 'white',
            margin: '20px',
            outline: 'none',
            fontSize: '30px'
        }} onClick={props.click}>Dodaj użytkownika</button>
    )
}

export default ButtonFetchUsers;