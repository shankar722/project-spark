import React, { useEffect, useState } from 'react'
import {Card} from '@mui/material/';
import Chart from 'chart.js/auto';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const CustomerChart = () => {

    useEffect(() => {
        const el = document.getElementById('horizontal-bar-chart');
        const chart = new Chart(el, {
            type: 'bar',
            data: {
              labels: ['Aldi', 'Rewe', 'Edeka', 'Hofer', 'Others'],
              datasets: [
                {
                    label: false,
                    data: [52.58, 49.57, 35.82, 15.99, 14.17],
                    borderWidth: 1,
                    backgroundColor: [
                        'rgb(255, 175, 204, 0.8)',
                        'rgba(114, 57, 234, 0.8)',
                        'rgba(255, 199, 0, 0.8)',
                        'rgba(0, 217, 217, 0.8)',
                        'rgba(0, 158, 247, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(201, 203, 207, 0.8)'
                    ],
                    borderColor: [
                        'rgb(255, 175, 204)',
                        'rgba(114, 57, 234, 1)',
                        'rgba(255, 199, 0, 1)',
                        'rgba(0, 217, 217, 1)',
                        'rgba(0, 158, 247, 1)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderRadius: 6,
                    axis: 'y',
                },
              ]
            },
            options: {
                indexAxis: 'y',
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
                            beginAtZero: false
                        }
                    },
                    x: {
                        beginAtZero: false,
                        ticks: {
                            color: "#fff",
                            beginAtZero: false
                        }
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
                <div className="d-flex flex-column">
                    <p className="cardTitle m-0 p-0">Top Selling Customers</p>
                    <p className="cardDesc m-0 p-0">8k Customers</p>
                </div>
                <MoreHorizOutlinedIcon className='cursor-pointer' />
            </div>
            <canvas id="horizontal-bar-chart"></canvas>
        </Card>
    )
}

export default CustomerChart
