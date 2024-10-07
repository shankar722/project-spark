import React, { useEffect, useState } from 'react'
import {Card} from '@mui/material/';
import Chart from 'chart.js/auto';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const GcChart = () => {

    useEffect(() => {
        const el = document.getElementById('gc-bar-line-chart');
        const chart = new Chart(el, {
            type: 'bar',
            data: {
              labels: ["Jan '24", "Feb '24", "Mar '24", "Apr '24", "May '24", "Jun '24", "Jul '24", "Aug '24", "Sep '24", "Oct '24"],
              datasets: [
                {
                    label: 'Value',
                    data: [163, 174, 179, 184, 187, 183, 179, 185, 189, 194],
                    borderWidth: 1,
                    backgroundColor: '#009CDD',
                    borderRadius: 6,
                    order: 2
                },
                {
                    label: 'GC',
                    base: 10,
                    data: [7.8, 8.9, 9.5, 8.6, 8.8, 9.7, 9.8, 11.3, 12.1, 12.2],
                    borderWidth: 1,
                    backgroundColor: '#745CF4',
                    type: 'line',
                    borderRadius: 6,
                    order: 1
                },
              ]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
        });

        return () => {
            chart.destroy();
        }
    }, [])

    const [count, setCount] = useState(0)
    
    return (
        <Card className='custom-card p-3'>
            <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="cardTitle m-0 p-0">Full Books GC Movement</p>
                {/* <MoreHorizOutlinedIcon className='cursor-pointer' /> */}
            </div>
            <canvas id="gc-bar-line-chart"></canvas>
        </Card>
    )
}

export default GcChart
