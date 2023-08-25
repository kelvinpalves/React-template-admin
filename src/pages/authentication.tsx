/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { GoogleIcon, WarningIcon } from '../components/icons';
import useAuthData from "../data/hook/useAuthData";

export default function Authentication() {
    const { user, loginGoogle } = useAuthData()
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [mode, setMode] = useState<'login' | 'register'>('login')

    function displayError(msg, time = 5) {
        setError(msg)
        setTimeout(() => setError(null), time * 1000)
    }

    function layUnder() {
        if(mode === 'login') {
            displayError('Ocorreu um erro no login!', 3)
        } else {
            displayError('Ocorreu um erro no cadastro!')
        }
    }
    
    return ( 
        <div className={`flex h-screen items-center justify-center`}>
            <div className={`w-1/2 hidden md:block lg:w-2/3`}>
                <img
                    src="https://i0.wp.com/techwek.com/wp-content/uploads/2021/01/linda-paisagem-para-notebook.jpg?resize=1024%2C576&ssl=1"
                    alt="Imagem tela de Autenticação"
                    className={`h-screen w-full object-cover`} />
            </div>
            <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
                <h1 className={`text-2xl font-bold mb-5 text-center`}>
                    {mode === 'login' ? 'Entre com sua conta' : 'Cadastre-se na Plataforma'}
                </h1>

                {error ? (
                    <div className={`
                        flex
                        bg-red-400
                        text-white
                        py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        {WarningIcon}
                        <span className={`ml-3`}>{error}</span>
                    </div>
                ) : false}

                <AuthInput 
                    label={"Email"} 
                    value={email} 
                    changeValue={setEmail} 
                    type='email' 
                    mandatory 
                />
                <AuthInput 
                    label={"Senha"} 
                    value={password} 
                    changeValue={setPassword}
                    type='password' 
                    mandatory 
                />
                <AuthInput 
                    label={"Comfirmar Senha"} 
                    value={confirmPassword} 
                    changeValue={setConfirmPassword}
                    type='password' 
                    mandatory 
                    dontRenderWhen
                />

                <button onClick={layUnder} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}    
                </button>

                <hr className={`my-6 border-gray-300 w-full`} />

                <button onClick={loginGoogle} className={`
                    flex w-full bg-red-500 hover:bg-red-400
                    justify-center items-center text-white rounded-lg px-4 py-3
                `}>
                    Entrar com Google {GoogleIcon} 
                </button>

                {mode === 'login' ? (
                    <p className={`mt-1`}>
                        Novo por Aqui?
                        <a onClick={() => setMode('register')} className={`
                            text-blue-500 hover:text-blue-700 font-bold
                            cursor-pointer
                        `}> Criar Conta</a>
                    </p>
                ) : (
                    <p className={`mt-1`}>
                        Já faz parte da nossa Comunidade?
                        <a onClick={() => setMode('login')} className={`
                            text-blue-500 hover:text-blue-700 font-bold
                            cursor-pointer`}> Entrar</a>
                    </p>
                )}
            </div>
        </div>
    )
}