import * as React from 'react';

interface ISelectTagForm {

}

class SelectTagFormState {
  value: string;
  constructor(value: string) {
    this.value = value;
  }
}

class SelectTagForm extends React.Component<ISelectTagForm, SelectTagFormState> {
  state: SelectTagFormState;

  constructor(props: any) {
    super(props);
    this.state = new SelectTagFormState('coconut');

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SelectTagForm;