import * as React from 'react';

interface IWarningBanner {
  warn: boolean;
}

class PageState {
  public showWarning: boolean;
  constructor(showWarning: boolean) {
    this.showWarning = showWarning;
  }
}

class WarningBanner extends React.Component<IWarningBanner> {
  render() {
    if (!this.props.warn) {
      return null;
    } else {
      return <div className="warning">Show Warning!</div>;
    }
  }
}

interface IPage {

}

class Page extends React.Component<IPage, PageState> {
  state: PageState;

  constructor(props: any) {
    super(props);
    this.state = new PageState(true);
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(function (prevState) {
      return {
        showWarning: !prevState
      }
    })
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default Page;