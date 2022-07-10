import { Chart, CategoryScale } from 'chart.js/auto'
import { Line }            from 'react-chartjs-2'
import {useEffect} from "react";

const options = {
    "title": {
        "display": false,
        "text": "eurusd",
        "position": "bottom",
        "fullWidth": true,
        "fontColor": "#aa7942",
        "fontSize": 16
    },
    "legend": {
        "display": true,
        "fullWidth": true,
        "position": "top"
    },
    "scales": {
        "yAxes": [
            {
                "ticks": {
                    "beginAtZero": true,
                    "display": true
                },
                "gridLines": {
                    "display": true,
                    "lineWidth": 2,
                    "drawOnChartArea": true,
                    "drawTicks": true,
                    "tickMarkLength": 1,
                    "offsetGridLines": true,
                    "zeroLineColor": "#942192",
                    "color": "#d6d6d6",
                    "zeroLineWidth": 2
                },
                "scaleLabel": {
                    "display": true,
                    "labelString": "USD in Millions"
                },
                "display": true
            }
        ],
        "xAxes": {
            "0": {
                "ticks": {
                    "display": true,
                    "fontSize": 14,
                    "fontStyle": "italic"
                },
                "display": true,
                "gridLines": {
                    "display": true,
                    "lineWidth": 2,
                    "drawOnChartArea": false,
                    "drawTicks": true,
                    "tickMarkLength": 12,
                    "zeroLineWidth": 2,
                    "offsetGridLines": true,
                    "color": "#942192",
                    "zeroLineColor": "#942192"
                },
                "scaleLabel": {
                    "fontSize": 16,
                    "display": true,
                    "fontStyle": "normal"
                }
            }
        }
    },
    "tooltips": {
        "enabled": true,
        "mode": "label",
        "caretSize": 10,
        "backgroundColor": "#00fa92"
    }
};


const data = {
    "labels": [
        "2000-01-03",
        "2000-01-04",
        "2000-01-05",
        "2000-01-06",
        "2000-01-07",
        "2000-01-08"
    ],
    "datasets": [
        {
            "label": "2014",
            "backgroundColor": "#aaadff",
            "fill": true,
            "data": [
                "230",
                "250",
                "260",
                "240",
                "280",
                "270"
            ],
            "borderColor": "#ffffff",
            "borderWidth": "1"
        }
    ]
};

export default function Charts({pair, showTitle}) {

    useEffect(() => {


    }, [])

    const displayName = 'EUR/USD binary signal'
    return (
        <div>
            <h2>{displayName}</h2>
            <Line
                data={data}
                width={400}
                height={200}
                options={options}
            />
        </div>
    );
}
