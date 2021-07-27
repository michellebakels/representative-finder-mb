import {useState} from "react";

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signInUser = (e) => {
        e.preventDefault()
        console.log('signing in...')
    }

    return(
        <div className="sign-up-container">
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
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default SignIn