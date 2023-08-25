import useAppData from "../../data/hook/useAppData"
import AvatarUser from "./AvatarUser"
import ButtonToggleTheme from "./ButtonToggleTheme"
import Title from "./Title"

interface HeaderProps {
    title: string
    subtitle: string
}

export default function Header(props: HeaderProps) {
    const {theme, toggleTheme} = useAppData()

    return (
        <div className={`flex`}>
            <Title title={props.title} subtitle={props.subtitle}/>
            <div className={`flex flex-grow justify-end items-center`}>
                <ButtonToggleTheme theme={theme} toggleTheme={toggleTheme}/>
                <AvatarUser className="ml-4"/>
            </div>
        </div>
    )
}