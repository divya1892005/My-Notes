import React from "react";
import './App.css';


export default function ReactQuiz() {

    return(
        <div>
            <div className='topics'>
                <h1>React Quiz</h1>
                <div style={{paddingBottom: "30px"}}>

                    {/* Props vs State */}
                    <h2 className="chall-header">Props vs State : </h2>
                    <ol className='rquiz-list'>

                        {/* question 1 */}
                        <li><b>How would you describe the concept of 'state'?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>The State of a component is an object that holds some information that may change over the lifetime of the component.</p>
                        
                        {/* question 2 */}
                        <li><b>Props in React:</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>Props are used to pass data from one component to another. Data from props is read-only, and cannot be modified by a component that is receiving it from outside.</p>

                        {/* question 3 */}
                        <li><b>When would you want to use props instead of state?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>Use props to pass data & event handlers down to your child components.</p>

                        {/* question 4 */}
                        <li><b>State in React:</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>state is for managing data. State data can be modified by its own component, but is private (cannot be accessed from outside).</p>

                        {/* question 5 */}
                        <li><b>When would you want to use state instead of props?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>Use state to store the data your current page needs in your controller-view.</p>

                        {/* question 6 */}
                        <li><b>What does 'immutable' mean? Are props immutable? Is props immutable?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>Immutable means 'Unchanging'. Props are immutable. State is mutable.</p>

                        {/* question 7 */}
                        <li><b>You have 2 options for what you can pass into a state setter function. what are they?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. New State Value:</b> You can pass a new value that you want to set as the new state. It can be of any data type, such as a string, number, boolean, object, or array.

                        <br></br><br></br>setCount(count + 1)<br></br><br></br>

                        <b>Updater Function:</b> Instead of directly passing a new state value, you can provide an updater function. This function receives the previous state as its argument and returns the new state value. Using an updater function is useful when the new state depends on the previous state. It ensures that the state update is based on the most recent state value and prevents potential issues with asynchronous updates.<br></br><br></br>

                        setCount(prevCount =&gt; prevCount + 1)</p>

                    </ol>

                    {/* conditional rendering */}
                    <h2 className="chall-header">Conditional Rendering : </h2>
                    <ol className='rquiz-list'>

                        {/* question 1 */}
                        <li><b>What is 'Conditional rendering'?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>In React, conditional rendering is the process of displaying different content based on certain conditions or states. In this process, you can use conditional statements to decide what content should be rendered.</p>
                        
                        {/* question 2 */}
                        <li><b>When would you use &&?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>when you want to either display or not display use '&&' operator.</p>

                        {/* question 3 */}
                        <li><b>When would you use a 'Ternery' operator?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>when you want to choose between one of two things to display use 'Ternery' operator.</p>

                        {/* question 4 */}
                        <li><b>What if you need to decide between &gt; 2 options on what to display?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>Use 'If statement' or 'Switch statement'.</p>
                    </ol>

                    {/* React Forms */}
                    <h2 className="chall-header">React Forms : </h2>
                    <ol className='rquiz-list'>

                        {/* question 1 */}
                        <li><b>In a React app, when do you gather all the data from the filled-out form?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>We gather all the data as the form filled out. Of course the data is all held in local state.</p>
                        
                        {/* question 2 */}
                        <li><b>Which attribute in the form elements (value, name, onChange, etc.) should match the property name being held in state for that input?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>'name' property. Essentially we use the 'name' property to help us in our onChange so that we know which property in state to update whenever a change happens.</p>

                        {/* question 3 */}
                        <li><b>What's different about saving the data from a checkbox element vs. other form element?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>A checkbox uses the 'checked' property to determine what should be saved in state. Other form elements uses the 'value' property instead.</p>

                        {/* question 4 */}
                        <li><b>How do you watch for a form submit? How do you trigger a form submit?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>Add an onSubmit handler on the 'form' element and we'll pass a function to that element and run whenever the form is submitted. We can trigger that using some kind of button click. in the markup we have a button element inside of a form element it will automatically work as a submit button of that form.</p>
                    </ol>

                    {/* React Forms */}
                    <h2 className="chall-header">UseEffect : </h2>
                    <ol className='rquiz-list'>

                        {/* question 1 */}
                        <li><b>What is a 'side Effect' in React. write some examples?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>A React side-effect occurs when we use something that is outside the scope of React in our React components. Some examples are LocalStorage, API, Websocket subscriptions and another example is whenever you have two states that you want to keep in sync with each other.</p>
                        
                        {/* question 2 */}
                        <li><b>What is not a 'side Effect' in React. write some examples?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>Anything that react is in charge of it. Some examples, rendering UI, updating State, handling props, rendering DOM elements.</p>

                        {/* question 3 */}
                        <li><b>When does react run you useEffect function. when was it doesn't run your useEffect function?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>If the useEffect hook has an empty dependency array ([]) specified, it runs only once.</p>

                        {/* question 4 */}
                        <li><b>How would you explain what the 'dependencies array' is?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b></p>
                    </ol>
                    
                </div>
            </div>
        </div> 
    )
}