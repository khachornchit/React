import * as React from 'react';

class UserGreeting extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome back in class !</h1>
                <p>The user is <strong>currently logged in</strong>.</p>
            </div>
        );
    }
};

class GuestGreeting extends React.Component {
    render() {
        return <h1>Please sign up in class</h1>;
    }
};

interface IGreeting {
    isLoggedIn: boolean;
}

class Greeting extends React.Component<IGreeting> {    
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }else {
            return <GuestGreeting />;
        }        
    }
}

export default Greeting;