import * as React from 'react';

interface ITextAreaForm {

}

class TextAreaState {
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}

class TextAreaForm extends React.Component<ITextAreaForm, TextAreaState> {
  state: TextAreaState;

  constructor(props: any) {
    super(props);
    this.state = new TextAreaState('Please write an essay about your favorite DOM element.');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TextAreaForm;