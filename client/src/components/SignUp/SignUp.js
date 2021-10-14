import React, { useState } from 'react'
import './Sign.css'
import { connect } from 'react-redux'
import {createUser} from '../../actions'
import { Link } from 'react-router-dom'


// import axios from 'axios'
const SignUp = (props) => {
    console.log(props.users);
    const [userData, setuserData] = useState({
        email: '',
        role: '',
        password: '',
        confirmPassword: ''
    })
const handleSignup=()=>{
    const{email,password,role,confirmPassword}=userData
    // console.log(userData);
    // if (password === confirmPassword) {
        if(email && password && role && (password === confirmPassword)){
            alert('Registered Successfully')
//             axios.post('http://localhost:8000/register',userData)
// .then(res=>console.log(res))
props.createUser(userData)
            setuserData({
                email: '',
                role: '',
                password: '',
                confirmPassword: ''
            })

        // }
    }else{
        alert('Invalid')
        setuserData({
            ...userData,
            password:'',
            confirmPassword:''
        })
    }

    

}
    return (
        <div className="register">
            <h1>Sign Up</h1>
            <input type="text" name="email" placeholder="Email" value={userData.email} onChange={(e)=> setuserData({...userData,email:e.target.value})}/>
            <input type="text" name="role" placeholder="Role" value={userData.role} onChange={(e)=> setuserData({...userData,role:e.target.value})}/>
            <input type="password" name="password" placeholder="Password" value={userData.password} onChange={(e)=> setuserData({...userData,password:e.target.value})} />
            <input type="password" name="confirmPassword"placeholder="Re-enter Password"value={userData.confirmPassword} onChange={(e)=> setuserData({...userData,confirmPassword:e.target.value})} />
            <div className="button" onClick={handleSignup} >Sign Up</div>
            <hr />OR<hr />
         
            <div className="button">
              
                <Link to="/login">
                Sign In
                </Link>
                </div>

           
        </div>
    )
}

const mapStateToProps=state=>{
    return{
users:state.users
    }
}
export default connect(mapStateToProps,{createUser})(SignUp)
