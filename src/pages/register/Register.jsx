import './style.css'

import React from 'react'

import registerPageImg from '../../assets/registerPageImg.png'
import RegisterForm from '../../components/registerForm/RegisterForm'

const Register = () => {
    return (
        <div className='register'>
            <div className="registerLeft">
                <img src={registerPageImg} alt="" />
                <div className="">Discover new things on Superapp</div>
            </div>


            <RegisterForm />

        </div>
    )
}

export default Register
