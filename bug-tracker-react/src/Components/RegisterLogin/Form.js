import React, { useState, useContext } from 'react'
import '../RegisterLogin/Style.css'
import Pic from '../../Pictures/bugWhite.png'
import Profile from '../Profile/Profile'
export default function Form() {

    const [login, setLogin]= useState(true) 
    const [role, setRole]= useState(2);
    const [email, setEmail]= useState("");
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    
    function handleSubmit (e){
        e.preventDefault();
        console.log(role)
        console.log(email)
        console.log(username)
        console.log(password)
        console.log("SUBMITED")
    }
    // function handleInputEmail(e){
    //     setEmail(e.target.value)
    //     console.log(email)
    // }
    function handleInputEmail (e){
        setEmail(e.target.value)
        console.log(email)
      }
    function handleInputUsername(e){
        setUsername(e.target.value)
        console.log(username)
    }
    function handleInputPassword(e){
        setPassword(e.target.value) 
        console.log(password)
    }
    function handleUserStaff(e){
        if(e.target.value == 'user' ){
            setRole(2)
        }else if( e.target.value == 'staff' ){
            setRole(1)
        }
        
        console.log("input",role)
    }
    function handleLogtoReg(e){
        e.preventDefault();
        
        setLogin(false)
        console.log(login)
    }
    
    function handleRegtoLog(e){
        e.preventDefault();
        
        setLogin(true)
        console.log(login)
    }
    return (
        <div className="bodyForm"> 
            <form className="form" >
                <div className="divNamee" >
                <img className="logoo" src={Pic} />
                <h3 className="upLogReg">Login/Register</h3>
                </div>
                
                {login ?
                //FORM EMPTY
                <div className="content">
                    <div className="radioo" ></div>
                 <input className="inp" type="username" onChange={handleInputUsername} name="username" placeholder="username" />
                 <br />
                 <input className="inp" type="password" onChange={handleInputPassword} name="password" placeholder="password" />
                 <br />
                 <button className="logreg-button"  type="submit" onClick={handleLogtoReg} >  Not yet a member</button>
                 <br />
                 <button className="button" type="submit" onClick={handleSubmit} ><span>Submit </span></button>
                 </div>
                :
                <div className="content">
                <div className="radioo" >
                <input className="radio"   onClick={handleUserStaff} type="radio" id="useri" name="age" value="user" />
                <label style={{color:"white"}} for="useri">User</label>
                <input className="radio"   onClick={handleUserStaff} type="radio" id="staffi" name="age" value="staff" />
                <label style={{color:"white"}} for="staffi">Staff</label><br />  
                </div>
                <input className="inp" type="email" onChange={handleInputEmail} name="email" placeholder="example@example.com" />
                <br />
                <input className="inp" type="username" onChange={handleInputUsername} name="username" placeholder="username" />
                <br />
                <input className="inp" type="password" onChange={handleInputPassword} name="password" placeholder="password" />
                <br />
                <input className="inp" type="password" onChange={handleInputPassword} name="password" placeholder="re-enter password" />
                <br />
                <button className="logreg-button" type="submit" onClick={handleRegtoLog} >Already a member</button>
                <br />
                <button className="button" type="submit" onClick={handleSubmit} ><span>Submit </span></button>
                </div>
                //FORM EMPTY 
                }
            </form>
        </div>
    )
//     function LoginForm() {
//     return (
//         
//     )
// }
}