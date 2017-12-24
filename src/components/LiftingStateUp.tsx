import * as React from 'react';

class scaleNames {
  static c: string = 'Celsius';
  static f: string = 'Fahrenheit';

  public static getScale(scale: string) {
    return scale == 'c' ? this.c : this.f;
  }
}

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: any) {
  try {
    const input = parseFloat(temperature);
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  } catch (error) {
    return '';
  }
}

interface ITemperatureInput {
  onTemperatureChange: any;
  temperature: string;
  scale: string;
}

class TemperatureInput extends React.Component<ITemperatureInput> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames.getScale(scale)}:</legend>
        <input value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function BoilingVerdict(props: any) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class LiftingStateUpState {
  temperature: string;
  scale: string;

  constructor(temperature: string, scale: string) {
    this.temperature = temperature;
    this.scale = scale;
  }
}

interface ILiftingStateUp { }

class LiftingStateUp extends React.Component<ILiftingStateUp, LiftingStateUpState> {
  state: LiftingStateUpState;

  constructor(props: any) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = new LiftingStateUpState('', 'c');
  }

  handleCelsiusChange(temperature: any) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature: any) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />

      </div>
    );
  }
}

export default LiftingStateUp;