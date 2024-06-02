import { Button, TextField } from "components";
import React from "react";

const Login = ({ setLogin }: {
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    const loginHandler = () => {
        if (email === '' || password === '') return alert('Please fill in all fields')
        setLogin(true)
    }

    return (
        <section className="loginsection">
            <div className="login">
                <h4>Login</h4>
                <form className="loginform" onSubmit={(e) => {
                    e.preventDefault()
                    loginHandler()
                }}>
                    <TextField
                        id="email"
                        type="email"
                        validity={true}
                        label="Email"
                        value={email}
                        onChange={(id, value, validity) => setEmail(value)}
                    />

                    <TextField
                        id="email"
                        type="password"
                        label="Password"
                        value={password}
                        validity={true}
                        onChange={(id, value, validity) => setPassword(value)}
                    />

                    <Button
                        type="submit"
                        onClick={() => { }}

                    >
                        Login
                    </Button>
                </form>
            </div>
        </section >
    )
}

export default Login