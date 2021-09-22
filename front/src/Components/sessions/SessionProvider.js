import React, { useState, useEffect } from 'react';
import SessionContext from './SessionContext';
import { getCookie, removeCookie,setCookie } from '../../cookie';
import API from '../../API';

export default function SessionProvider({ children }) {

    const [session, updateSession] = useState({
        user: {
            _id: getCookie('_id'),
            token: getCookie('token'),
            role: getCookie('role'),
        }
    });

    function setSession(nextState) {
        updateSession(prevState => ({
            ...prevState,
            ...nextState
        }));
    }

    async function signOut() {
        let _id = getCookie('_id');
        await API.post(`signOut`, { _id });
        setSession({ user: {} });
        removeCookie('_id');
        removeCookie('token');
        removeCookie('role');
    }

    async function signIn(user) {
        await API.post(`signIn`, user ).then(res=>{
            const success=res.data.success;
            if(success){
                const result=res.data.result;
                setCookie('_id',result._id ,30);
                setCookie('token',result.token ,30);
                setCookie('role',result.role ,30);

                setSession({ user: {
                    _id:result._id,
                    token:result.token,
                    role:result.role
                } });
            }
        })
    }

    useEffect(() => {
        async function initializeUser() {
            let _id = getCookie('_id');
            let token = getCookie('token');

            let reqBody = {
                _id: _id,
                token: token
            }

            if (token && _id) {
                await API.post(`initialiseData`, reqBody)
                    .then(res => {
                        const success = res.data.success;
                        if (success) {
                            const data = res.data.result;
                            updateSession({
                                user: {
                                    _id: data._id,
                                    role: data.role,
                                    token: data.token
                                }
                            });
                        }
                    });
            }
        }
        initializeUser()
    }, [])

    let context = { session, actions: { signOut ,signIn} }

    return ( 
    <SessionContext.Provider value = { context } > 
    { children }
     </SessionContext.Provider>
    )
}