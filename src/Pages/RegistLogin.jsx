import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";



const RegistLogin = (props) => {
    // console.log(props.enteryTo)

    const [val, setVal] = useState("");
    
    useEffect(()=>{
        if(props.enteryTo === "login"){
            setVal("login");
        } else {
            setVal("Sign Up");
        }
    },[props.enteryTo])
    // console.log("val : ",val);

    const NameForm = () => {
        return(
            <div className="form-group">
                <input type="text"  placeholder="Your Name"/>
            </div>
        );
    }

    const LoginBottom = () => {
        return (
            <div>
                <p>Don't have an account ? <Link to='/register'>Register Here</Link></p>
            </div>
        )
    }

    const RegisterBottom = () => {
        return (
            <div>
                <p>Already have an account ? <Link to='/login'>Login Here</Link></p>
                <div className="form-group">
                    <input type="checkbox" name="check" /><br />
                    <label htmlFor="check">By Continuing, i agree to the terms of use & privacy policy.</label>
                </div>
            </div>
        )
    }

    return (
        <div className="login">
            <div className="login-box">
                {/* {() => setVal(props.enteryTo)} */}
                <h1>{val}</h1>
                <form className="login-form" action="#">
                    {val==="login"?<></>:<NameForm/>}
                    <div className="form-group">
                        <input type="email" placeholder="Your Email Address"/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Your Password"/>
                    </div>
                    <button>Continue</button>
                </form>
                {val==="login"?<LoginBottom/>:<RegisterBottom/>}
            </div>
        </div>
    )
}

export default RegistLogin;