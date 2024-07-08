
import AuthForm from "./components/AuthForm";
import Image from "next/image";
export default function Home() {
    return (
    <div className="
    flex 
    min-h-full
    flex-col
    justify-center
    py-12
    sm:px-6
    lg:px-8
    bg-[url('../public/images/login-back.jpg')] h-screen bg-cover bg-center
    ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
            alt="Logo"
            height="58"
            width="58"
            className="mx-auto w-auto"
            src="/images/logo.png"
            />
            <h2 className="mx-5 mt-6 text-center text-3xl font-bold tracking-tight text-gray-100">
                Sign in to your account
            </h2>
        </div>
        <AuthForm/>
    </div>
    );
  }
  