import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
export default function Profile() {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={""} />
                <h1>First Name :{user.name}</h1>
                <h1>Nick Name :{user.nickname}</h1>
                <h1>Email :{user.email}</h1>
                <JSONPretty data={user} />
                {/* {JSON.stringify(user, null, 2)} */}
            </div>
        )
    )
}
