import { useState } from "react"
import "../css/login.css"

function Signup(){

    return <>
     <header className="header">
         <img id="logo" src="mainlogo.png" />
            <nav className="navbar">
                 <a href="homepage.html">Home</a>
                <a href="login.html">Login</a>

            </nav>

    </header>
    <section className="centered-section">
        <div className="headSignUp">
          <h1>Sign Up</h1>
        </div>
        <div className="erMsg">
          <h4>Error Message</h4>
        </div>
        <div className="formSection">
        <form>
            <div>
              <input type="text" className="inTxCmn iB" placeholder="First Name" />
              <input type="text" className="inTxCmn iB" placeholder="Last Name" />
            </div>

            <div>
              <input type="password" className="inTxCmn iB" placeholder="Password" />
              <input type="password" className="inTxCmn iB" placeholder="Re Enter Password" />
            </div>

            <div>
              <input type="email" className="inTxCmn iB emailLg" placeholder="Email" />
              
            </div>
            <div>
              <input type="submit" value="Sign Up" className="subBtn" placeholder="Email" />
              
            </div>
        </form>
        </div>
      </section>



    </>


}


export default Signup