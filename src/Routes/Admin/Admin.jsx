import { useState } from "react";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from '../../Components/firebase-config'
import './Admin.css'

const Admin = () => {
    
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    /*
    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
    */

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            alert("Access denied")
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div className='admin-container'>
            <div className="login-card">
                <div className="login-title">
                    <h3> Login </h3>
                </div>
                <div className="input">
                    <input
                        placeholder="Email..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                </div>
                <div className="input">
                    <input
                        type="password"
                        placeholder="Password..."
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />
                </div>
                <div className="btn-admin">
                    <button className="btn-login" onClick={login}> Login</button>
                </div>
                <div className="status">
                    <h4>{user ? "Admin logged in" : ""}</h4>
                </div>
                <div className="btn-admin">
                    <button className="btn-logout" onClick={logout}> Sign Out </button>
                </div>

            </div>
        </div>
    )
}

export default Admin;