import React, {useContext} from 'react';
import UserContext from "../../utils/context/userContext";
import "./style.css"

export function Signin() {

    const { user, notamember, signup, login } = useContext(UserContext);

    return (<form>
		    <h4> Log Into your account</h4>
		    <div className="form-group">
			    <label htmlFor="email">Email address</label>
			    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
			    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
				    else.</small>
		    </div>
		    <div className="form-group">
			    <label htmlFor="password">Password</label>
			    <input type="password" className="form-control" id="password"/>
		    </div>
		    <div className="form-group form-check">
			    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
			    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
			    <p className="float-right"> Don't have an account Yet? </p>
		    </div>

        <button type="submit" className="btn btn-dark"
             onClick={login}
             onMouseEnter={(e) => { e.target.style.background = "white"; e.target.style.color = "black"}}
             onMouseLeave={(e) => { e.target.style.background = "black"; e.target.style.color = "white"}}>
                Sign in
        </button>

        <button type="submit" className="btn btn-dark float-right"
            onClick={notamember}
            onMouseEnter={(e) => { e.target.style.background = "white"; e.target.style.color = "black"}}
            onMouseLeave={(e) => { e.target.style.background = "black"; e.target.style.color = "white"}}>
                Sign up
        </button>
    </form>
    )
}

export function Signup() {
    const { user, signup, notamember } = useContext(UserContext);

    return (<form>
        <h4> Sign up and get the best of us </h4>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="firstname">First Name</label>
                <input name="firstname" type="text" className="form-control" id="firstname" aria-describedby="firstname" />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="lastname">Last Name</label>
                <input name="lastname" type="text" className="form-control" id="lastname" aria-describedby="lastname" />
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" className="form-control" id="password" />
        </div>

        <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input name="inputAddress" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input name="inputAddress2" type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input name="inputCity" type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select name="inputState" id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input name="inputZip" type="text" className="form-control" id="inputZip" />
            </div>

        </div>
        <div className="form-row col-12">
            <div className="col-12">
            <p className="float-right"> Have an account already? </p>
            </div>
        </div>
        <button type="submit" className="btn btn-dark"
            onClick={signup}
            onMouseEnter={(e) => { e.target.style.background = "white"; e.target.style.color = "black"}}
            onMouseLeave={(e) => { e.target.style.background = "black"; e.target.style.color = "white"}}>
               Create Account
        </button>

        <button type="submit" className="btn btn-dark float-right"
             onClick={notamember}
             onMouseEnter={(e) => { e.target.style.background = "white"; e.target.style.color = "black"}}
             onMouseLeave={(e) => { e.target.style.background = "black"; e.target.style.color = "white"}}>
                Sign in
        </button>
    </form >
    )
}