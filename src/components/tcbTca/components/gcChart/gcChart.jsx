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
              labels: ['', '', '29 Apr', '', '', '06 May','', '', '13 May','', '', '20 May','', '', '27 May', ''],
              datasets: [
                {
                    label: '',
                    data: [90, 110, 110, 95, 95, 75, 75, 90, 90, 110, 110, 97, 97, 110, 110, 95],
                    borderWidth: 2,
                    backgroundColor: '#00D9D9',
                    borderColor: '#00D9D9',
                    borderRadius: 6,
                    color: '#fff',
                    type: 'line',
                    tension: 0.1,
                    fill: false,
                    beginAtZero: true
                },
                {
                    label: '',
                    color: '#fff',
                    base: 10,
                    data: [65, 80, 80, 60, 60, 45, 45, 80, 80, 70, 70, 90, 90, 83, 83, 83],
                    borderWidth: 3,
                    backgroundColor: '#E4334D',
                    borderColor: '#E4334D',
                    type: 'line',
                    borderRadius: 6,
                    tension: 0.1,
                    fill: false,
                    beginAtZero: true
                },
              ]
            },
            options: {
              plugins: {  // 'legend' now within object 'plugins {}'
                legend: {
                  labels: {
                    color: "#fff"
                  }
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    color: "#fff",
                    beginAtZero: false,
                  }
                },
                x: {
                  beginAtZero: false,
                  ticks: {
                    color: "#fff",
                    beginAtZero: false
                  }
                },
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
                <p className="cardTitle m-0 p-0">Historical - Chart</p>
                {/* <MoreHorizOutlinedIcon className='cursor-pointer' /> */}
            </div>
            <canvas id="gc-bar-line-chart"></canvas>
        </Card>
    )
}

export default GcChart
