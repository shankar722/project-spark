import React, { useState } from 'react';
import './attackSurface.scss';
import { Tabs, Tab, Box, Button, ButtonGroup  } from '@mui/material/';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import EditIcon from '@mui/icons-material/Edit';
import TableRow from 'src/commonComponents/tableRow/tableRow.jsx';

const AttackSurface = () => {

    const cardsList = [
        {name: 'Total No. of Domains', value: 1089, status: 'Critical'},
        {name: 'Total No. of Sub Domains', value: 0, status: 'Low'},
        {name: 'Domains Expiring soon', value: 10, status: 'Medium'},
        {name: 'Certificates Expiring soon', value: 25, status: 'High'},
        {name: 'Deleted Domains', value: 90, status: 'High'},
    ];
    const icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19V9Z" fill="#424242"/>
  </svg>

  const tabMenu = ['Domains', 'Sub Domains', 'Active IPs', 'Netblocks', 'Open Ports', 'Applications', 'Leaked Credentials', 'APIs', 'DNS Records']
  const listingTabMenu = ['All (1200)', 'Updated (320)', 'Expiring Soon (48)', 'Expired (12)', 'Announcements']

  return (
    <div className="attack-surface-container w-inherit h-inherit d-flex flex-column flex-balloon">
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'white' }}>
            <Tabs aria-label="basic tabs example" value={tabMenu[0]} className='tabs-container' variant="scrollable" scrollButtons="false">
                {tabMenu.map(item => <Tab icon={icon} iconPosition="start" label={item} value={item} />)}
            </Tabs>
        </Box>
      
        <div className="content p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
                <p className='section-title'>Domains <span>(1089)</span></p>
                <ButtonGroup className="button-group" aria-label="Basic button group">
                    <Button variant="contained" className='active'>Last Week</Button>
                    <Button variant="outlined">Last Month</Button>
                    <Button variant="outlined">Last 6 Months</Button>
                    <Button variant="outlined" startIcon={<EditIcon />}>Select Date</Button>
                </ButtonGroup>
            </div>

            <div className="d-flex align-items-center justify-content-between gap-3">

                {/* Card */} {/* to be put as seperate component */}
                {cardsList.map(cardData => <div className="ge-card d-flex flex-column justify-content-between">
                    <p className="my-0 card-title">{cardData.name}</p>

                    <div className="d-flex flex-column">
                        <p className="card-value mb-2 mt-0">{cardData.value}</p>
                        <p className="card-status d-flex align-items-center my-0">
                            <span className={`indicator mr-2
                                ${cardData.status === 'Critical' ? 'critical' : cardData.status === 'Low' ? 'low' : cardData.status === 'Medium' ? 'medium' : 'high'}
                            `}></span>
                            {cardData.status}
                        </p>
                    </div>
                    <ArrowForwardOutlinedIcon className='arrow-icon' />
                </div>)}
            </div>
        </div>
        <div className="listing-content d-flex flex-column gap-3 p-4 pt-0 h-inherit flex-balloon">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {/* table header */} {/* to be put as seperate component */}
                <Tabs aria-label="basic tabs example" value={listingTabMenu[0]} className='tabs-container' variant="scrollable" scrollButtons="false">
                    {listingTabMenu.map(item => <Tab icon={icon} iconPosition="start" label={item} value={item} />)}

                      <Button variant="text" className='ml-auto icon-button'><SearchOutlinedIcon className='list-header-icons' /></Button>
                      <Button variant="text" className='icon-button ml-3'><AddOutlinedIcon className='list-header-icons' /></Button>
                      <Button variant="text" className='icon-button ml-3'><FilterListOutlinedIcon className='list-header-icons' /></Button>
                      <Button variant="text" className='icon-button ml-3'><FileUploadOutlinedIcon className='list-header-icons' /></Button>
                      <Button variant="text" className='icon-button ml-3'><FileDownloadOutlinedIcon className='list-header-icons' /></Button>
                </Tabs>
            </Box>

            {/* table body */} {/* to be put as seperate component */}
            <div className="table-body">
                {Array.from({ length: 5 }).map((_, index) => <TableRow />)}
            </div>
        </div>
    </div>
  );
};

export default AttackSurface;

