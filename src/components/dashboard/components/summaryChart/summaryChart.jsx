import React, { useEffect, useState } from 'react'
import {Card} from '@mui/material/';
import Chart from 'chart.js/auto';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const SummaryChart = () => {

    useEffect(() => {
        const el = document.getElementById('vertical-bar-chart');
        const chart = new Chart(el, {
            type: 'bar',
            data: {
              labels: ['', '', '', '', '', '', '', '', ''],
              datasets: [
                {
                    label: '$4368 SOP',
                    data: [43, 33, 22, 37, 67, 68, 37, 24, 55],
                    borderWidth: 1,
                    backgroundColor: '#009CDD',
                    borderRadius: 6
                },
                {
                    label: '$4368 POP',
                    data: [51, 70, 47, 67, 40, 37, 24, 70, 24],
                    borderWidth: 1,
                    backgroundColor: '#FD982F',
                    borderRadius: 6
                },
                {
                    label: '$120,000 Inventory',
                    data: [51, 70, 47, 67, 40, 37, 24, 70, 24],
                    borderWidth: 1,
                    backgroundColor: '#D2B9DF',
                    borderRadius: 6
                }
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
                <p className="cardTitle m-0 p-0">M2M Summary</p>
                <MoreHorizOutlinedIcon className='cursor-pointer' />
            </div>
            <canvas id="vertical-bar-chart"></canvas>
        </Card>
    )
}

export default SummaryChart
