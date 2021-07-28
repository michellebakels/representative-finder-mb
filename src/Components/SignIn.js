import {useState} from "react";
import firebase from 'firebase/app'
import 'firebase/auth'
import {firebaseConfig} from '../config'

function SignIn({setUser}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const signInUser = (e) => {
        e.preventDefault()
        setLoading(true)
        if(!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                setLoading(false)
                setUser(response.user)
            })
            .catch(err => {
                setLoading(false)
                alert(err.message)
            })
    }

    return(
        <div className="sign-up-container">
            <h1 className="page-title">Sign In</h1>
            <form onSubmit={(e) => signInUser(e)}>
                <label className="form-label">
                    Email:&nbsp;
                    <input
                        name="email"
                        type="text"
                        className="form-input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <br/>
                <label className="form-label">
                    Password:&nbsp;
                    <input
                        name="password"
                        type="password"
                        className="form-input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <br/>
                <button
                    className="submit-btn"
                    type="submit"
                >
                    {loading ? 'Signing In...' : 'SUBMIT'}
                </button>
            </form>
        </div>
    )
}

export default SignIn