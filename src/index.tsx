import React from "react";
import ReactDOM from "react-dom";

// Describing the interface of props that will be passed in
interface AppProps {
  color?: string;
}

// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

class App extends React.Component<AppProps> {
  // This is the easiest way to define state in a class based
  // component because we just override the state property
  // There is different syntax for constructor based state init
  state = { counter: 0 };
  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.querySelector("#root"));
