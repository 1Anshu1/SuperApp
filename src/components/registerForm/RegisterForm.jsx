import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const RegisterForm = () => {

    const navigate = useNavigate()

    const [nameBorder, setNameBorder] = useState('')
    const [usernameBorder, setUsernameBorder] = useState('')
    const [emailBorder, setEmailBorder] = useState('')
    const [mobileBorder, setMobileBorder] = useState('')
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        registerbox: false
    });

    const [error, setError] = useState({
        name: null,
        username: null,
        email: null,
        mobile: null,
        registerbox: null,
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        let isError = false;

        if (user.name.trim().length === 0) {
            setError((prev) => {
                return { ...prev, name: "Name is required" };
            });
            isError = true
            setNameBorder('error-border')
        } else {
            setError((prev) => {
                return { ...prev, name: null };
            });
            setNameBorder('')
        }

        if (user.username.trim().length === 0) {
            setError((prev) => {
                return { ...prev, username: "Userame is required" };
            });
            isError = true
            setUsernameBorder('error-border')

        } else {
            setError((prev) => {
                return { ...prev, username: null };
            });
            setUsernameBorder('')
        }

        if (user.email.trim().length === 0) {
            setError((prev) => {
                return { ...prev, email: "Email is required" };
            });
            isError = true
            setEmailBorder('error-border')
        } else {
            setError((prev) => {
                return { ...prev, email: null };
            });
            setEmailBorder('')
        }

        if (user.mobile.trim().length === 0) {
            setError((prev) => {
                return { ...prev, mobile: "Mobile is required" };
            });
            isError = true
            setMobileBorder('error-border')
        } else {
            setError((prev) => {
                return { ...prev, mobile: null };
            });
            setMobileBorder('')
        }

        if (user.registerbox === false) {
            setError((prev) => {
                return { ...prev, registerbox: "Check this box if you want to proceed" };
            });
            isError = true
        } else {
            setError((prev) => {
                return { ...prev, registerbox: null };
            });
        }

        if (isError) {
            return;
        } else {
            window.localStorage.setItem("user", JSON.stringify(user))
            navigate('/info')
        }
    }



    return (
        <div className='registerForm'>
            <h1 className="title">Super App</h1>
            <div className="subtitle">Create your new account</div>
            <div className="input-section">
                <input
                    type="text"
                    className={`input ${nameBorder}`}
                    placeholder='Name'
                    name='name'
                    value={user.name}
                    onChange={handleChange}
                />
                <div className="error-text">{error.name}</div>

                <input
                    type="text"
                    className={`input ${usernameBorder}`}
                    placeholder='UserName'
                    name='username'
                    value={user.username}
                    onChange={handleChange}
                />
                <div className="error-text">{error.username}</div>

                <input
                    type="text"
                    className={`input ${emailBorder}`}
                    placeholder='Email'
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                />
                <div className="error-text">{error.email}</div>

                <input
                    type="text"
                    className={`input ${mobileBorder}`}
                    placeholder='Mobile'
                    name='mobile'
                    value={user.mobile}
                    onChange={handleChange}
                />
                <div className="error-text">{error.mobile}</div>
            </div>

            <div className="">
                <input
                    id='check'
                    type="checkbox"
                    name='registerbox'
                    value={user.registerbox}
                    onChange={(e) => setUser({ ...user, registerbox: e.target.checked })}
                />
                <label htmlFor="check">Share my registration data with Superapp</label>
                <div className="error-text">{error.registerbox}</div>

            </div>

            <button className='btn' onClick={handleClick}>SIGN UP</button>

            <div className='terms-text'>By clicking on Sign up, you agree to Superapp <span className='highlight'>Terms and Conditions of Use</span></div>
            <div className='terms-text'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className='highlight'>Privacy Policy</span></div>
        </div>

    )
}

export default RegisterForm
