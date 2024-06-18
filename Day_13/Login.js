
function Login() {
    return (
        <>
            <div className="rform">
                <h2>Login Form</h2>
                <form>
                    ID : <br/><input type="text" /> <br /> <br />
                    Password : <br/><input type="password" /> <br /> <br />
                    <input type="submit" value="Login" />
                </form>
            </div>

        </>
    );

}

export default Login;