import {useState} from 'react'

function UserProfile({user}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)

    const createUser = (e) => {
        e.preventDefault()
        const formValues = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            email: user.email
        }

        fetch('https://representative-finder-mb-api.web.app/users', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(response => response.json())
            .then(json => console.log('json -->', json))
            .catch(error => alert(error))
    }

    return(
        <div className="sign-up-container">
            <h1 className="page-title">User Profile</h1>
            <form onSubmit={(e) => createUser(e)}>
                <label className="form-label">
                    First Name:&nbsp;
                    <input
                        name="firstName"
                        type="text"
                        className="form-input"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </label>
                <br/>
                <label className="form-label">
                    Last Name:&nbsp;
                    <input
                        name="lastName"
                        type="text"
                        className="form-input"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </label>
                <br/>
                <label className="form-label">
                    Address:&nbsp;
                    <input
                        name="address"
                        type="text"
                        className="form-input"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </label>
                <br/>
                <button
                    className="submit-btn"
                    type="submit"
                >
                    {loading ? 'Signing Up...' : 'SUBMIT'}
                </button>
            </form>
        </div>
    )
}

export default UserProfile