import {useState, useEffect} from 'react'

function UserProfile({user, userProfile, setUserProfile}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (userProfile !== undefined) {
            setFirstName(userProfile.firstName)
            setLastName(userProfile.lastName)
            setAddress(userProfile.address)
        }
    }, [userProfile])

    const getUser = () => {
        fetch(`https://representative-finder-mb-api.web.app/users/${user?.email}`)
            .then(response => response.json())
            .then(json => {
                setUserProfile(json.data)
                localStorage.setItem("user", JSON.stringify(json.data))
            })
            .catch(error => alert(error))
    }

    const updateUser = (e) => {
        e.preventDefault()
        const formValues = {
            firstName: firstName,
            lastName: lastName,
            address: address,
        }

        fetch(`https://representative-finder-mb-api.web.app/users/${userProfile.id}`, {
            method: 'PATCH',
            body: JSON.stringify(formValues),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(response => response.json())
            .then(json => {
                console.log('json -->', json)
                getUser()
            })
            .catch(error => alert(error))
    }

    return(
        <div className="sign-up-container">
            <h1 className="page-title">User Profile</h1>
            <form onSubmit={(e) => updateUser(e)}>
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
                    {loading ? 'Signing Up...' : 'UPDATE'}
                </button>
            </form>
        </div>
    )
}

export default UserProfile