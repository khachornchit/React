import * as React from 'react';
import * as PropTypes from 'prop-types';

interface IToggle extends React.Props<Toggle> {
}

class ToggleState {
  isToggleOn: boolean;

  constructor(isToggleOn: boolean) {
    this.isToggleOn = isToggleOn;
  }
}

class Toggle extends React.Component<IToggle, ToggleState> {
  state: ToggleState;

  constructor(props: any) {
    super(props);
    this.state = new ToggleState(true);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(function (prevState) {
      return {
        isToggleOn: !prevState.isToggleOn
      }
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;