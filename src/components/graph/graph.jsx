import React from "react";
import Grid from '@mui/material/Grid2';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import {TextField, InputAdornment} from '@mui/material/';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Graph = () => {

  return (
    <>
        <Grid container className="h-100">
            <Grid size={12} sx={{position: 'relative'}}>
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                    <AutoAwesomeOutlinedIcon className="chat-icon mb-2" />
                    <p className="chat-text m-0 p-0">Chat with us</p>
                </div>

                <TextField 
                    className="chat-textbox" 
                    maxRows={4} 
                    multiline 
                    variant="outlined" 
                    style={{
                        width: 'auto',
                        position: 'absolute',
                        bottom: 0,
                        right: '17.5%',
                        left: '17.5%'
                    }} 
                    slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <SendOutlinedIcon className="send-icon" />
                            </InputAdornment>
                          ),
                        },
                    }}
                />
            </Grid>
        </Grid>
    </>
  )
}

export default Graph;
