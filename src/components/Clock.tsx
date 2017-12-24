import * as React from 'react';

interface IClock {

}

class ClockState {
    date: Date;

    constructor(date: Date) {
        this.date = date;
    }
}

export default class Clock extends React.Component<IClock, ClockState> {
    state: ClockState;
    timerID: any;

    constructor(props: any) {
        super(props);
        this.state = new ClockState(new Date());
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    ComponentWillUnMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}