import Header from "./Header"
import MainContent from "./MainContent"
import SideBar from "./SideBar"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex h-screen w-screen`}>
            <SideBar />
            <div className={`
                flex flex-col w-full p-7
                bg-gray-300 dark:bg-gray-800
            `}>
                <Header title={props.title} subtitle={props.subtitle} />
                <MainContent>
                    {props.children}
                </MainContent>
            </div>
        </div>
    )
}