import React from 'react';
import '../App';
import { Link } from 'react-scroll';

export default function RTopics() {
    return(
    <div>
          
        <div className='topics'>
          <h1>React (W3)</h1>
          {/* Topics */}
          <div style={{paddingBottom: "30px"}}>
          <h2 className='Reacttopics'>Topics:</h2>
          <ol className='w3-order-list'>
            <li><Link className='w3-link' activeClass="active" to="topic0" spy={true} smooth={true} offset={-70} duration={500}>React Lifecycle.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic1" spy={true} smooth={true} offset={-70} duration={500}>ES6 Arrow Functions.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic2" spy={true} smooth={true} offset={-70} duration={500}>ES6 Variables.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic3" spy={true} smooth={true} offset={-70} duration={500}>ES6 Array Methods.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic4" spy={true} smooth={true} offset={-70} duration={500}>ES6 Spread Operator.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic5" spy={true} smooth={true} offset={-70} duration={500}>ES6 Modules.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic6" spy={true} smooth={true} offset={-70} duration={500}>ES6 Ternery Operator.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic7" spy={true} smooth={true} offset={-70} duration={500}>React Render HTML.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic8" spy={true} smooth={true} offset={-70} duration={500}>React JSX.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic9" spy={true} smooth={true} offset={-70} duration={500}>React Components.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic10" spy={true} smooth={true} offset={-70} duration={500}>React Props.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic11" spy={true} smooth={true} offset={-70} duration={500}>React Event Listeners.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic12" spy={true} smooth={true} offset={-70} duration={500}>React Conditional Rendering.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic13" spy={true} smooth={true} offset={-70} duration={500}>React Forms.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic14" spy={true} smooth={true} offset={-70} duration={500}>React Router.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic15" spy={true} smooth={true} offset={-70} duration={500}>React CSS Styling.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic16" spy={true} smooth={true} offset={-70} duration={500}>React Hooks.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic17" spy={true} smooth={true} offset={-70} duration={500}>React useState Hook.</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic18" spy={true} smooth={true} offset={-70} duration={500}>React useEffect Hook.</Link></li>
          </ol>
          </div>

          
  
          {/* Topics Explanation: */}
          <div style={{paddingBottom: "30px"}}>
            <h3 style={{paddingBottom: "30px"}}>Topics Explanation:</h3>
            <ol className='second-order-list'>

                {/* React Lifecycle */}
                <li id="topic0">
                  <div><b>React Lifecycle :</b></div><br />
                  <div>Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: <b>Mounting</b>, <b>Updating</b>, and <b>Unmounting</b>.</div><br />
      
                <div><b>Mounting : </b>Mounting means the process of creating a component and inserting it into the DOM, making it visible and ready for user interaction.</div>
                <div className="router-code-grey">App.js</div>
                <div className="router-code-black">
                  <div>import React, &#123; useState, useEffect &#125; from 'react';</div>
                  <div style={{paddingTop: "20px"}}>function MountingExample() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>const [message, setMessage] = useState('Loading...');</div>
                  <div style={{paddingLeft: "20px"}}>useEffect&#40;() =&gt; &#123;</div>
                  <div style={{paddingLeft: "40px"}}><mark>// Simulate fetching data</mark></div>
                  <div style={{paddingLeft: "40px"}}>setTimeout&#40;() =&gt; &#123;</div>
                  <div style={{paddingLeft: "60px"}}>setMessage('Data fetched!');</div>
                  <div style={{paddingLeft: "40px"}}>&#123;, 1500&#41;</div>
                  <div style={{paddingLeft: "20px"}}>&#125;, []&#41;</div>
                  <div style={{paddingLeft: "20px"}}>return &lt;div&gt;&#123;message&#125;&lt;/div&gt;;</div>
                  <div>&#125;</div>
                </div>
                <div style={{padding: "20px 0px"}}>In the Mounting example, the component starts with a "Loading..." message and then updates to "Data fetched!" after a simulated delay. The useEffect hook with an empty dependency array ensures it runs only once after the component mounts.</div>
                <div><b>Updating : </b>Updating means the process of re-rendering a component and updating its user interface in response to changes in state or props.</div>
                <div className="router-code-grey">App.js</div>
                <div className="router-code-black">
                  <div>import React, &#123; useState, useEffect &#125; from 'react';</div>
                  <div style={{paddingTop: "20px"}}>export default function UpdatingExample() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>  const [count, setCount] = useState(0);</div>
                  <div style={{padding: "20px 0px 0px 20px"}}>useEffect&#40;() =&gt; &#123;</div>
                  <div style={{paddingLeft: "40px"}}>// Update title when count changes</div>
                  <div style={{paddingLeft: "40px"}}>document.title = `Count: $&#123;count&#125;`;</div>
                  <div style={{paddingLeft: "40px"}}>&#125;, [count]&#41;;</div>
                  <div style={{padding: "20px 0px 0px 20px"}}>return &#40;</div>
                  <div style={{paddingLeft: "40px"}}>&lt;div&gt;</div>
                  <div style={{paddingLeft: "60px"}}>&lt;p&gt;Count: &#123;count&#125;&lt;/p&gt;</div>
                  <div style={{paddingLeft: "60px"}}>&lt;button onClick=&#123;() =&gt; setCount(count + 1)&#125;&gt;Increment&lt;/button&gt;</div>
                  <div style={{paddingLeft: "40px"}}>&lt;/div&gt;</div>
                  <div style={{paddingLeft: "20px"}}>&#125;;</div>
                  <div>&#125;</div>
                </div>
                <div style={{padding: "20px 0px"}}>In the Updating example, a counter is displayed along with a button to increment it. The useEffect hook with a count dependency array updates the document title whenever the count changes.</div>
                <div><b>Unmounting : </b>Unmounting means the process of removing a component from the DOM, making it no longer visible and terminating its interaction with the user.</div>
                <div className="router-code-grey">App.js</div>
                <div className="router-code-black">
                  <div>import React, &#123; useState, useEffect &#125; from 'react';</div>
                  <div style={{paddingTop: "20px"}}>export default function UnmountingExample() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>const [visible, setVisible] = useState(true);</div>
                  <div style={{padding: "20px 0px 0px 20px"}}>useEffect&#40;() =&gt; &#123;</div>
                  <div style={{paddingLeft: "40px"}}>return () =&gt; &#123;</div>
                  <div style={{paddingLeft: "60px"}}>console.log('Component unmounted');</div>
                  <div style={{paddingLeft: "40px"}}>&#125;;</div>
                  <div style={{paddingLeft: "20px"}}>&#125;, []&#41;</div>
                  <div style={{padding: "20px 0px 0px 20px"}}>return &#40;</div>
                  <div style={{paddingLeft: "40px"}}>&lt;div&gt;</div>
                  <div style={{paddingLeft: "60px"}}>&#123;visible ? &lt;p&gt;Unmounting Example&lt;/p&gt; : null &#125;</div>
                  <div style={{paddingLeft: "60px"}}>&lt;button onClick=&#123;() =&gt; setVisible(false)&#125;&gt;Hide&lt;/button&gt;</div>
                  <div style={{paddingLeft: "40px"}}>&lt;/div&gt;</div>
                  <div style={{paddingLeft: "20px"}}>&#125;;</div>
                  <div>&#125;</div>
                </div>
                <div style={{padding: "20px 0px"}}>In the Unmounting example, there's a message initially displayed along with a button to hide it. When the component is unmounted, the message "Component unmounted" is logged to the console. The useEffect hook with an empty dependency array replicates the unmounting behavior.</div>     
                </li>

                {/* ES6 Arrow Functions */}
                <li id="topic1">
                  <div><b>ES6 Arrow Functions : </b></div><br />
                  <div>In React, arrow functions are often used to define components and event handlers. Arrow functions provide a concise syntax and automatically bind the this keyword to the surrounding context, which is particularly useful in React components.</div><br /> 
                  <div>Here's an example of defining a functional component using an arrow function:</div><br></br>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                const MyComponent = () =&gt; &#123;<br></br>
                return &lt;div&gt;Hello, World!&lt;/div&gt;;<br></br>
                &#125;;<br></br>
                </div>

                <div style={{paddingTop: "30px"}}>In the above example, 'MyComponent' is defined as an arrow function that returns JSX, which represents the component's structure and content.</div><br></br>
                <div>Arrow functions are also commonly used to define event handlers in React components. Here's an example of an arrow function used as an event handler in a class component:</div>
                <div className="router-code-grey">App.js</div>
                <div className="router-code-black">
                class MyComponent extends React.Component &#123;<br></br>
                handleClick = () =&gt; &#123;<br></br>
                console.log('Button clicked!');<br></br>
                &#125;;<br></br><br></br>
                render() &#123;<br></br>
                return &lt;button onClick=&#123;this.handleClick&#125;&gt;Click me&lt;/button&gt;;<br></br>
                &#125;<br></br>
                &#125;<br></br>
                </div>

                <div>In the above example, the 'handleClick' method is defined as an arrow function. When the button is clicked, the arrow function is invoked, and the message 'Button clicked!' is logged to the console.<br></br><br></br>Arrow functions are particularly convenient when you need to access the component's 'this' context or when you want to pass them as props to child components while preserving the correct 'this' binding.</div>
                </li>

                {/* ES6 Variables */}
                <li id="topic2">
                  <div><b>ES6 Variables : </b><br></br><br></br>In JavaScript, there are three main ways to declare variables: using 'var', 'let', and 'const'.</div> <br></br>
                <div><b>var: </b> The 'var' keyword was the traditional way to declare variables in JavaScript prior to the introduction of let and const. Variables declared with 'var' are function-scoped, meaning they are accessible within the entire function in which they are declared. If a 'var' variable is declared outside of any function, it becomes globally scoped.</div>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  function example() &#123; <br></br>
                      var x = 10;<br></br>
                    console.log(x);  // Output: 10<br></br>
                  &#125;<br></br><br></br>
                  console.log(x);  // Throws an error - x is not defined<br></br>
                </div>
                <div style={{paddingTop: "20px"}}><b>let: </b>The 'let' keyword was introduced in ECMAScript 6 (ES6) and provides block-scoping. Variables declared with 'let' are only accessible within the block (a block is defined by curly braces {}) in which they are declared, including nested blocks.</div>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  function example() &#123;<br></br>
                   if (true) &#123;<br></br>
                   let x = 10;<br></br>
                   console.log(x);  // Output: 10<br></br>
                  &#125;<br></br>
                  console.log(x);  // Throws an error - x is not defined<br></br>
                  &#125;<br></br>
                </div>
                <div style={{paddingTop: "20px"}}><b>const: </b> The 'const' keyword is also introduced in ES6. It is used to declare variables that have a constant (unchanging) value. Like let, 'const' is also block-scoped. Once a value is assigned to a 'const' variable, it cannot be reassigned.</div>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                function example() &#123;<br></br>
                const x = 10;<br></br>
                console.log(x);  // Output: 10<br></br>
                x = 20;  // Throws an error - Assignment to constant variable<br></br>
                &#125;<br></br>
                </div>
                </li>


                {/* ES6 Array Methods */}
                <li id="topic3">
                  <div><b>ES6 Array Methods : </b><br></br><br></br>There are many JavaScript array methods. One of the most useful in React is the .map() array method. The .map() method allows you to run a function on each item in the array, returning a new array as the result. In React, map() can be used to generate lists.</div>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  const myArray = ['apple', 'banana', 'orange'];<br></br>
                  const myList = myArray.map((item) =&gt; &lt;p&gt;&#123;item&#125;&lt;/p&gt;)<br></br>
                </div>

                <div style={{paddingTop: "20px"}}>In the above code snippet, the spread operator is used to create a new array newNumbers by spreading the elements of the numbers array. This technique allows you to add additional elements seamlessly.</div>
                </li>

                {/* ES6 Spread Operator */}
                <li id="topic4">
                  <div><b>ES6 Spread Operator : </b><br></br><br></br>The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.</div> 
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  const numbers = [1, 2, 3];<br></br>
                  const newNumbers = [...numbers, 4, 5, 6];<br></br>
                  console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6]<br></br>
                </div>

                <div style={{paddingTop: "20px"}}>In the above code snippet, the spread operator is used to create a new array newNumbers by spreading the elements of the numbers array. This technique allows you to add additional elements seamlessly.</div>
                </li>

                {/* ES6 Modules */}

                <li id="topic5"><b>ES6 Modules : </b><br></br><br></br>JavaScript modules allow you to break up your code into separate files. This makes it easier to maintain the code-base. ES Modules rely on the 'import' and 'export' statements.<br></br>
                <div>There are two types of exports:</div>
                {/* Named exports */}
                <div style={{paddingTop: "20px"}}><b>Named Exports : </b>You can create named exports in two ways. In-line individually, or all at once at the bottom.</div>
                <div className="router-code-grey">App.js</div>
                <div className="router-code-black">
                const name = "Jesse"<br></br>
                const age = 40<br></br>
                export &#123;name, age&#125;
                </div>
                {/* Default exports */}
                <div style={{paddingTop: "20px"}}><b>Default Exports : </b>You can create named exports in two ways. In-line individually, or all at once at the bottom.</div>
                <div className="router-code-grey">App.js</div>
                <div className="router-code-black">
                const message = () =&gt; &#123;<br></br>
                const name = "Jesse";<br></br>
                const age = 40;<br></br>
                return name + ' is ' + age + 'years old.';<br></br>
                &#125;;<br></br>
                <br></br>export default message;
                </div>
                {/* Imports */}
                <div style={{paddingTop: "20px"}}><b>Imports : </b>You can import modules into a file in two ways, based on if they are named exports or default exports. Named exports must be destructured using curly braces. Default exports do not.</div>
                <div style={{paddingTop: "15px", paddingBottom: "5px"}}>Import Named exports:</div>
                <div className="router-code-grey">App.js</div>
                <div className="router-code-black">
                import &#123;name, age&#125; from './Message.js'
                </div>
                <div style={{paddingTop: "15px", paddingBottom: "5px"}}>Import Default exports:</div>
                <div className="router-code-grey">App.js</div>
                <div className="router-code-black">
                import message from './Message.js'
                </div>
                </li>
                
                {/* ES6 Ternery Operator */}
                <li id="topic6"><b>ES6 Ternery Operator : </b><br></br><br></br>The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.<br></br> 
                <div className="router-code-grey">App.js</div>
                <div className="router-code-black">condition ? expressionIfTrue : expressionIfFalse</div>

                <div style={{paddingTop: "20px"}}>Besides 'false', possible falsy expressions are: 'null', 'NaN', '0', the empty string (""), and 'undefined'. If condition is any of these, the result of the conditional expression will be the result of executing the expression 'expressionIfFalse'.</div>
                </li>

                {/* React Render HTML */}
                <li id="topic7"><b>React Render HTML : </b><br></br><br></br>React renders HTML to the web page by using a function called createRoot() and its method render(). 
                <div className="router-code-grey">Index.js</div>
                <div className="router-code-black">
                  import React from 'react';<br />
                  import ReactDOM from 'react-dom/client';<br />
                  import App from './App';<br /><br />
                  const root = ReactDOM.createRoot(document.getElementById('root'));<br />
                  root.render(
                    <div style={{paddingLeft: "20px"}}>&lt;App /&gt;</div>
                  )
                </div>
                </li>

                {/* React JSX */}
                <li id="topic8"><b>React JSX : </b><br></br><br></br>JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. The HTML code must be wrapped in ONE top level element. So if you like to write two paragraphs, you must put them inside a parent element, like a div element.<br></br> 
                <div className="router-code-grey">App.js</div>
                <div className="router-code-black">
                  const myElement = ( <br></br>
                  <div style={{paddingLeft: "20px"}}>&lt;div&gt;<br></br>
                  &lt;p&gt;I am a paragraph.&lt;/p&gt;<br></br>
                  &lt;p&gt;I am a paragraph too.&lt;/p&gt;<br></br>
                  &lt;/div&gt;<br></br></div>
                  );<br></br>
                </div>
                <div style={{paddingTop: "20px"}}>In React, if you want to create an empty element or a self-closing tag, you can do so by adding a forward slash at the end of the JSX tag. Here's an example:</div>
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                  &lt;img src="example.jpg" alt="Example Image" /&gt;<br></br>
                </div>
                <div>The 'class' attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the 'class' keyword is a reserved word in JavaScript, you are not allowed to use it in JSX. Use attribute "className" instead.</div>
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                  &lt;h1 className="myclass"&gt;Hello World&lt;/h1&gt;
                </div>
                <div>With JSX you can write expressions inside curly braces &#123; &#125;. The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:</div>
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                  &lt;h1&gt;React is &#123;5 + 5&#125; times better with JSX&lt;/h1&gt;
                </div>
                </li>

                {/* React Components */}
                <li id="topic9"><b>React Components : </b><br></br><br></br>There are two types of components in React: functional components and class components.<br></br><br></br><mark>In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8. There is an optional section on Class components for your reference.</mark><br></br><br></br>

                <b>Functional Components :</b> Functional components are JavaScript functions that receive props (properties) as input and return JSX elements. They are typically used for simpler components that don't require state or lifecycle methods. Here's an example of a functional component:<br></br> 
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                 function MyComponent(props) &#123;<br></br>
                 return &lt;h1&gt;Hello, &#123;props.name&#125;!&lt;/h1&gt;;<br></br>
                 &#125;</div>

                 <b>Class Components :</b> Class components are JavaScript classes that extend the React.Component base class. They can have their own internal state and utilize lifecycle methods. Here's an example of a class component:<br></br> 
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">class MyComponent extends React.Component &#123;<br></br>
                      constructor(props) &#123;<br></br>
                        super(props);<br></br>
                        this.state = &#123; count: 0 &#125;;<br></br>
                        &#125;<br></br><br></br>
                    
                      handleClick() &#123;<br></br>
                        this.setState(&#123; count: this.state.count + 1 &#125;);<br></br>
                        &#125;<br></br><br></br>
                    
                      render() &#123;<br></br>
                        return (<br></br>
                          &lt;div&gt;<br></br>
                          &lt;h1&gt;Count: &#123;this.state.count&#125;&lt;/h1&gt;<br></br>
                   &lt;button onClick=&#123;this.handleClick.bind(this)&#125;&gt;Increment&lt;/button&gt;<br></br>
                   &lt;/div&gt;<br></br>
                      );<br></br>
                      &#125;
                <br></br>
                 &#125;</div>

                <div>In this example, MyComponent is a class component that has its own state (count) and a method (handleClick()) to update the state when the button is clicked. The render() method defines the component's UI structure.</div>
                </li>

                {/* React Props */}
                <li id="topic10"><b>React Props : </b><br></br><br></br>In React, props (short for "properties") are a way to pass data from a parent component to a child component. They are an important mechanism for sharing information and configuring components.<br></br>

                <br></br>When you define a component in React, you can specify custom props that the component expects to receive. These props are provided as attributes when the component is used or rendered. Here's an example:<br></br> 
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">function Greeting(props) &#123;<br></br>
                return &lt;h1&gt;Hello, &#123;props.name&#125;!&lt;/h1&gt;;<br></br>
                &#125;<br></br><br></br>

                // Using the Greeting component<br></br>
                &lt;Greeting name="John" /&gt;<br></br>
                </div>

                <div>In this example, the Greeting component expects a name prop. When we use the component &lt;Greeting name="John" /&gt;, we pass the value "John" as the name prop.<br></br><br></br>

                Inside the Greeting component, the props object contains all the props passed to it. In this case, props.name would have the value "John". The component uses this value to display a personalized greeting.<br></br><br></br>

                Props are read-only, meaning that the child component cannot modify the values received via props. They are meant to be immutable and passed from parent components to child components.<br></br><br></br>

                Props can be of any data type, including strings, numbers, booleans, objects, or even functions. You can pass complex data structures and even callback functions as props.<br></br><br></br>

                Using props, you can create reusable components that can be customized and configured with different data when used in different parts of your application. It promotes component reusability and makes your code more modular.</div>
                </li>

                {/* React Event Listeners */}
                <li id="topic11"><b>React Event Listeners : </b><br></br><br></br>Just like HTML DOM events, React can perform actions based on user events. React has the same events as HTML: click, change, mouseover etc.<br></br><br></br>
                React events are written in camelCase syntax:<br></br>
                onClick instead of onclick. React event handlers are written inside curly braces: <br></br>onClick=&#123;shoot&#125; instead of onClick="shoot()".<br></br> 
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                     &lt;button onClick=&#123;handleClick&#125;&gt;Click Me&lt;/button&gt;<br></br>
                 </div>

                <div>Besides 'false', possible falsy expressions are: 'null', 'NaN', '0', the empty string (""), and 'undefined'. If condition is any of these, the result of the conditional expression will be the result of executing the expression 'expressionIfFalse'.</div>
                </li>

                {/* React Conditional Rendering : */}
                <li id="topic12"><b>React Conditional Rendering : </b><br></br><br></br>Conditional rendering is a fundamental concept in React, allowing developers to show or hide elements in the user interface based on certain conditions. This enables dynamic and responsive user experiences by selectively displaying content based on data, user input, or application state.<br></br><br></br>
                There are various methods for implementing conditional rendering in React:<br></br><br></br>
                <b>Logical Operator (&&) :</b> If you want to display or not want to display use 'Logical Operator'.
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                     &#123; isShown && &lt;p&gt;&#123;props.punchline&#125;&lt;/p&gt;&#125;
                 </div>
                 <b>Ternery Operator :</b> If you want to choose between one of two things to display use 'Ternery Operator'.
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                &lt;button&gt; onClick= &#123;toggle&#125;&gt;&#123;isShown ? "Hide" : "Show"&#125; Punchline&lt;/button&gt;
                 </div>
                 <b>If Statement :</b> If your conditions are more complex than just having one or two options to display use 'If' Statement.
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                const date = new Date();<br></br>
                const hours = date.getHours();<br></br><br></br>
                let TimeOfDay;<br></br><br></br>
                if (hours &gt; 12) &#123;<br></br>
                <div  style={{paddingLeft: "20px"}}>TimeOfDay = "Good morning"</div>
                &#125; else if (hours &gt;= 12 && hours &lt; 17) &#123;<br></br>
                <div style={{paddingLeft: "20px"}}>TimeOfDay = "Good Afternoon"</div>
                &#125; else &#123;<br></br>
                <div style={{paddingLeft: "20px"}}>TimeOfDay = "Good night"</div>
                &#125;
                 </div>
                 <b>Switch Statement :</b> For more complex scenarios, you can use switch statements to handle multiple conditions.
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                let day;<br></br><br></br>
                switch (new Date().getDay()) &#123;<br></br>
                <div  style={{paddingLeft: "20px"}}>case 0:</div>
                <div  style={{paddingLeft: "40px"}}>day = "Sunday";</div>
                <div  style={{paddingLeft: "40px"}}>break;</div>
                <div  style={{paddingLeft: "20px"}}>case 1:</div>
                <div  style={{paddingLeft: "40px"}}>day = "Monday";</div>
                <div  style={{paddingLeft: "40px"}}>break;</div>
                <div  style={{paddingLeft: "20px"}}>case 2:</div>
                <div  style={{paddingLeft: "40px"}}>day = "Tuesday";</div>
                <div  style={{paddingLeft: "40px"}}>break;</div>
                <div  style={{paddingLeft: "20px"}}>case 3:</div>
                <div  style={{paddingLeft: "40px"}}>day = "Wednesday";</div>
                <div  style={{paddingLeft: "40px"}}>break;</div>
                <div  style={{paddingLeft: "20px"}}>case 4:</div>
                <div  style={{paddingLeft: "40px"}}>day = "Thursday";</div>
                <div  style={{paddingLeft: "40px"}}>break;</div>
                <div  style={{paddingLeft: "20px"}}>case 5:</div>
                <div  style={{paddingLeft: "40px"}}>day = "Friday";</div>
                <div  style={{paddingLeft: "40px"}}>break;</div>
                <div  style={{paddingLeft: "20px"}}>case 6:</div>
                <div  style={{paddingLeft: "40px"}}>day = "Saturday";</div>
                &#125;<br></br><br></br>
                &lt;p&gt;Today is &#123;day&#125;&lt;/p&gt;
                 </div>
                </li>

                {/* React Forms : */}
                <li id="topic13"><b>React Forms : </b><br></br><br></br>In React, forms are a critical part of creating interactive user interfaces and collecting data from users. React provides several ways to handle forms, but one of the common approaches is using 'controlled components'.<br></br><br></br>
                <b>Controlled Components :</b> Controlled Components: In React, form elements such as inputs, selects, and textareas are controlled components. Their values are controlled by the React state. This means that the state of the component holds the current value of the form elements, and any changes to these elements are handled through state updates.<br /><br />
                <b>State Management:</b> The form data is typically stored in the component's state using the useState hook or a state management library like Redux. When the user interacts with the form, the state is updated, triggering a re-render of the component and reflecting the changes in the UI.<br /><br />
                <b>Event Handling:</b> React uses synthetic events to handle form element events like onChange, onSubmit, etc. When the user interacts with the form elements, event handlers are used to capture the changes and update the state accordingly.<br /><br />
                <b>Conditional Rendering: </b>React allows you to conditionally render form elements based on certain conditions or user interactions. This feature enables you to create dynamic and interactive forms based on the application's requirements.<br /><br />
                <b>Form Submission:</b> When the user submits the form, the onSubmit event is triggered. You can use this event to perform any necessary actions, like sending the form data to a server for processing or displaying a success message.<br /><br />
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                 import React from "react";<br></br>
                 import './App.css';<br></br><br></br>
                 export default function App() &#123;<br></br><br></br>
                 const [form, setForm] = React.useState(&#123;
                 <div style={{paddingLeft: "20px"}}><mark>email : "",</mark><br></br>
                    password : "",<br></br>
                    confirmPassword : "",<br></br>
                    joining : false</div>
                 &#125;)<br></br><br></br>
                 function toggle(event) &#123;<br></br>
                 <div style={{paddingLeft: "20px"}}>const &#123;name, value, type, checked&#125; = event.target</div>
                 setForm(prevForm =&gt; &#123;<br />
                 <div style={{paddingLeft: "20px"}}>return &#123;</div>
                 <div style={{paddingLeft: "20px"}}>...prevForm,</div>
                 <div style={{paddingLeft: "20px"}}>[name] : type === "checkbox" ? checked : value</div>
                 &#125;<br />
                 &#125;)<br />
                 &#125;<br /><br />

                  function handleSubmit(event) &#123;<br />
                  event.preventDefault()<br />
                  if(form.password === form.confirmPassword) &#123;<br />
                  <div style={{paddingLeft: "20px"}}>alert("Successfully Signed up")<br />
                    &#125; else &#123;<br />
                    alert("Passwords do not match")<br />
                    &#125;</div>
                  &#125;<br /><br />

                  return(<br />
                    &lt;div className="container"&gt;<br />
                    &lt;form className="react-form" onSubmit=&#123;handleSubmit&#125;&gt;<br />
                      <div style={{paddingLeft: "20px"}}> &lt;input <br />
                      <div style={{paddingLeft: "40px"}}>
                          type="text"<br />
                          placeholder="Email"<br />
                          onChange=&#123;toggle&#125;<br />
                          <mark>name="email"</mark><br />
                          value=&#123;form.email&#125;</div>
                        /&gt;<br />
                        &lt;input <br />
                        <div style={{paddingLeft: "40px"}}>
                          type="password"<br />
                          placeholder="Password"<br />
                          onChange=&#123;toggle&#125;<br />
                          name="password"<br />
                          value=&#123;form.password&#125;</div>
                        /&gt;<br />
                        &lt;input <br />
                        <div style={{paddingLeft: "40px"}}>
                          type="password"<br />
                          placeholder="Confirm Password"<br />
                          onChange=&#123;toggle&#125;<br />
                          name="confirmPassword"<br />
                          value=&#123;form.confirmPassword&#125;</div>
                        /&gt;<br />
                        &lt;br /&gt;<br />
                        &lt;div className="input-label"&gt;<br />
                        &lt;input <br />
                        <div style={{paddingLeft: "40px"}}>
                          type="checkbox"<br />
                          id="joining"<br />
                          onChange=&#123;toggle&#125;<br />
                          name="joining"<br />
                          checked=&#123;form.joining&#125;</div>
                        /&gt;<br />
                        &lt;label className="checkbox-label" htmlFor="joining"&gt;I want to join the<br />newsletter&lt;/label&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;br /&gt;<br />
                        &lt;button className="signup-btn"&gt;Sign Up&lt;/button&gt;</div><br />
                      &lt;/form&gt;<br />
                    &lt;/div&gt;<br />
                  )<br />
                  125;
                 </div>
                 <div><b>Note : </b>'name' attribute in the form elements should match the property name being held in state for that input.</div>
                </li>

                {/* React Router */}
                <li id="topic14"><b>React Router : </b><br></br><br></br>Install React Router : <br></br>
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                    npm install react-router-dom
                 </div>
                 Once the installation is complete, you can start using React Router in your React application. Remember to import the necessary components from react-router-dom and set up your routing according to your application's needs.<br></br> 
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                  import React from 'react';<br />
                  import Home from './home';<br />
                  import About from './about';<br />
                  import Contact from './contact';<br />
                  import &#123; BrowserRouter, Routes, Route, Link &#125; from 'react-router-dom';<br /><br />
                  export default function App() &#123;<br />
                  return(
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;BrowserRouter&gt;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;div className='link-header'&gt;</div>
                    <div style={{paddingLeft: "80px"}}>&lt;Link className='link-btns' to='/home'&gt;Home&lt;/Link&gt;</div>
                    <div style={{paddingLeft: "80px"}}>&lt;Link className='link-btns' to='/about'&gt;About&lt;/Link&gt;</div>
                    <div style={{paddingLeft: "80px"}}>&lt;Link className='link-btns' to='/contact'&gt;Contact&lt;/Link&gt;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;Routes&gt;</div>
                    <div style={{paddingLeft: "80px"}}>&lt;Route path='/home' element=&#123;&lt;Home /&gt;&#125; /&gt;</div>
                    <div style={{paddingLeft: "80px"}}>&lt;Route path='/about' element=&#123;&lt;About /&gt;&#125; /&gt;</div>
                    <div style={{paddingLeft: "80px"}}>&lt;Route path='/contact' element=&#123;&lt;Contact /&gt;&#125; /&gt;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;/Routes&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;/BrowserRouter&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>)</div>
                &#125;<br />
                 </div>

                <div>Besides 'false', possible falsy expressions are: 'null', 'NaN', '0', the empty string (""), and 'undefined'. If condition is any of these, the result of the conditional expression will be the result of executing the expression 'expressionIfFalse'.</div>
                </li>

                {/* React CSS Styling */}
                <li id="topic15"><b>React CSS Styling : </b><br></br><br></br><b>Inline Styling :</b> To style an element with the inline style attribute, the value must be a JavaScript object:<br></br>
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                &lt;h1 style=&#123;&#123;color: "red"&#125;&#125;&gt;Hello Style!&lt;/h1&gt;
                 </div>
                 <b>Note:</b> In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces &#123;&#123; &#125;&#125;.<br></br> <br />
                 <b>CamelCase Property Names:</b>
                 <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                &lt;h1 style=&#123;&#123;backgroundColor: "lightblue"&#125;&#125;&gt;Hello Style!&lt;/h1&gt;
                 </div>
                 Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax.<br /><br /> 
                 <b>JavaScript Object :</b>
                 <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                 function Header() &#123;<br /><br />
                 const myStyle = &#123;
                <div style={{paddingLeft: "30px"}}>color: "white",<br />
                backgroundColor: "DodgerBlue",<br />
                padding: "10px",<br />
                fontFamily: "Sans-Serif"</div>
                &#125;;<br /><br />
                return (<br />
                  &lt;div&gt;
                  <div style={{paddingLeft: "40px"}}>&lt;h1 style=&#123;myStyle&#125;&gt;Hello Style!&lt;/h1&gt;</div>
                  &lt;/div&gt;
                  <div style={{paddingLeft: "20px"}}>);</div>
                 &#125;
                 </div>
                 You can also create an object with styling information, and refer to it in the style attribute.<br></br> 
                </li>

                {/* React Hooks */}
                <li id="topic16"><b>React Hooks : </b><br /><br />Hooks were added to React in version 16.8.<br /><br />Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.<br /><br />You must import Hooks from react.
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                   With import :<br /><br />
                   import React, &#123; useState &#125; from 'react';<br />
                   const [count, setCount] = useState(0)<br /><br />
                   <div style={{paddingLeft: "70px"}}>OR</div><br />
                   Without import : <br /><br />
                   const [count, setCount] = React.useState(0)
                 </div>
                 <b>Hooks Rules : </b><br /><br />▪ Hooks can only be called inside React function components.<br />▪ Hooks can only be called at the top level of a component.<br />▪ Hooks cannot be conditional.<br /><br />
                 <div><b>Note :</b> Hooks will not work in React class components.</div>
                </li>

                {/* React useState Hook */}
                <li id="topic17"><b>React useState Hook : </b><br /><br />Hooks were added to React in version 16.8.<br /><br />Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.<br /><br />You must import Hooks from react.
                <div className="router-code-grey">App.js</div>
                <div style={{marginBottom: "20px"}} className="router-code-black">
                   With import :<br /><br />
                   import React, &#123; useState &#125; from 'react';<br />
                   const [count, setCount] = useState(0)<br /><br />
                   <div style={{paddingLeft: "70px"}}>OR</div><br />
                   Without import : <br /><br />
                   const [count, setCount] = React.useState(0)
                 </div>
                 <b>Hooks Rules : </b><br /><br />▪ Hooks can only be called inside React function components.<br />▪ Hooks can only be called at the top level of a component.<br />▪ Hooks cannot be conditional.<br /><br />
                 <div><b>Note :</b> Hooks will not work in React class components.</div>
                </li>
                
            </ol>
          </div>
          </div>
          </div>
    )
  }
  