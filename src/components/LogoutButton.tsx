import * as React from 'react';

interface ILogoutButton {
    onClick: any
}

class LogoutButton extends React.Component<ILogoutButton> {
    render() {
        return (
            <button onClick={this.props.onClick}>Logout</button>
        );
    }
}

export default LogoutButton;