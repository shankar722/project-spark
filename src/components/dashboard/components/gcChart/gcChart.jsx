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
                    backgroundColor: 'rgba(0, 217, 217, 1)',
                    borderRadius: 6,
                    order: 2,
                    color: '#fff'
                },
                {
                    label: 'GC',
                    color: '#fff',
                    base: 10,
                    data: [7.8, 8.9, 9.5, 8.6, 8.8, 9.7, 9.8, 11.3, 12.1, 12.2],
                    borderWidth: 4,
                    backgroundColor: '#ff0000',
                    borderColor: '#ff0000',
                    type: 'line',
                    borderRadius: 6,
                    order: 1,
                    yAxisID: 'y2',
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
                  beginAtZero: false,
                  ticks: {
                    color: "#fff",
                    beginAtZero: false
                  }
                },
                y2: {
                  beginAtZero: false,
                  ticks: {
                    color: "#fff",
                    beginAtZero: false,
                    position: 'left',
                  }
                },
                x: {
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
                <p className="cardTitle m-0 p-0">Full Books GC Movement</p>
                {/* <MoreHorizOutlinedIcon className='cursor-pointer' /> */}
            </div>
            <canvas id="gc-bar-line-chart"></canvas>
        </Card>
    )
}

export default GcChart
