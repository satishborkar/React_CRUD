import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.userLogin = this.userLogin.bind(this);
    }
    userLogin(e) {
        e.preventDefault();
        if (this.refs.usr.value == "" && this.refs.pwd.value == "") {
            // const error = {
            //     statusCode: 404,
            //     message: "User is not found!!",
            //     result_code: "404"
            // };
            // store.dispatch({ type: ACTION.DISPLAY_ERR, payload: error });
            alert("User is not found!!")
        }

        const userDetails = {
            username: this.refs.usr.value,
            password: this.refs.pwd.value
        }

        fetch('http://localhost:4321/user/authenticate', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userDetails)
        }
        ).then((response) => {
            return response.json();
        }).then((data) => {
            localStorage.setItem('token', data.token);
            if (data.token === "8d5367ad-82ae-4c0f-bb11-adf0b347a014a") {
                history.pushState(null, null, "/dashboard");
            }

            // if (localStorage.getItem('token') === "8d5367ad-82ae-4c0f-bb11-adf0b347a014a") {
            //     console.log('redirecting to another page....');
            //     //console.log(history);
            //     history.pushState(null, null, "/dashboard");
            // };
        });
    }

    render() {
        return (
            <div>
                <div className="grid-title">
                    <h2>Welcome to Employee Management System</h2>
                </div>
                <div className="grid-holder">
                    <form onSubmit={this.userLogin}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="text" className="form-control" ref="usr" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" ref="pwd" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="reset" className="btn btn-primary">Cancel</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default Login;