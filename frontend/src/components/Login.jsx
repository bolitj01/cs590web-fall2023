import { useState } from "react"
import "../css/login.css"
function Login() {

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const [ermsg,setErmsg] = useState("");
const [ercond,setErcond] = useState(false);

    const login = (e) =>{
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
        setErmsg("");
        alert("lets login");
    }

    return <>
    


    
  <header className="header">
    <img id="logo" src="mainlogo.png" />
    <nav className="navbar">
        <a href="homepage.html">Home</a>
        <a href="SignUp.html">Sign Up</a>

    </nav>

</header>


    <section className="centered-section">
        <div className="headSignUp">
          <h1>Login</h1>
        </div>
        <div className={`erMsg ${ercond ? 'show' : 'hide'}`}>
          <h4>{ermsg}</h4>
        </div>
        <div className="formSection">
        <form>
          
          
            <div>
              <input onChange={(e) => setUsername(e.target.value)} type="email" className="email inTxCmn iB" placeholder="Email" />
              
            </div>
            
            <div>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="email inTxCmn iB" placeholder="Password" />
                
              </div>
              
            
            <div>
              <input type="submit" value="Login" className="subBtn" placeholder="Email" onClick={login}/>
        
            </div>
        </form>
        </div>
      </section>







    </>
}
export default Login