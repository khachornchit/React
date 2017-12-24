import * as React from 'react';
import * as PropTypes from 'prop-types';

interface IWelcome extends React.Props<Welcome> {
    name: string;
}

class Welcome extends React.Component<IWelcome> {
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}

export default Welcome;