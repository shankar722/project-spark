import React, { useEffect, useState } from 'react'
import {Card} from '@mui/material/';
import Chart from 'chart.js/auto';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const SummaryChart = ({id}) => {

    useEffect(() => {
        const el = document.getElementById('vertical-bar-chart');
        const chart = new Chart(el, {
            type: 'bar',
            data: {
              labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri',],
              datasets: [
                {
                    label: 'Withdraw',
                    data: [500, 350, 320, 500, 150, 400, 400],
                    borderWidth: 7,
                    backgroundColor: '#FF40B3',
                    borderRadius: 16
                },
                {
                    label: 'Deposit',
                    data: [250, 120, 280, 380, 250, 250, 330],
                    borderWidth: 7,
                    backgroundColor: '#FD982F',
                    borderRadius: 16
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
                    beginAtZero: true,
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
                <p className="cardTitle m-0 p-0">New Business by Shipment Month</p>
                <MoreHorizOutlinedIcon className='cursor-pointer' />
            </div>
            <canvas id="vertical-bar-chart"></canvas>
        </Card>
    )
}

export default SummaryChart
