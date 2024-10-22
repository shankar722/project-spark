import React, {useRef, useState} from "react";
import Grid from '@mui/material/Grid2';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import {TextField, InputAdornment} from '@mui/material/';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import './chat.scss';

const Chat = () => {
  const hiddenFileInput = useRef(null);
  const [question, setQuestion] = useState('');
  const [chatThread, setChatThread] = useState(new Array())

  const generateResponse = () => {
    setTimeout(() => {
      const newChatThreadWithAns = new Array(...chatThread);
      newChatThreadWithAns.push({type: 'question', text: question});
      newChatThreadWithAns.push({type: 'answer', text: 'This is a sample response.'});
      setChatThread(newChatThreadWithAns);
    }, 2000);
  }

  const handleSend = (type) => {
    if (question.trim() === '') return;
    const newChatThread = new Array(...chatThread);
    newChatThread.push({type: 'question', text: question});
    setChatThread(newChatThread);
    generateResponse()
    setQuestion('');
  }

  const handleEnter = event => {
    if (event.key === 'Enter') {
      handleSend();
    }
  }
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  return (
    <>
        <Grid container className="h-100 chat-container">
            <Grid size={12} sx={{position: 'relative'}}>
                {chatThread.length ? 
                <div className="d-flex flex-column" style={{maxWidth: '65%', width: '100%', margin: '0 auto', height: 'calc(100% - (57px + 2rem))', paddingBottom: 'calc(57px + 2rem)', overflowY: 'auto'}}>
                  {chatThread.map((chat, index) => (
                    <div key={index} className={`chat-${chat.type} mb-3`}>
                      {chat.text}
                    </div>
                  ))}
                </div>
                : <div className="d-flex flex-column align-items-center justify-content-center h-100">
                    <AutoAwesomeOutlinedIcon className="chat-icon mb-2" />
                    <p className="chat-text m-0 p-0">Chat with us</p>
                </div>}
                
                <div 
                  style={{
                    width: 'auto',
                    position: 'fixed',
                    bottom: '0',
                    paddingBottom: '1.5rem',
                    right: '17.5%',
                    left: '17.5%',
                    backgroundColor: '#0C0F20',
                    zIndex: 1
                  }}>
                    <TextField 
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      onKeyUp={(e) => handleEnter(e)}
                      className="chat-textbox" 
                      maxRows={4} 
                      fullWidth
                      placeholder='Ask anything'
                      multiline 
                      variant="outlined" 
                      slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <AttachFileIcon sx={{height: '1.2rem !important'}} onClick={handleClick} className="send-icon" />
                                <input
                                  type="file"
                                  onChange={handleChange}
                                  ref={hiddenFileInput}
                                  style={{display: 'none'}} // Make the file input element invisible
                                />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <SendIcon className="send-icon" onClick={() => handleSend('question')} />
                              </InputAdornment>
                            ),
                          },
                      }}
                  />
                </div>
            </Grid>
        </Grid>
    </>
  )
}

export default Chat;
