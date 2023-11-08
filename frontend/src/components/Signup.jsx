import { useState } from "react"
import "../css/login.css"
import { signupapi } from "../api/userApi";
import { Link } from "react-router-dom";

function Signup(){

    const [formdata,setFormdata] = useState({
        firstname:"",
        lastname:"",
        email: "",
        password:"",
        repassword:"",
        pfwid:""
    });

    const [ercondition,setErcondition] = useState(false);
    const [erMsg,setErmsg] = useState("");
    const [successcondition,setSuccesscondition] = useState(false);
    const handlechange = (e) =>{
        const {name,value} = e.target;
        setFormdata({
            ...formdata,
            [name]:value
        })
    }

    const handlesubmit = async(e) =>{
        e.preventDefault();
        for(const [key,value] of  Object.entries(formdata)){
            if(key == "pfwid"){
                if(value.length ==0){
                    setErmsg("Please enter PFW ID");
                    setErcondition(true);
                    setSuccesscondition(false);
                    return;
                }
            }
            if(key=="repassword" && value.length ==0 ){
                setErmsg("Please re-enter password");
                setErcondition(true);
                setSuccesscondition(false);
                return;
            }
            
            if(value.length ==0 ){
                setErmsg("Please enter "+key.toUpperCase()+"");
                setErcondition(true);
                setSuccesscondition(false);
                return;
            }
           
          
        }
        if(formdata.repassword != formdata.password){
            setErmsg("Passwords do not match");
            setErcondition(true);
            setSuccesscondition(false);
            
            return;
        } 
        setErmsg("");
        setErcondition(false);
        setSuccesscondition(false);
    
       const res = await signupapi(formdata);
  
       if(res.msg === 2)
       {
        setErmsg(res.erMsg);
        setErcondition(true);
        
        return;
       }
       setErmsg("");
       setErcondition(false);
       setErmsg(res.erMsg);
       setSuccesscondition(true);

    }

    return <>
     <header className="header">
         <img id="logo" src="mainlogo.png" />
            <nav className="navbar">
            <a href="/"> <span>Home</span></a>
                 <Link to="/login"> <span>Login</span></Link>

            </nav>

    </header>
    <section className="centered-section">
        <div className="headSignUp">
          <h2>Sign Up</h2>
        </div>
        <div className={`erMsg ${ercondition ? 'show' : 'hide'}  ${successcondition ? 'show sucessMsg':''}   ` } >
          <h6>{erMsg}</h6>
        </div>
        <div className="formSection">
        <form onSubmit={handlesubmit}>
           <div className="intxtopfield">
            <div>
              <input name="firstname" onChange={handlechange} value={formdata.firstname} type="text" className="inTxCmn iB" placeholder="First Name" />
              <input type="text" className="inTxCmn iB" placeholder="Last Name" name="lastname" onChange={handlechange} value={formdata.lastname} />
            </div>

            <div>
              <input type="password" className="inTxCmn iB" placeholder="Password" name="password" onChange={handlechange} value={formdata.password} />
              <input type="password" className="inTxCmn iB" placeholder="Re Enter Password" name="repassword" onChange={handlechange} value={formdata.repassword} />
            </div>
            </div>
            <div>
              <input type="email" className="inTxCmn iB emailLg" placeholder="Email" name="email" onChange={handlechange} value={formdata.email} />
              <input type="text" className="inTxCmn iB emailLg" placeholder="Pfw ID" name="pfwid" onChange={handlechange} value={formdata.pfwid} />
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