import {useRouter} from "next/router";

export default function Form() {


    const router = useRouter()
    const { form } = router.query

    return <form>

        Hello Form {form}

    </form>

}
