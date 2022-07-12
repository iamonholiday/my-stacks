import style from "./page-header.module.scss"
import Link from "next/link";

function BlockLogo ({}) {

    const blockClass = [style.blockLogoN1]

    return <div className={blockClass}>

        <Link href={"/"}>Binary Signal</Link>
    </div>
}

function BlockMenu ({menuObject}) {

    const blockClass = []

    const {
        icon,
        text,
        href,
    } = menuObject
    return <div className={blockClass}>
        <Link href={href}>{text}</Link>
    </div>
}


export default function PageHeader({}) {

    const hasAuth = true
    let listOfMenuObjects
    if (hasAuth) {
        listOfMenuObjects = [
            {href: "/user-profile", text: "My Account", icon: style.iconLogin},
            {href: "/purchase", text: "Premium", icon: style.iconLogin},
            {href: "/auth/logout", text: "Logout", icon: "xxx"},
        ]
    } else {
        listOfMenuObjects = [
            {href: "/auth/sign-up", text: "Sign Up", icon: style.iconLogin},
            {href: "/auth/login", text: "Log In", icon: style.iconLogin},
            {href: "/purchase", text: "Premium", icon: style.iconLogin},
            {href: "/auth/logout", text: "Logout", icon: "xxx"},
        ]
    }

    return <div className={style.layout}>

        {/*Block Logo*/}
        <BlockLogo  />

        {/*Block Menus*/}
        <div className={style.blockLogoN2}>
            {listOfMenuObjects.map(ie => <BlockMenu menuObject={ie}  />)}
        </div>

    </div>
}
