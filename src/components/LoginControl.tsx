import * as React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';

interface ILoginControl {

}

class LoginControlState {
  isLoggedIn: boolean;
  constructor(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }
}

class LoginControl extends React.Component<ILoginControl, LoginControlState> {
  state: LoginControlState;

  constructor(props: any) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = new LoginControlState(false);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    let button = null;

    if (this.state.isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;