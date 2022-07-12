import {useOperation} from "react-openapi-client";
import Link from "next/link";
import styles from './RecentSignal.module.scss';


function BlockSlot({text, linkUrl}){


    return <div className={`${styles.block} ${linkUrl ? styles.active : false}`}>
        { linkUrl ? <Link href={linkUrl}>{text}</Link> : <span>{text}</span>}
    </div>
}

export default function RecentSignal({pair}) {

    const { loading, data, error } = useOperation('getPetById', 1);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    let { recentSignalLoading, recentSignalData, recentSignalError} = {
        recentSignalLoading : false,
        recentSignalData : {
            pair: "eurusd",
            dateTimeFmt: "2022-07-07 10:45",
            listOfSlotTimeFmts: ["9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",],
            listOfSignals: ["9:30 AM", "10:00 AM", "10:30 AM"],
        },
        recentSignalError: false
    }


    return (

        <div className={styles.layout}>
            {

                recentSignalData?.listOfSlotTimeFmts?.map(ie => {

                    // eg. /[instrument]-performance/${pair}/${dateTimeFmt}
                    const iLinkToSignalPrevPerformance = `/forex-profile/performance/${encodeURIComponent(pair)}?t=${encodeURIComponent(ie)}`
                    const iHasLink = recentSignalData.listOfSignals.indexOf(ie) > -1

                    return <BlockSlot
                        text={ie}
                        linkUrl={iHasLink ? iLinkToSignalPrevPerformance : null}
                    />

                })
            }
        </div>
    );
}
