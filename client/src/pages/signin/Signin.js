import React from 'react'
import "./signin.css"

const SignIn = () => {
    return (
        <div className='container'>
            <div className='wraper'>
                <h5>Sign in </h5>
                <p>to continue to lama video</p>
                <input type="text" className='input' placeholder="user name" />
                <input type="password" className='input' placeholder="password" />
                <button type='submit' className='signin-button'>Sign in</button>

                <h5>or</h5>
                <div className='alt_login'>
                    <input type="text" className='alt_input' placeholder="username" />
                    <input type="text" className='alt_input' placeholder="email" />
                    <input type="password" className='alt_input' placeholder="password" />
                    <button type="submit" className='signin-button'>Sign up</button>
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
    )
}
export default SignIn
