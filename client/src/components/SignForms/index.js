import React from 'react';

export  function Signin() {

    return (<form>
        <h4> Log Into your account</h4>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" />
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
        </div>
        <button type="submit" class="btn btn-dark">Sign in</button>
    </form>
    )
}

export function Signup() {

    return (<form>
        <h4> Sign up and get the best of us </h4>
        <div className="form-row" >
            <div className="form-group col-md-6">
                <label for="firstname">First Name</label>
                <input type="email" className="form-control" id="email" aria-describedby="fristName" />
            </div>
            <div className="form-group col-md-6">
                <label for="lastname">Last Name</label>
                <input type="email" className="form-control" id="email" aria-describedby="lastname" />
            </div>
        </div>
        <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" />
        </div>

        <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
            </div>
        </div>

        <button type="submit" className="btn btn-dark">Sign Up</button>
    </form >
    )
}