import './login.css';
import { Link } from 'react-router-dom';


function Login(){

  
  return(<>
  <div id='loginForm'>
    <h2>Welcome</h2>
    <span>
      <input type="text" name="" id="" placeholder='user'/>
    </span>
    <span>
      <input type="password" name="inputName" id="userName" placeholder='Password'/>
    </span>
    <button >Login</button>
    <Link to={'/create'}>Sino tenes usuario podes crear uno desde aqui</Link>
  </div>
  </>);
};

export default Login;