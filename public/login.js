import React from 'react';
import './CSS/login.css';


const Login = () => {
    return (
      <div class="container">
      <h2>Login Form</h2>
      <form action="login.php" method="POST">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
        </div>
        <div class="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    );
  }
  
  export default Login;