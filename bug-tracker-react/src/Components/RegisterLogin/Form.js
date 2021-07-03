import React, { useState } from 'react'
import '../RegisterLogin/Style.css'
import Pic from '../../Pictures/bugWhite.png'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
export default function Form() {

    let history = useHistory();

    const [loginR, setLogin]= useState(true) 
    const [roleR, setRole]= useState(2);
    const [emailR, setEmail]= useState(null);
    const [usernameR, setUsername]= useState(null);
    const [passwordR, setPassword]= useState(null);

    function handleSubmit(e){
        e.preventDefault();
        
        // fetch('http://localhost:5000/api/UserDatas',{
        //     method:'POST',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({
        //         //EmployeeId:null,
        //         email:emailR,
        //         username:usernameR,
        //         password:passwordR,
        //         role:roleR
        //     })
        // })
        
        // .then(res=>res.json())
        // .then((result)=>{
        //     alert(result);
        //     // console.log(result);s
        // }).catch((error)=>{
        //     console.log(error)
        // })
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/UserDatas',
            data: {
                email:emailR,
                username:usernameR,
                password:passwordR,
                role:roleR
            }
          }).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
        localStorage.setItem('username', JSON.stringify(emailR));
        window.location.reload();
        history.push('/')
        window.location.reload();
        window.location.reload();
    }
    
    // function handleInputEmail(e){
    //     setEmail(e.target.value)
    //     console.log(email)
    // }
    function handleInputEmail (e){
        setEmail(e.target.value)
      }
    function handleInputUsername(e){
        setUsername(e.target.value)
    }
    function handleInputPassword(e){
        setPassword(e.target.value) 
    }
    function handleUserStaff(e){
        if(e.target.value == 'user' ){
            setRole(2)
        }else if( e.target.value == 'staff' ){
            setRole(1)
        }
        
        console.log("input",roleR)
    }
    function handleLogtoReg(e){
        e.preventDefault();
        
        setLogin(false)
    }
    
    function handleRegtoLog(e){
        e.preventDefault();
        
        setLogin(true)
    }
    return (
        <div className="bodyForm"> 
            <form className="form" >
                <div className="divNamee" >
                <img className="logoo" src={Pic} />
                <h3 className="upLogReg">Login/Register</h3>
                </div>
                
                {loginR ?
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