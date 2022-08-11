import React,{useState} from 'react'
import "./signin.css"
import NavBar from '../../components/navbar/NavBar'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice'

const SignIn = () => {
    const [name, setName]= useState("")
    const [password, setPassword]= useState("")

    const dispatch =useDispatch()

    const [value, setValue]= useState({
        user_name: "", 
        user_email: "", 
        user_password: ""
    })

    const handelName =(e)=>{
        setName(e.target.value)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    const handleChange=(e)=>{
        setValue((prev)=>({...prev, [e.target.name]: e.target.value}))
    }
    
    const handleSignUp =(e)=>{
        e.preventDefault()
        const message ="you are signed up"
        if(value.user_password==="" || value.user_email==="" || value.user_name === ""){
            alert("complete sigin up form")
        } else{
            alert(message)
            setValue( {user_name: "", user_email: "", user_password: ""})
        }
    }
    const handleLogin = async (e)=>{
        dispatch(loginStart())
        e.preventDefault()
        const message ="Login successful"
        try{
            const res = await axios.post("/auth/signin",{name, password})
            dispatch(loginSuccess(res.data))
            console.log(res.data)
            // if(value.password <3){
            //     alert("Invalid password")
            // } else{
            //     alert(message)
            setName('')
            setPassword('')
            //     setValue( {name: "", email: "", password: ""})

            // }
        }catch(err){
           dispatch(loginFailure())
        }
   
    }

    return (
        <>
        <NavBar/>
        <div className='container'>
            <div className='wrapper'>
                <div className='title'>
                <h5>Sign in </h5>
                <p>to continue to lama video</p>
                </div>
                <input type="text" 
                name ="name" 
                className='input'
                 placeholder="user name" 
                 value={name}
                 onChange={handelName}/>
                <input type="password" 
                name="password" 
                className='input' 
                placeholder="password" 
                value={password}
                 onChange={handlePassword}/>
                <button type='submit' className='signin-button' onClick={handleLogin}>Sign in</button>

                <h5>or</h5>
                <div className='alt_login'>
                    <input type="text" 
                    name ="user_name" 
                    className='alt_input' 
                    placeholder="username" 
                    value={value.user_name}
                 onChange={handleChange}/>
                    <input type="text" 
                    name ="user_email" 
                    className='alt_input' 
                    placeholder="email" 
                    value={value.user_email}
                 onChange={handleChange}/>
                    <input type="password" 
                    name ="user_password" 
                    className='alt_input' 
                    placeholder="password" 
                    value={value.user_password}
                 onChange={handleChange}/>
                    <button type="submit" className='signin-button' onClick={handleSignUp}>Sign up</button>
                </div>

            </div>
            <div className='more'>
                English(USA)
                <div className='links'>
                    <span className='link'>Help</span>
                    <span className='link'>Privacy</span>
                    <span className='link'>Terms</span>
                </div>
            </div >
        </div>
        </>
    )
}
export default SignIn
