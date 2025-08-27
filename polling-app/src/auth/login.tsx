import LoginForm from "@/components/LoginForm";
export default function Login(){
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="w-80 p-6 border rounded shadow">{/* Minimal style*/}
                <h1 className="text-2xl mb-4">Welcome Back!</h1>
                <LoginForm />
            </div>
            
            
        </div>

    );

}