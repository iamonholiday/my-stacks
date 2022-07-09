import style from "./page-header.module.scss"
import Link from "next/link";

function BlockLogo ({}) {

    const blockClass = [style.blockLogoN1]

    return <div className={blockClass}>

        <span>Binary Signal</span>
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
            {href: "/profile/eurusd", text: "Login", icon: style.iconLogin},
            {href: "/profile/eurusd", text: "Premium", icon: "xxx"},
        ]
    } else {
        listOfMenuObjects = [
            {href: "/profile/eurusd", text: "Login", icon: style.iconLogin},
            {href: "/profile/eurusd", text: "Premium", icon: "xxx"},
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
