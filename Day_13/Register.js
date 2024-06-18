
function Register() {
    return (
        <>
            <div className="rform">
                <h2>Registration Form</h2>
                <form>
                    First Name : <br/> <input type="text" /> <br /><br />
                    Last Name : <br/> <input type="text" /> <br /><br />
                    Mobile : <br/> <input type="text" /> <br /><br />
                    Email :<br/> <input type="text" /> <br /><br />
                    Gender : <br /> Male <input type="radio" value="male" name="gender" />
                    Female <input type="radio" value="male" name="gender" /> <br /><br />
                    Password : <br/> <input type="password" /> <br /><br />
                    Confirm Password : <br/> <input type="password" /> <br /><br />
                    <input type="submit" value="Register" />
                </form>
            </div>

        </>
    );

}

export default Register;