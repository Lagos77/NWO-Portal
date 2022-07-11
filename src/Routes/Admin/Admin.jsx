import React from 'react'
import "./firebase-config"
import './Admin.css'

const Admin = () => {



    return (
        <div className='admin-container'>
            <div>
                <h3>Register User</h3>

                <input type="text" placeholder='Email...' />

                <input type="text" placeholder='Password...'/>

                <button>Register</button>
            </div>
            <div>
                <h3>Login</h3>

                <input type="text" placeholder='Email...' />

                <input type="text" placeholder='Password...'/>

                <button>Login</button>
            </div>
            <div>
                <p>Current user is logged in</p>
            </div>

        </div>
    )
}

export default Admin;