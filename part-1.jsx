// 1.	Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>;

// 2.	Create a Complex JSX Element and Add Comments 
const JSX = (
  <div>
{/*myComment*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

// 3. Render HTML Elements to the DOM- grab the id 'challenge-node'
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.render(JSX, document.getElementById('challenge-node'))

// 4. Define an HTML Class in JSX
// a click event in JSX is onClick, instead of onclick. onchange becomes onChange
// class becomes className
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
