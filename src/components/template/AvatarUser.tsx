/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import useAuthData from "../../data/hook/useAuthData"

interface AvatarUserProps {
    className: string
    onClick?: () => void
}

export default function AvatarUser(props: AvatarUserProps) {
    const { user } = useAuthData()
    return (
        <Link href='/profile'>
            <img 
            src={user?.imageURl ?? '/images/avatar.jpeg'} 
            alt="Avatar Usuario" 
            className={`h-10 w-10 rounded-full cursor-pointer
                ${props.className}
            `}
            />
        </Link>
    )
}