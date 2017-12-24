import * as React from 'react';
import Welcome from './Welcome';

interface INameForm {

}

class NameFormState {
  value: string;
  constructor(value: string) {
    this.value = value;
  }
}

class NameForm extends React.Component<INameForm, NameFormState> {
  state: NameFormState;

  constructor(props: any) {
    super(props);
    this.state = new NameFormState('');

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    if (this.state.value != '') {
      alert('A name was submitted: ' + this.state.value);
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Welcome name={this.state.value} />
      </div>
    );
  }
}

export default NameForm;