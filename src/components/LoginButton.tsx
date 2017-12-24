import * as React from 'react';

interface ILoginButton {
    onClick: any;
}

class LoginButton extends React.Component<ILoginButton> {
    render() {
        return (
            <button onClick={this.props.onClick}>Login</button>
        );
    }
}

export default LoginButton;