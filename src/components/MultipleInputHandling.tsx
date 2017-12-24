import * as React from 'react';

interface IMultipleInputHandling {

}

class MultipleInputHandlingState {
  isGoing: boolean;
  numberOfGuests: number;
  constructor(isGoing: boolean, numberOfGuests: number) {
    this.isGoing = isGoing;
    this.numberOfGuests = numberOfGuests;
  }
}

export default class MultipleInputHandling extends React.Component<IMultipleInputHandling, MultipleInputHandlingState> {
  state: MultipleInputHandlingState;

  constructor(props: any) {
    super(props);
    this.state = new MultipleInputHandlingState(true, 2);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}