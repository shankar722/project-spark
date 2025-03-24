import React from "react";
import { useNavigate } from 'react-router-dom';
import './login.scss'; // Assuming CSS will be written separately for styling.
import backgroundImage from '../../assets/login-image.jpg';
import MindsprintLogo from '../../assets/mindsprint-logo.svg';
import Logo from '../../assets/logo.svg';
import GuardianEyeLogo from '../../assets/Guardianeye.svg';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Button from '@mui/material/Button';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-auto d-flex login-page vh-100 px-5">
        {/* Left side of the login page */}
        <div className="w-50 px-0 h-inherit login-left d-flex justify-content-start align-items-center">
            {/* Background Image and design using figma assets */}
            <div className="login-image-pillar left"></div>
            <img src={backgroundImage} alt="background" className="login-image" />
            <div className="login-image-pillar right"></div>
        </div>
        {/* Right side of the login page */}
        <div className="w-50 px-0 h-inherit login-right d-flex justify-content-center align-items-center">

            {/* Mindsprint floating logo */}
            <img src={MindsprintLogo} alt="mindsprint logo" className="mindsprint-logo" />

            {/* Login form */}
            <div className="w-100 login-form-content d-flex flex-column justify-content-center align-items-center">
                {/* Guardian Eye logo and text */}
                <div className="login-logo-section mb-5 d-flex flex-column justify-content-center align-items-center">
                  <img src={Logo} alt="guardian eye logo" width={40} className="w-auto mb-2" />
                  <img src={GuardianEyeLogo} alt="guardian eye logo" height={50} className="w-auto" />
                  <p className="logo-text mb-0">Empowering Secure Futures</p>
                </div>

                {/* Login form */}

                {/* Username input */}
                <FormControl sx={{ width: '75%' }} variant="outlined" className="mb-4">
                  <InputLabel htmlFor="outlined-adornment-username">Username / Phone Number</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-username"
                    type={'text'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={'username icon'}
                          edge="end"
                        >
                          {<PersonOutlinedIcon />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Username / Phone Number"
                    required={true}
                  />
                </FormControl>

                {/* Password input */}
                <FormControl sx={{ width: '75%' }} variant="outlined" className="mb-4">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword ? 'hide the password' : 'display the password'
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <p className="forgot-password mx-0 mt-1 mb-0 p-0 cursor-pointer">Forgot Password?</p>
                </FormControl>

                <Button variant="contained" className="login-button" size="large" onClick={() => navigate('/attack-surface')}>
                  Login <LoginOutlinedIcon className="ml-2" />
                </Button>

                {/* "OR" Divider */}
                <div className='textInput my-4'>
                  <div className='matDivider' />
                  <div className='verticalContainer'>
                  <div className='or'>or</div>
                  </div>
                </div>

                <Button variant="outlined" className="login-sso-button" size="large">
                  Login With SSO
                </Button>

                {/* Terms and conditions */}
                <p className="mx-0 px-0 terms-and-conditions mt-auto">Terms & Conditions   -   Privacy Policy</p>
            </div>
        </div>
    </div>
  );
};

export default Login;
