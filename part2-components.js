// 1. Render a Class Component to the DOM
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits/>
        <Vegetables/>
      </div>
    );
  }
};
ReactDOM.render(<TypesOfFood/>, document.getElementById('challenge-node'));

// 2. Write a React Component from Scratch
class MyComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (<div><h1> Here it is! </h1></div>);
  }
}
ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'))
