interface MainContentProps {
    children?: any
}

export default function MainContent(props: MainContentProps) {
    return (
        <div className={`
            flex flex-col mt-7
            dark:text-gray-200
        `}>
            {props.children}
        </div>
    )
}