import Logo from "./Logo";
import MenuItens from "./MenuItens";
import { AdjustmentsIcon, BellIcon, HomeIcon } from "./icons";

export default function SideBar() {
    return (
        <aside>
            <div className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 via-blue-200 to-purple-800 
            h-20 w-20
            `}>
                <Logo />
            </div>
            <ul>
               <MenuItens url={"/"} text={"Início"} icon={HomeIcon} />
               <MenuItens url={"/adjustments"} text={"Ajustes"} icon={AdjustmentsIcon} />
               <MenuItens url={"/notifications"} text={"Notificações"} icon={BellIcon} />
            </ul>
        </aside>
    )
}