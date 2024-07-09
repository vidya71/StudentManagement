// // src/Login/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Login.css';
// import logo from '../images/clg.png';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const styles = {
//     backgroundImage: `url(${logo})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover"
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === 'user' && password === 'password') {
      
//       localStorage.setItem('authenticated', 'true');
//       navigate('/dashboard');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <div className="login-container" style={styles}>
//         <form onSubmit={handleSubmit}>
//           <h2>Login</h2>
//           {error && <p className="error">{error}</p>}
//           <div className="form-group">
//             <label>Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// src/Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../images/clg.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const styles = {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      
      localStorage.setItem('authenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <div className="login-container" style={styles}>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;