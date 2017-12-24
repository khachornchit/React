import * as React from 'react';

interface IListItem {
    value: number;
    key: string;
}

interface INumberList {
    numbers: Array<number>;
}

class ListItem extends React.Component<IListItem> {
    render() {
        return <li>{this.props.value}</li>;
    }
}

class NumberList extends React.Component<INumberList> {
    render() {
        const numbers = this.props.numbers;
        const listNumber = numbers.map((number) =>
            <ListItem key={number.toString()} value={number * 2} />
        );

        return (
            <div>
                <h1>List and Keys</h1>
                <ul>{listNumber}</ul>
            </div>
        );
    }
}

export default NumberList;