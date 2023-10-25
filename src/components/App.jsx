import { Component } from "react"
export class App extends Component {
  state = {
    inputValue: '123',
  }

  render() {

    return (
      <div>
        <input type="text" value={this.state.inputValue}/>
      </div>
    );
  }
};
