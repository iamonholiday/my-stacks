import { useRouter } from 'next/router'

export default function Pair() {


    const router = useRouter()
    const { pair } = router.query


    return <div>

        <h3>1 level - {pair}</h3>

    </div>

}
