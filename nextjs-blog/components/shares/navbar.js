import Link from "next/link";
import {useEffect, useState} from "react";

export default function Navbar({navType = "horizontal"}) {

    const [magicLink, setMagicLink] = useState("magic")

    useEffect(() => {

        setMagicLink(Math.random() * 100)
    }, [])

    if (navType === "vertical") {

        return <nav className="nav">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled">Disabled</a>
        </nav>;
    }


    return <nav className="nav">

        <Link className="nav-link active" aria-current="page" href={`/${magicLink}`}>{magicLink}</Link>
        <Link className="nav-link active" aria-current="page" href={`/${magicLink}/form`}>Deep Form</Link>

        {/*<Link className="nav-link" href="#">Link</Link>*/}
        {/*<Link className="nav-link" href="#">Link</Link>*/}
        {/*<Link className="nav-link disabled">Disabled</Link>*/}

    </nav>;
}
