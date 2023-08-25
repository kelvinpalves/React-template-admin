/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { GoogleIcon } from '../components/icons';

export default function Authentication() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [mode, setMode] = useState<'login' | 'register'>('login')

    function layUnder() {
        if(mode === 'login') {
            console.log('Login')
        } else {
            console.log('Cadastrar')
        }
    }

    return ( 
        <div className={`flex h-screen items-center justify-center`}>
            <div className={`w-1/2 hidden md:block lg:w-2/3`}>
                <img
                    src="https://cdn.pixabay.com/photo/2023/04/29/19/41/background-7959171_1280.jpg"
                    alt="Imagem tela de Autenticação"
                    className={`h-screen w-full object-cover`} />
            </div>
            <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
                <h1 className={`text-2xl font-bold mb-5 text-center`}>
                    {mode === 'login' ? 'Entre com sua conta' : 'Cadastre-se na Plataforma'}
                </h1>
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

                <button onClick={layUnder} className={`
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