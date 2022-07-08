import {useOperation} from "react-openapi-client";

export default function RecentSignal({pair}) {

    const { loading, data, error } = useOperation('getPetById', 1);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            <img src={data.image} alt={data.name} />
            <h3>{data.name}</h3>
            <ul>
                <li>
                    <strong>id:</strong> {data.id}
                </li>
                <li>
                    <strong>status:</strong> {data.status}
                </li>
            </ul>
        </div>
    );
}
