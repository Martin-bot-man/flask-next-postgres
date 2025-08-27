import {use, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';    
import {Label} from '@/components/ui/label';
import {supabase} from '@/lib/supabaseClient';

export default function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const {data, error} = await supabase.auth.signInWithPassword({email, password})

        if (error)alert ("OOPs, wrong email or password");//simple UX cue
        else alert("Logged in successfully"); //placeholdersuccess
            
           }

    return (
        <form onSubmit= {handleLogin} className="space-y-4">
            <div>
                <label htmlFor="email">email</label>
                <input id="email" value= {email} onChange={(e)=>setEmail(e.target.value)} required type="email" />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />

            </div>
            <Button type="submit">Log In</Button>
        </form>

    )       
}
