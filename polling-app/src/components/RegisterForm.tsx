import {use, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';    
import {Label} from '@/components/ui/label';
import {supabase} from '@/lib/supabaseClient';

export default function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const {data, error} = await supabase.auth.signUp({email, password})

        if (error)alert ("Uh!,Something went wrong");//simple UX cue
        else alert("Awesome! check your email"); //placeholdersuccess
            
           };

    return (
        <form onSubmit= {handleRegister} className="space-y-4">
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
