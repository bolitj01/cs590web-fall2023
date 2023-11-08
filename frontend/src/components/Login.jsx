import { useState } from "react"
import "../css/login.css"

import {loginApi} from '../api/userApi';
import { Link } from "react-router-dom";
function Login() {

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const [ermsg,setErmsg] = useState("");
const [ercond,setErcond] = useState(false);

    const login = async (e) =>{
        e.preventDefault();
        if(username.length == 0){
            setErmsg("Please enter the Email");
            setErcond(true);
            return;
        }

        if(password.length == 0){
            setErmsg("Please enter the Password");
            setErcond(true);
            return;
        }
        setErcond(false);
        const res = await loginApi(username,password);
       
        if(res === null){
          setErmsg("Invalid credentials! please check Email/Password");
          setErcond(true)
          return;
        }
        setErcond(false);
        alert("login works")
    }

    return <>
    


    
  <header className="header">
    <img id="logo" src="mainlogo.png" />
        <nav className="d-flex align-items-center">
           <a href="/">Home</a>
            <Link to="/signup"><span>Sign Up</span></Link>

    </nav>

</header>


    <section className="centered-section">
        <div className="headSignUp">
          <h2>Login</h2>
        </div>
        <div className={`erMsg ${ercond ? 'show' : 'hide'}`}>
          <h6>{ermsg}</h6>
        </div>
        <div className="formSection">
        <form onSubmit={login}>
          
          
            <div>
              <input onChange={(e) => setUsername(e.target.value)} type="email" className="email inTxCmn iB" placeholder="Email" />
              
            </div>
            
            <div>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="email inTxCmn iB" placeholder="Password" />
                
              </div>
              
            
            <div>
              <input type="submit" value="Login" className="subBtn" placeholder="Email" />
        
            </div>
        </form>
        </div>
      </section>







    </>
}
export default Login