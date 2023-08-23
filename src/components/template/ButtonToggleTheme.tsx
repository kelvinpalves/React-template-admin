import { MoonIcon, SunIcon } from "../icons"

interface ButtonToggleThemeProps {
    theme: string
    toggleTheme: () => void
}

export default function ButtonToggleTheme(props: ButtonToggleThemeProps) {
    return props.theme === 'dark' ? (
        <div onClick={props.toggleTheme} className={`
        hidden sm:flex items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-24 h-8 p-1 rounded-full
        `}>
            <div className={`
                flex justify-center items-center
                bg-white text-yellow-600 
                w-6 h-6 rounded-full
            `}>
                {SunIcon}
            </div>
            <div  className={`
                hidden lg:flex items-center ml-4 text-white 
            `}>
                <span>Light</span>
            </div>
        </div>
    ) : (
        <div onClick={props.toggleTheme} className={`
                flex items-center justify-end cursor-pointer
                bg-gradient-to-r from-gray-800 to-gray-500
                w-14 md:w-16 lg:w-24 h-8 p-1 rounded-full
    `}>
        <div className={`
                hidden lg:flex items-center text-gray-300 mr-4
            `}>
                <span>Dark</span>
            </div>
        <div className={`
                flex justify-center items-center
                bg-black text-white
                w-6 h-6 rounded-full
            `}>
                {MoonIcon}
        </div>
    </div>
    )
}