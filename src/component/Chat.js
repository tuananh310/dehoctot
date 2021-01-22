import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Chat() {
    return (
        <div>{cookies.get("username")}</div>
    );
}

export default Chat;