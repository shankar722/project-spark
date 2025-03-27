import React from 'react';
import './tableRow.scss';
import {Chip, Stack, Button} from '@mui/material';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const TableRow = ({rowData}) => {
    const data = [
        {
            name: 'www.oga.olammarkets.com',
            chips: ['HTTPS ACTIVE', 'CDN', 'FASTLY', 'HIGH']
        },
        {
            name: 'olammarkets.com',
            desc: 'Related Domains'
        },
        {
            name: '151.101.129.124',
            desc: 'IPs'
        },
        {
            name: 'prod.magentocloud.map.fastly.net',
            desc: 'C-name'
        },
        {
            name: '2024-07-11',
            desc: 'Created On'
        },
        {
            name: '2025-03-03',
            desc: 'Last Seen'
        },
        {
            name: '2025-03-05',
            desc: 'Last Updated'
        },
        {
            name: 'Created',
            desc: 'Status'
        }
    ]

    const statusIcon = (status) => {
        switch (status) {
            case 'Created':
                return <HistoryToggleOffOutlinedIcon />
            default:
                return null
        }
    }
    return (
        <div className='table-row d-flex align-items-center justify-content-between align-self-stretch py-3 px-4'>
            
            {/* table row name */}
            <div className="d-flex flex-column justify-content-center">
                <p className="table-data mt-0 mb-1">{rowData.domainName}</p>
                <Stack direction="row" spacing={0.5}>
                    {data[0].chips.filter((item, index) => index < 3).map(item => <Chip className='table-chip px-2 py-0' label={item} variant="outlined" />)}
                    {data[0].chips.length > 3 && <Chip className='table-chip px-2 py-0' label={`+${data[0].chips.length - 3}`} variant="outlined" />}
                </Stack>
            </div>

            {/* table row other data */}
            {/* {data.map((item, index) => index > 0 && index < 7 && 
            <div className="d-flex flex-column justify-content-center">
                <p className="table-data mt-0 mb-1">{item.name}</p>
                <p className="table-data-minor my-0">{item.desc}</p>
            </div>)} */}

            <div className="d-flex flex-column justify-content-center">
                <p className="table-data mt-0 mb-1">{rowData.subdomainCount}</p>
                <p className="table-data-minor my-0">Sub Domain</p>
            </div>

            <div className="d-flex flex-column justify-content-center">
                <p className="table-data mt-0 mb-1">{rowData.regEmail}</p>
                <p className="table-data-minor my-0">Registration ID</p>
            </div>

            <div className="d-flex flex-column justify-content-center">
                <p className="table-data mt-0 mb-1">{rowData.expiryDate}</p>
                <p className="table-data-minor my-0">Expiry Date</p>
            </div>

            {/* table row status */}
            <div className="d-flex flex-column align-items-center justify-content-center">
                <Chip label={rowData.status !== 'N/A' ? rowData.status : data[7].name} className='table-status-chip created px-1' icon={statusIcon(rowData.status !== 'N/A' ? rowData.status : data[7].name)} />
            </div>

            {/* table row action */}
            <div className="d-flex flex-column justify-content-center">
                <Button variant="text" className='icon-button ml-3'>
                    <MoreHorizOutlinedIcon className='table-action-icon' />
                </Button>
            </div>
        </div>
    );
};

export default TableRow;
