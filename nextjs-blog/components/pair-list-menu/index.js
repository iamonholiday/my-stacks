import style from "./PairListMenu.module.scss"
import Link from "next/link";

function BlockMenu({pair, link, isActive}) {


    const blockClass = [style.block]
    if (isActive) {

        blockClass.push(style.active)
    }

    let icon
    if (isActive) {
        icon = "icon-alert"
    } else {
        icon = "icon-alert-flash"
    }

    return <div className={blockClass.join(" ")}>
        <i className={icon}>&nbsp;</i><Link href={link}>{pair}</Link>
    </div>
}

export default function PairListMenu({activePair}) {

    let { pairLoading, pairData, pairError} = {
        pairLoading: false,
        pairData: {
            listOfPairs: ["eurusd", "usdjpy", "gbpusd", "usdchf", "eurjpy", "usdcad", "audusd"]
        },
        pairError: false
    }

    return <div className={style.layout}>

        {
            pairData?.listOfPairs?.map(ie => {

                // eg. /profile/${pair}
                const linkToProfile = `/forex-profile/${ie}`

                return <BlockMenu pair={ie}
                                  isActive={activePair === ie}
                                  link={linkToProfile}
                />
            })
        }

    </div>

}
