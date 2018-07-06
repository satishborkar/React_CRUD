import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const userDetails = {
            username: "varsha",
            password: "varsha"
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

            if (localStorage.getItem('token') === "8d5367ad-82ae-4c0f-bb11-adf0b347a014a") {
                console.log('redirecting to another page....');
                //console.log(history);
                history.pushState(null, null, "/dashboard");
            };
        });
    }

    render() {
        return (
            <div>
                {console.log(history)}
                <h1>Login Page</h1>
            </div>
        )
    }
}

export default Login;