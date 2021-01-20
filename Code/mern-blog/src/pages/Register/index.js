import React from 'react';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input } from '../../components';
import './register.scss'

const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="register-bg" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name" />
                <Input label="Email" placeholder="Email" />
                <Input label="Password" placeholder="Password" />
                <Gap height={20} />
                <Button title="Register" />
            </div>
        </div>
    )
}

export default Register
