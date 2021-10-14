import React,{useState} from 'react'
import './SignIn.css'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

const SignIn=(props) =>{

    const [userData, setuserData] = useState({
        email: '',
        password: ''
    })
console.log(props.users);
const handleSubmit=()=>{
 const v=props.users.find(obj => obj.email === userData.email && obj.password === userData.password)
// console.log(v.value);
if (!v) {
    alert('fail')
} else {
    alert('pass')
}
}

    return (
        <div className="login">
            <h1>Sign In</h1>
            <input type="text" name="email" placeholder="Email" value={userData.email} onChange={(e)=> setuserData({...userData,email:e.target.value})}/>
            <input type="password" name="password" placeholder="Password" value={userData.password} onChange={(e)=> setuserData({...userData,password:e.target.value})} />
            <div className="button" onClick={handleSubmit}>Sign In</div>
            <hr/>OR<hr/>
            <div className="button">
              
              <Link to="/register">
              Sign Up
              </Link>
              </div>        </div>
    )
}
const mapStateToProps=state=>{
    return{
users:state.users
    }
}
export default connect(mapStateToProps)(SignIn)
