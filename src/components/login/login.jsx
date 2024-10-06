import React from "react";
import './login.scss'; // Assuming CSS will be written separately for styling.

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-background">
          {/* Background Image and design using figma assets */}
          {/* You will need to adjust the styling */}
          <img src="/path-to-your-background-image" alt="background" className="background-image" />
        </div>
      </div>
      
      <div className="login-right">
        <div className="login-logo">
          <img src="/path-to-spark-logo" alt="Spark Logo" className="logo" />
          <p className="subtitle">
            To drive the Cost efficiencies to enable <br /> BUSINESS OUTCOMES
          </p>
        </div>
        
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="email" id="username" name="username" placeholder="username@domain.com" required />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="********" required />
          </div>
          
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          
          <button type="submit" className="login-button">Login</button>
        </form>
        
        <div className="terms">
          <a href="/terms">Terms & Conditions</a> - <a href="/privacy">Privacy Policy</a>
        </div>
        
        <div className="powered-by">
          <p>Powered by</p>
          <img src="/path-to-mindsprint-logo" alt="Mindsprint Logo" className="mindsprint-logo" />
        </div>
      </div>
    </div>
  )
}

export default Login;
