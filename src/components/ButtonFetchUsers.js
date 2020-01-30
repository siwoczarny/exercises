import React from 'react';

const ButtonFetchUsers = (props) => {
    return ( <button style={{
        padding: '16px',
        margin: '16px',
    }} onClick={props.click} >Dodaj użytkownika</button> );
}
 
export default ButtonFetchUsers;