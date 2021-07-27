import {useState} from 'react'

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className="sign-up-container">
            <form>
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
                >
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default SignUp