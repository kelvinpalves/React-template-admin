import Link from "next/link"

interface MenuItensProps {
    url?: string
    text: string
    icon: any
    onClick?: (event: any) => void
    className?: string

}

export default function MenuItens(props: MenuItensProps) {    
    function renderContent() {
        return (
            <>
                <div  className={`
                    flex flex-col justify-center items-center
                    h-20 w-20
                    dark:text-gray-200
                    ${props.className}
                `}>
                    {props.icon}
                    <span className={`text-xs font-light`}>
                        {props.text}
                    </span>
                </div>
            </>
        )
    }
    
    return (
        <li onClick={props.onClick} className={`
        hover:bg-gray-100 dark:hover:bg-gray-800
        cursor-pointer
        `}>
            {props.url ? (
                <Link href={props.url}>
                    {renderContent()}
                </Link>
            ) : (
                renderContent()
            )}
        </li>
    )
}