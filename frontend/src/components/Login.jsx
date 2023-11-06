import "../css/login.css"
function Login() {

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
        <div className="erMsg">
          <h4>Error Message</h4>
        </div>
        <div className="formSection">
        <form>
          
          
            <div>
              <input type="email" className="email inTxCmn iB" placeholder="Email" />
              
            </div>
            
            <div>
                <input type="password" className="email inTxCmn iB" placeholder="Password" />
                
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