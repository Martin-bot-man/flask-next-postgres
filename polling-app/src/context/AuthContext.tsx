import{createContext, useEffect, useState} from 'react';
import {supabase} from '@/lib/supabaseClient'

export const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [user, setUser] = useState(null);

    useEffect(() =>{
        supabase.auth.getSession().then(({data: {session}})=> setUser(session?.user ?? null));
        const {data: listener} = supabase.auth.onAuthStateChange((_event, session)=> setUser((session)?.user?? null))

        return()=> listener.subscription.unsubscribe();
    },[]);
    return<AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>

}