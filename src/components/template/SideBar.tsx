import Logo from "./Logo";
import MenuItens from "./MenuItens";
import { AdjustmentsIcon, BellIcon, HomeIcon, LogoutIcon,  } from "../icons";
import ButtonToggleTheme from "./ButtonToggleTheme";
import useAppData from "../../data/hook/useAppData";

export default function SideBar() {
    const {theme, toggleTheme} = useAppData()

    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-900 
            dark:bg-gray-900 dark:text-gray-200
        `}>
            <div className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 via-blue-200 to-purple-800 
            h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
               <MenuItens url={"/"} text={"Início"} icon={HomeIcon} />
               <MenuItens url={"/adjustments"} text={"Ajustes"} icon={AdjustmentsIcon} />
               <MenuItens url={"/notifications"} text={"Notificações"} icon={BellIcon} />
            </ul>
            <ul>
               <MenuItens text={"Sair"} icon={LogoutIcon} 
                    onClick={() => console.log('logout')}
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}