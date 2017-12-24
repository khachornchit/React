import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Pluto from '../modules/Pluto';

class App extends React.Component {
    render() {
        return (
            <Pluto.Solutions.Welcome />
        )
    }
}

ReactDOM.render(
    <App />,
    Pluto.Solutions.Root
)