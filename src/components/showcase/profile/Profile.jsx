import React from 'react'
import './style.css'

import profileImg from '../../../assets/showcase/profileImg.png'

const Profile = ({ user, genre }) => {
    return (
        <div className='profile'>
            <div className="profile-left">
                <img src={profileImg} alt="" />
            </div>
            <div className="profile-right">
                <div className="name">{user?.name}</div>
                <div className="email">{user?.email}</div>
                <div className="username">{user?.username}</div>

                <div className="profile-genre">
                    {genre?.map((item, idx) => (
                        <div key={idx} className="">{item}</div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Profile
