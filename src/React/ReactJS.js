import React from 'react';
import './App.css';
import AvatarPerson from './Assets/Avatar Person.png';
import img1 from './Assets/filledStar.png';
import img2 from './Assets/emptyStar.png';
import BoxData from './boxData';
import { Link } from 'react-scroll';


export default function Coding() {

  // React froms

  const [form, setForm] = React.useState({
    email : "",
    password : "",
    confirmPassword : "",
    joining : false
  })

  function formtoggle(event) {
    const {name, value, type, checked} = event.target
    setForm(prevForm => {
      return {
        ...prevForm,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }

 function handleSubmit(event) {
  event.preventDefault()
  if(form.password === form.confirmPassword) {
    alert("Successfully Signed up")
  } else {
    alert("Passwords do not match")
  }
 }


  // async and await

  const [starW, setStarW] = React.useState({})
    const [counting, setCounting] = React.useState(1)

    React.useEffect(() => {
        
        async function fetchData() {
            console.log("async")
            try {
              const response = await fetch(`https://swapi.dev/api/people/${counting}`);
              const data = await response.json();
              setStarW(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
      
          fetchData();
        }, [counting]);


  // useEffect cleanup function

  const [show, setShow] = React.useState(false)

  function windowtoggle() {
    setShow(prevShow => !prevShow)
  }


  // useEffect - when to use dependencies array

  const [starWarsData, setStarWarsData] = React.useState({})
  const [counter, setCounter] = React.useState(1)

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${counter}`)
    .then(res => res.json())
    .then(data => setStarWarsData(data))
  }, [counter])

  // if Statement conditional rendering

  const date = new Date();
    const hours = date.getHours();
    let TimeOfDay;

    if (hours < 12) {
        TimeOfDay = "Good Morning"
    } else if (hours >= 12 && hours < 17) {
        TimeOfDay = "Good Afternoon"
    } else {
        TimeOfDay = "Good night"
    }


  // conditional rendering logical operator (&&)
  
  const [isShown, setIsShown] = React.useState(false)

    function joketoggle() {
        console.log(isShown)
        setIsShown(prevbtn => !prevbtn)
    }

  const [isResult] = React.useState("Hello World!")
  

  // counter practice Q.no.20

  const [count, setCount] = React.useState(0)

  function add() {
    setCount(prevCount => prevCount + 1)
  }

  function subtract() {
    setCount(count - 1)
  }

  // isGoingOut 

  const [isGoingOut, setIsGoingOut] = React.useState(true)

  function handleClick() {
    setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
  }

  // Add Items to the button when button is Clicked using arrays in state

  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

  function addItem() {
    setThingsArray(prevThingsArray => {
      return [...prevThingsArray, `Thing ${thingsArray.length + 1}`]
    })
  }

  const Elements = thingsArray.map(clicked => <p key={clicked}>{clicked}</p>)

  // object in states and updating objects in state

  const [contact, setContact] = React.useState({
    firstName : "John",
    lastName : "Doe",
    Phone : "+1 (719) 522-3456",
    email : "doejohn547@gmail.com",
    isfavorite : true
})

function toggle() {
  setContact(prevContact => {
    return {
      firstName : prevContact.firstName,
      lastName : prevContact.lastName,
      Phone : prevContact.Phone,
      email : prevContact.email,
      isfavorite : !prevContact.isfavorite
    }
  })
}

  //  Dynamic styles in boxes challenge

  const [square, setSquare] = React.useState(BoxData);

  const boxElements = square.map(box => {
    const style = {
      backgroundColor: box.on ? "rgb(4, 4, 54)" : "transparent"
    };

    return (
      <div style={style} className='box' key={box.id}></div>
    );
  });



    return(
      <div>
        <div className='topics'>
          <h1>React (C.W)</h1>
          {/* Projects */}
          <div style={{paddingBottom: "30px"}}>
          <h2>Projects:</h2>
          <ol className='first-order-list'>
            <li><b>First Project - </b> Fun Facts About React</li>
            <li><b>Second Project - </b> Digital Bussiness Card</li>
            <li><b>Third Project - </b> Airbnb</li>
            <li><b>Fourth Project - </b> Travel Journal</li>
            <li><b>Fifth Project - </b> Meme Generator</li>
            <li><b>Sixth Project - </b> Markdown Notes</li>
            <li><b>Seventh Project - </b> Tenzies Game</li>
          </ol>
          </div>

          <div style={{padding: "20px 0px"}}>
          <h2>Topics:</h2>
          <ol className='w3-order-list'>
            <li><Link className='w3-link' activeClass="active" to="topic0" spy={true} smooth={true} offset={-70} duration={500}>VanillaJs or ReactJS</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic1" spy={true} smooth={true} offset={-70} duration={500}>ReactDOM</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic2" spy={true} smooth={true} offset={-70} duration={500}>Function Component</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic3" spy={true} smooth={true} offset={-70} duration={500}>Two Function Components In Single File</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic4" spy={true} smooth={true} offset={-70} duration={500}>Two / More Function Components In Single File</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic5" spy={true} smooth={true} offset={-70} duration={500}>Importing images from the local project</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic6" spy={true} smooth={true} offset={-70} duration={500}>Using the img tag with a static URL</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic7" spy={true} smooth={true} offset={-70} duration={500}>Using dynamic URLs with JavaScript expressions</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic8" spy={true} smooth={true} offset={-70} duration={500}>Importing images from the public folder in a Local project</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic9" spy={true} smooth={true} offset={-70} duration={500}>Importing images from the src folder in a Local project</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic10" spy={true} smooth={true} offset={-70} duration={500}>Importing Audios from the local project</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic11" spy={true} smooth={true} offset={-70} duration={500}>Importing Videos from the local project</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic12" spy={true} smooth={true} offset={-70} duration={500}>Inline CSS</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic13" spy={true} smooth={true} offset={-70} duration={500}>Inserting JS expressions in JSX</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic14" spy={true} smooth={true} offset={-70} duration={500}>Rendering multiple instances of the same function component by using 'props'</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic15" spy={true} smooth={true} offset={-70} duration={500}>Rendering multiple instances of the same function component by using 'props' and 'map'</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic16" spy={true} smooth={true} offset={-70} duration={500}>Destructuring Nested Objects in React</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic17" spy={true} smooth={true} offset={-70} duration={500}>Destructuring Arrays within Objects in React</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic18" spy={true} smooth={true} offset={-70} duration={500}>Get random numbers in React</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic19" spy={true} smooth={true} offset={-70} duration={500}>React useSate Hook:</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic20" spy={true} smooth={true} offset={-70} duration={500}>Changing State:</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic21" spy={true} smooth={true} offset={-70} duration={500}>Changing State With a Callback Function</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic22" spy={true} smooth={true} offset={-70} duration={500}>Flliping State Back and Forth</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic23" spy={true} smooth={true} offset={-70} duration={500}>Arrays in State</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic24" spy={true} smooth={true} offset={-70} duration={500}>Objects in State and updating object in state</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic25" spy={true} smooth={true} offset={-70} duration={500}>Setting State From Child Component</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic26" spy={true} smooth={true} offset={-70} duration={500}>Dynamic styles in boxes challenge</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic27" spy={true} smooth={true} offset={-70} duration={500}>Conditional rendering</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic28" spy={true} smooth={true} offset={-70} duration={500}>React Forms</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic29" spy={true} smooth={true} offset={-70} duration={500}>Making API Calls in React</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic30" spy={true} smooth={true} offset={-70} duration={500}>useEffect</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic31" spy={true} smooth={true} offset={-70} duration={500}>useEffect dependencies array</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic32" spy={true} smooth={true} offset={-70} duration={500}>useEffect - when to use dependencies array</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic33" spy={true} smooth={true} offset={-70} duration={500}>useEffect CleanUp Function</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic34" spy={true} smooth={true} offset={-70} duration={500}>useEffect - async and await</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic35" spy={true} smooth={true} offset={-70} duration={500}>Class Component</Link></li>
          </ol>
          </div>
  
          {/* Class Notes */}
          <div style={{paddingBottom: "30px"}}>
            <h2>Class Notes:</h2>
  
            <ol className='second-order-list'>
              {/* VanillaJs or ReactJS */}
              <li id='topic0' style={{paddingTop: "20px"}}><b>VanillaJs or ReactJS : </b>
                <div className='code'>
                  <div className="router-code-grey">index.js</div>
                  <div className="router-code-black">
                  <div style={{paddingTop: "10px"}}>Const h1 = document.createElement("h1/p/li/...")</div>
                  <div>h1.textContent = "Hello World!"</div>
                  <div>h1.className = "header"</div>
                  <div>document.getElementById("root").append(h1)</div>
                  </div> 
                  <div className='p3'>VanillaJs is Imperative. Imperative means we have to explain the steps and tell it exactly how to make something, like creating an element.</div>

                  <div className="router-code-grey">index.js</div>
                  <div className="router-code-black">
                  <div style={{paddingTop: "10px"}}>ReactDOM.createRoot(document.getElementById('root')).render(&lt;h1 className = "header"&gt;Hello World!&lt;/ h1&gt;)</div>
                  </div>
                  <div className='p3'>ReactJs is declarative. Declarative means we have to tell what should be done, and it handles the process of figuring out how to make it happen.</div>
                </div>
              </li>

              {/* ReactDom */}
              <li id='topic1'><b>ReactDOM:</b>
                <div className='code'>
                  <div className="router-code-grey">index.js</div>
                  <div className="router-code-black">
                  <div>import ReactDOM from 'react-dom';</div>
                  <div>import App from './App';</div>
                  <div style={{paddingTop: "10px"}}>ReactDOM.createRoot(document.getElementById('root')).render(&lt;App /&gt;)</div>
                  </div>
                  
                  <div className='p3'>ReactDOM is used to render components and elements on the web.<br></br>App is the name of the function component.</div>
                </div>  
              </li>
  
              {/* Function Component */}
              <li id='topic2'><b>Function Component:</b>
                <div className='code'>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  
                  <div className='project--bg'>
                    <h4>Hello World</h4>
                  </div>
                  <div className='p3'>We need to 'import' React from "react" because JSX(JavaScript XML) allows us to write HTML in React. So, in order to use JSX syntax, we need to import the React. JSX expressions must have one parent element in React.</div>
                  <div style={{paddingTop: "20px"}}><b>Without Export:</b></div>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div style={{paddingTop: "10px"}}>function App() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                   <div className='p3'>Without export we can import it as </div>
                   <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import <mark>&#123; App &#125;</mark> from './App';</div>
                  <div style={{paddingTop: "10px"}}>ReactDOM.createRoot(document.getElementById('root').render(&lt;App /&gt;))</div>
                  </div>
                </div>
              </li>
  
              {/* Two Function Components In Single File: */}
              <li id='topic3'><b>Two Function Components In Single File:</b>
                <div className='code'>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
  
                  <div style={{paddingTop: "10px"}}>function Navbar() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;Hello Navbar&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  
  
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}><mark>&lt;Navbar /&gt;</mark></div>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='project--bg'>
                    <h4>Hello Navbar</h4>
                    <h4>Hello World</h4>
                  </div>
                  <div className='p3'>The function component names need to be rendered like this &lt;FunctionName /&gt; within the App component.</div>
                </div>
              </li>
  
              {/* Two / More Function Components In Single File: */}
              <li id='topic4'><b>Two / More Function Components In Single File:</b>
                <div className='code'>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
  
                  <div style={{paddingTop: "10px"}}>function Navbar() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;Hello Navbar&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  
  
                  <div style={{paddingTop: "10px"}}>function MainContent() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;Hello MainContent&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  
  
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}><mark>&lt;Navbar /&gt;</mark></div>
                    <div style={{paddingLeft: "30px"}}><mark>&lt;MainContent /&gt;</mark></div>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='project--bg'>
                    <h4>Hello Navbar</h4>
                    <h4>Hello MainContent</h4>
                    <h4>Hello World</h4>
                  </div>
                  <div className='p3'>The function component names need to be rendered like this &lt;FunctionName /&gt; within the App component.</div>
                </div>
              </li>
              
              {/* Importing images from the local project: */}
              <li id='topic5'><b>Importing images from the local project:</b>
                <div className='code'>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import <mark>Img1</mark> from './Assets/girl image.png';</div>
  
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;<mark>Img1</mark>&#125; alt="girl pics" width="100" height="100" /&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='p3'>When importing images in React, it is necessary to create an "Assets" folder within the "src" folder and use the exact names while importing. As indicated in the previous code snippet, the names should be accurately specified during the import process.</div>
                </div>
              </li>
  
              {/* Using the img tag with a static URL: */}
              <li id='topic6'><b>Using the img tag with a static URL:</b>
                <div className='code'>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
  
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;'https://cute-puppy-images.jpg'&#125; alt="girl pics" width="100" height="100" /&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='p3'>We get static URLs from web browsers.</div>
                </div>
              </li>
  
              {/* Using dynamic URLs with JavaScript expressions: */}
              <li id='topic7'><b>Using dynamic URLs with JavaScript expressions:</b>
                <div className='code'>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
  
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div className='const'>
                  <div>const imageName = "<mark>cute-ai-generated-cartoon-bunny_23-2150288877.jpg</mark>";</div>
                  <div>const imageUrl = `<mark>https://img.freepik.com/free-photo/</mark>images/$&#123;imageName&#125;`;</div>
                  </div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;imageUrl&#125; alt="Description" /&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='p3'>This is the complete link - https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288877.jpg </div>
                </div>
              </li>
              
  
              {/* Importing images from the public folder in a Local project: */}
              <li id='topic8'><b>Importing images from the public folder in a Local project:</b>
                <div className='code'>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
  
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;process.env.PUBLIC_URL + '/Assets/logo.png'&#125; alt="Example Image" /&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='p3'>when referencing images from the "public" folder, we use the relative path directly in your code. </div>
                </div>
              </li>
  
              {/* Importing images from the src folder in a Local project: */}
              <li id='topic9'><b>Importing images from the src folder in a Local project:</b>
                <div className='code'>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import Img1 from './Assets/girl image.png';</div>
  
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;Img1&#125; alt="Example Image" /&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='p3'>when importing images from the "src" folder, we use the import statement. </div>
                </div>
              </li>
  
              {/* Importing Audios from the local project: */}
              <li id='topic10'><b>Importing Audios from the local project:</b>
                <div className='code'>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import <mark>AudioFile</mark> from './Audios/Realxing music.mp3';</div>
  
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;audio controls&gt;</div>
                    <div  style={{paddingLeft:"50px"}}>&lt;source src=&#123;AudioFile&#125; type='audio/ogg' /&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;/audio&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='p3'>When importing Audios in React, it is necessary to create an "Audios" folder within the "src" folder and use the exact names while importing. As indicated in the previous code snippet, the names should be accurately specified during the import process.</div>
                </div>
              </li>
  
              {/* Importing Videos from the local project: */}
              <li id='topic11'><b>Importing Videos from the local project:</b>
                <div className='code'>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import <mark>VideoFile</mark> from './Blossoms Video.mp4';</div>
  
                  <div style={{paddingTop: "10px"}}>export default function App() &#123; </div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;video controls&gt;</div>
                    <div  style={{paddingLeft:"50px"}}>&lt;source src=&#123;VideoFile&#125; type='video/mp4' /&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;/video&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='p3'>When importing Videos in React, it is necessary to create an "Videos" folder within the "src" folder and use the exact names while importing. As indicated in the previous code snippet, the names should be accurately specified during the import process.</div>
                </div>
              </li>
  
              {/* Inline CSS: */}
              <li id='topic12'><b>Inline CSS:</b>
                <div className='code'>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
  
                  <div style={{paddingTop: "10px"}}>export default function App() &#123; </div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;p style=&#123;&#123;paddingLeft : "20px"&#125;&#125;&gt;Hello World!&lt;/p&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='p3'>Ensure that the 'padding-left' property is written correctly in camelCase format within the inline style declaration. In JSX, CSS properties are typically written using camelCase, so 'padding-left' should be written as paddingLeft.</div>
                </div>
              </li>

              {/* Inserting JS expressions in JSX: */}
              <li id='topic13'><b>Inserting JS expressions in JSX:</b>
                <div className='code'>
                <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
  
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div>const firstName = "john";</div>
                  <div>const lastName = "Doe";</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;Hello &#123;firstName&#125; &#123;lastName&#125;!&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='project--bg'>
                    <h4>Hello John Doe!</h4>
                  </div>
                  <div className='p3'>In JSX </div>
                </div>
              </li>


              {/* 'Rendering multiple instances of the same function component by using props: */}
              <li id='topic14'><b>Rendering multiple instances of the same function component by using 'props':</b>
                  <div style={{paddingTop: "20px"}}><mark>open react-five app to see the example</mark></div>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import RedHeartImage from './Assets/RedHeart.jpg';</div>
                  <div>import YellowHeartImage from './Assets/YellowHeart.jpg';</div>
                  <div>import GreenHeartImage from './Assets/GreenHeart.jpg';</div>
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div className='SmileEmojis'>
                    <div style={{paddingLeft: "30px"}}>&lt;Navbar <br></br> img1=&#123;RedHeartImage&#125;<br></br>img2=&#123;YellowHeartImage&#125;<br></br>img3=&#123;GreenHeartImage&#125; <br></br>/&gt;</div>
                    <div style={{marginLeft: "60px",padding: "30px", border: "2px solid white"}}>💖💛💚</div>
                    </div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  </div>

                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import RedHeartImage from './Assets/RedHeart.jpg';</div>
                  <div>import YellowHeartImage from './Assets/YellowHeart.jpg';</div>
                  <div>import GreenHeartImage from './Assets/GreenHeart.jpg';</div>
                  <div>import SmileEmoji from './Assets/SmileEmoji.jpg';</div>
                  <div>import AngryEmoji from './Assets/AngryEmoji.jpg';</div>
                  <div>import CryEmoji from './Assets/CryEmoji.jpg';</div>
                  <div>import RedCar from './Assets/RedCar.jpg';</div>
                  <div>import YellowCar from './Assets/YellowCar.jpg';</div>
                  <div>import GreenCar from './Assets/GreenCar.jpg';</div>
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div className='SmileEmojis'>
                    <div style={{paddingLeft: "30px"}}>&lt;Navbar <br></br> img1=&#123;RedHeartImage&#125;<br></br>img2=&#123;YellowHeartImage&#125;<br></br>img3=&#123;GreenHeartImage&#125; <br></br>/&gt;</div>
                    <div style={{marginLeft: "60px",padding: "30px", border: "2px solid white"}}>
                    <div>💖💛💚</div>
                    <div>😃🤬😥</div>
                    <div>🚗🚕🚙</div>
                    </div>
                    </div>  
                    <div style={{paddingLeft: "30px"}}>&lt;Navbar <br></br> img1=&#123;SmileEmoji&#125;<br></br>img2=&#123;AngryEmoji&#125;<br></br>img3=&#123;CryEmoji&#125; <br></br>/&gt;</div>  
                    <div style={{paddingLeft: "30px"}}>&lt;Navbar <br></br> img1=&#123;RedCar&#125;<br></br>img2=&#123;YellowCar&#125;<br></br>img3=&#123;GreenCar&#125; <br></br>/&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  </div>

                  <div className='code'>
                  <div className="router-code-grey">Navbar.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div style={{paddingTop: "10px"}}>export default function Navbar(props) &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;props.img1&#125; alt = "Emoji" /&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;props.img2&#125; alt = "Emoji" /&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;props.img3&#125; alt = "Emoji" /&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='p3'>When rendering multiple instances of the same function component, each instance operates independently and has its own state and props. Therefore, you can change the values passed as props to each instance, allowing you to customize and update the content displayed by each component.</div>
                </div>
              </li>

              {/* 'Rendering multiple instances of the same function component by using props and map: */}
              <li id='topic15'><b>Rendering multiple instances of the same function component by using 'props' and 'map':</b>
                  <div style={{paddingTop: "20px"}}><mark>open react-seven app to see the example</mark></div>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div className='const'>
                  <div>const Elements = Data.map&#40; item =&gt; &#123;</div><br></br>
                  <div>return &#40;</div>
                  <div style={{paddingLeft: "30px"}}><mark>&lt;Navbar <br></br> img1=&#123;item.img1&#125;<br></br>img2=&#123;item.img2&#125;<br></br>img3=&#123;item.img3&#125; <br></br>/&gt;</mark></div>
                  <div style={{paddingLeft: "60px", fontSize: "30px"}}>OR</div><br></br>
                  <div style={{paddingLeft: "40px"}}><mark>&#123;...item&#125;</mark></div>
                  <div style={{paddingLeft: "20px"}}>&#41;</div>
                  <div style={{paddingLeft: "10px"}}>&#125;</div>
                  <div>&#41;</div>
                  </div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div className='SmileEmojis'>
                    <div style={{paddingLeft: "30px"}}>&#123;Elements&#125;</div>
                    <div style={{marginLeft: "60px",padding: "30px", border: "2px solid white"}}>
                    <div>💖💛💚</div>
                    <div>😃🤬😥</div>
                    <div>🚗🚕🚙</div>
                    </div>
                    </div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&#123;Elements&#125;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&#123;Elements&#125;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>

                  <div className="router-code-grey">Data.js</div>
                  <div className="router-code-black">
                  <div className='code'>
                  <div>import RedHeartImage from './Assets/RedHeart.jpg';</div>
                  <div>import YellowHeartImage from './Assets/YellowHeart.jpg';</div>
                  <div>import GreenHeartImage from './Assets/GreenHeart.jpg';</div>
                  <div>import SmileEmoji from './Assets/SmileEmoji.jpg';</div>
                  <div>import AngryEmoji from './Assets/AngryEmoji.jpg';</div>
                  <div>import CryEmoji from './Assets/CryEmoji.jpg';</div>
                  <div>import RedCar from './Assets/RedCar.jpg';</div>
                  <div>import YellowCar from './Assets/YellowCar.jpg';</div>
                  <div>import GreenCar from './Assets/GreenCar.jpg';</div>
                  <div style={{paddingTop: "10px"}}>export default &#91; </div>
                    <div className='SmileEmojis'>
                    <div style={{paddingLeft: "30px"}}>&#123; <br></br> img1: RedHeartImage,<br></br>img2: YellowHeartImage,<br></br>img3: GreenHeartImage, <br></br>&#125;</div>
                    <div style={{border: "2px solid white", padding: "30px", marginLeft: "40px"}}>const Data = [<br></br>&#123;....&#125;,<br></br>&#123;....&#125;<br></br>]<br></br>export default Data;</div>
                    </div>
                    <div className='SmileEmojis'>
                    <div style={{paddingLeft: "30px"}}>&#123; <br></br> img1: SmileEmoji<br></br>img2: AngryEmoji<br></br>img3: CryEmoji <br></br>&#125;</div>
                    </div>
                    <div className='SmileEmojis'>
                    <div style={{paddingLeft: "30px"}}>&#123; <br></br> img1: RedCar<br></br>img2: YellowCar<br></br>img3: GreenCar <br></br>&#125;</div>
                    </div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  </div>

                  <div className="router-code-grey">Navbar.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div style={{paddingTop: "10px"}}>export default function Navbar(props) &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;props.img1&#125; alt = "Emoji" /&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;props.img2&#125; alt = "Emoji" /&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;props.img3&#125; alt = "Emoji" /&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='p3'>To render multiple instances of the same function component by using props and the map method, we have to define a data object in the Data.js file which we added to the src folder, add the data to the object, and then import it in App.js file and use the map method.</div>
                  </div>
              </li>

              {/* Destructuring Nested Objects in React: */}
              <li id='topic16'><b>Destructuring Nested Objects in React:</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import Data from './Data';</div>
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div className='const'>
                  <div>const Elements = Data.map&#40; item =&gt; &#123;</div><br></br>
                  <div>return &#40;</div>
                  <div style={{paddingLeft: "30px"}}><mark>&lt;Navbar <br></br> Heading=&#123;item.heading&#125;<br></br>Paragraph=&#123;item.paragraph&#125;<br></br>City=&#123;item.address.city&#125;<br></br>State=&#123;item.address.state&#125;<br></br>Logo=&#123;item.logo&#125; <br></br>/&gt;</mark></div>
                  <div style={{paddingLeft: "60px", fontSize: "30px"}}>OR</div><br></br>
                  <div style={{paddingLeft: "40px"}}><mark>&#123;...item&#125;</mark></div>
                  <div style={{paddingLeft: "20px"}}>&#41;</div>
                  <div style={{paddingLeft: "10px"}}>&#125;</div>
                  <div>&#41;</div>
                  </div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div className='SmileEmojis'>
                    <div style={{paddingLeft: "30px"}}>&#123;Elements&#125;</div>
                    <div style={{marginLeft: "60px",padding: "30px", border: "2px solid white"}}>
                    <div>Hello World</div>
                    <div>This is a Paragraph</div>
                    <div>Guntur</div>
                    <div>Andhra Pradesh</div>
                    <div>💖</div>
                    </div>
                    </div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>

                  <div className="router-code-grey">Data.js</div>
                  <div className="router-code-black">
                  <div>import Emoji from './Asses/Emoji.jpg'</div>
                  <div style={{paddingTop: "10px"}}>export default &#91; </div> 
                    <div style={{paddingLeft: "30px"}}>&#123; <br></br> heading: "Hello World"<br></br>paragraph: "This is a Paragraph"<br></br>address: &#123;<div style={{paddingLeft: "30px"}}>city: "Guntur"</div><div style={{paddingLeft: "30px"}}>state: "Andhra Pradesh"</div>&#125;<br></br>logo: Emoji, <br></br>&#125;</div>
                    <div>&#93;;</div>
                  
                  <div style={{fontSize: "30px", padding: "20px 40px"}}>OR</div>
                  <div style={{paddingTop: "10px"}}>const Data =  &#91; </div> 
                  <div style={{paddingLeft: "30px"}}>&#123; <br></br> heading: "Hello World"<br></br>paragraph: "This is a Paragraph"<br></br>address: &#123;<div style={{paddingLeft: "30px"}}>city: "Guntur"</div><div style={{paddingLeft: "30px"}}>state: "Andhra Pradesh"</div>&#125;<br></br>logo: Emoji, <br></br>&#125;</div>
                    <div>&#93;;</div>
                    <div>export default Data;</div>
                    </div>

                  <div className="router-code-grey">Navbar.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div style={{paddingTop: "10px"}}>export default function Navbar(props) &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;&#123;props.heading&#125;&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;p&gt;&#123;props.paragraph&#125;&lt;/p&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h3&gt;&#123;props.address.city&#125;&lt;/h3&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h3&gt;&#123;props.address.state&#125;&lt;/h3&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;props.Emoji&#125; alt = "Emoji" /&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                    <div>&#125; </div>
                  </div>
                  <div className='p3'>In the example above, we extract the city, and state properties from the user object using destructuring. </div>
                </div>
              </li>

              {/* Destructuring Arrays within Objects in React: */}
              <li id='topic17'><b>Destructuring Arrays within Objects in React:</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import Data from './Data';</div>
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div className='const'>
                  <div>const Elements = Data.map&#40; item =&gt; &#123;</div><br></br>
                  <div>return &#40;</div>
                  <div style={{paddingLeft: "30px"}}><mark>&lt;Navbar <br></br> Heading=&#123;item.heading&#125;<br></br>Paragraph=&#123;item.paragraph&#125;<br></br>City=&#123;item.city&#125;<br></br>State=&#123;item.state&#125;<br></br>Logo=&#123;item.logo&#125; <br></br>/&gt;</mark></div>
                  <div style={{paddingLeft: "60px", fontSize: "30px"}}>OR</div><br></br>
                  <div style={{paddingLeft: "40px"}}><mark>&#123;...item&#125;</mark></div>
                  <div style={{paddingLeft: "20px"}}>&#41;</div>
                  <div style={{paddingLeft: "10px"}}>&#125;</div>
                  <div>&#41;</div>
                  </div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div className='SmileEmojis'>
                    <div style={{paddingLeft: "30px"}}>&#123;Elements&#125;</div>
                    <div style={{marginLeft: "60px",padding: "30px", border: "2px solid white"}}>
                    <div>Hello World</div>
                    <div>This is a Paragraph</div>
                    <div>Guntur</div>
                    <div>Andhra Pradesh</div>
                    <div>💖</div>
                    </div>
                    </div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>

                  <div className="router-code-grey">Data.js</div>
                  <div className="router-code-black">
                  <div>import Emoji from './Asses/Emoji.jpg'</div>
                  <div style={{paddingTop: "10px"}}>export default &#91; </div> 
                  <div style={{paddingLeft: "30px"}}>&#123; <br></br> heading: "Hello World"<br></br>paragraph: "This is a Paragraph"<br></br>city: "Guntur"<br></br>state: "Andhra Pradesh"<br></br>logo: Emoji, <br></br>&#125;</div>
                    <div>&#93;;</div>
                  
                  <div style={{fontSize: "30px", padding: "20px 40px"}}>OR</div>
                  <div style={{paddingTop: "10px"}}>const Data =  &#91;  </div>
                  <div style={{paddingLeft: "30px"}}>&#123; <br></br> heading: "Hello World"<br></br>paragraph: "This is a Paragraph"<br></br>city: "Guntur"<br></br>state: "Andhra Pradesh"<br></br>logo: Emoji, <br></br>&#125;</div>
                    <div>&#93;;</div>
                    <div>export default Data;</div>
                  </div>

                  <div className="router-code-grey">Navbar.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div style={{paddingTop: "10px"}}>export default function App(props) &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;&#123;props.heading&#125;&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;p&gt;&#123;props.paragraph&#125;&lt;/p&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h3&gt;&#123;props.address.city&#125;&lt;/h3&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h3&gt;&#123;props.address.state&#125;&lt;/h3&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;props.Emoji&#125; alt = "Emoji" /&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  <div className='p3'>In the example above, we extract the city, and state properties from the user object using destructuring. </div>
                </div>
              </li>

              {/* Get random numbers in React: */}
              <li id='topic18'><b>Get random numbers in React:</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import memesData from './memesData.js';</div>
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingTop: "10px"}}>function getrandomNumber() &#123;</div>
                  <div className='const'>
                  <div><mark>const memesArray = memesData.data.memes</mark></div>
                  <div><mark>const randomNumber = Math.floor(Math.random() * memesArray.length)</mark></div>
                  <div><mark>console.log(randomNumber)</mark></div>
                  <div>&#125; </div>
                  </div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;form&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;button type="button" onClick=&#123;getrandomNumber&#125;&gt;&lt;/button&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/form&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div>&#41;</div>
                  <div>&#125; </div>
                  </div>

                  <div className="router-code-grey">Data.js</div>
                  <div className="router-code-black">
                  <div style={{paddingTop: "10px"}}>export default &#123;   </div>
                    <div style={{paddingLeft: "20px"}}>"success" : true,</div>
                    <div style={{paddingLeft: "20px"}}>"data" : &#123;</div>
                    <div style={{paddingLeft: "40px"}}>"memes" : &#91;</div>
                    <div style={{paddingLeft: "60px"}}>&#123;</div>
                    <div style={{paddingLeft: "70px"}}>"id" : "10101010",</div>
                    <div style={{paddingLeft: "70px"}}>"name" : "Image 1",</div>
                    <div style={{paddingLeft: "70px"}}>"url" : "https://www.pexels.com/photo/two-yellow-emoji-on-yellow-case-207983/" ,</div>
                    <div style={{paddingLeft: "70px"}}>"width" : 900,</div>
                    <div style={{paddingLeft: "70px"}}>"height" : 900,</div>
                    <div style={{paddingLeft: "70px"}}>"box_count" : 2,</div>
                    <div style={{paddingLeft: "60px"}}>&#125;,</div>
                    <div style={{paddingLeft: "60px"}}>&#123;</div>
                    <div style={{paddingLeft: "70px"}}>"id" : "20202020",</div>
                    <div style={{paddingLeft: "70px"}}>"name" : "Image 2",</div>
                    <div style={{paddingLeft: "70px"}}>"url" : "https://www.pexels.com/photo/two-yellow-emoji-on-yellow-case-207983/" ,</div>
                    <div style={{paddingLeft: "70px"}}>"width" : 1200,</div>
                    <div style={{paddingLeft: "70px"}}>"height" : 1200,</div>
                    <div style={{paddingLeft: "70px"}}>"box_count" : 3,</div>
                    <div style={{paddingLeft: "60px"}}>&#125;,</div>
                    <div style={{paddingLeft: "60px"}}>&#123;</div>
                    <div style={{paddingLeft: "70px"}}>"id" : "30303030",</div>
                    <div style={{paddingLeft: "70px"}}>"name" : "Image 3",</div>
                    <div style={{paddingLeft: "70px"}}>"url" : "https://www.pexels.com/photo/two-yellow-emoji-on-yellow-case-207983/" ,</div>
                    <div style={{paddingLeft: "70px"}}>"width" : 1000,</div>
                    <div style={{paddingLeft: "70px"}}>"height" : 1000,</div>
                    <div style={{paddingLeft: "70px"}}>"box_count" : 4,</div>
                    <div style={{paddingLeft: "60px"}}>&#125;</div>
                    <div style={{paddingLeft: "40px"}}>&#93;</div>
                    <div style={{paddingLeft: "20px"}}>&#125;</div>
                    <div>&#125;</div>
                  </div>
                  <div className='p3'>When adding a button tag inside the form tag, it is necessary to include the attribute type='button' for the button tag, Otherwise errors will occur.</div>
                  </div>
              </li>

              {/* React useSate Hook: */}
              <li id='topic19'><b>React useSate Hook:</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import memesData from './memesData.js';</div>
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>const [isResult, func] = React.useState("Hello World!")</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;h1&gt;&#123;isResult&#125;&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div style={{paddingBottom: "20px"}}>&#125; </div>
                  <div  style={{display: "flex"}}>
                  <div style={{paddingLeft: "20px"}}><b>OR</b></div>
                  <div style={{marginLeft: "400px", padding: "20px", border: "2px solid white"}}><b>{isResult}</b></div>
                  </div>
                  <div className='code'>
                  <div>import React, &#123; useState &#125; from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import memesData from './memesData.js';</div>
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>const [isResult, func] = useState("Hello World!")</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div> 
                    <div style={{paddingLeft: "20px"}}>&lt;h1&gt;&#123;isResult&#125;&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div>&#125; </div>
                  </div>
                  </div>
                  </div>
              </li>

              {/* Changing State: */}
              <li id='topic20'><b>Changing State:</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import memesData from './memesData.js';</div>
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>const [count, setCount] = React.useState(0)</div>
                  <div style={{paddingTop: "20px"}}>function add&#123;</div>
                  <div style={{paddingLeft: "20px"}}>setCount (count + 1)</div>
                  <div>&#125;</div>
                  <div style={{paddingTop: "20px"}}>function subtract&#123;</div>
                  <div style={{paddingLeft: "20px"}}>setCount (count - 1)</div>
                  <div>&#125;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;button&gt;&#123;count&#125;&lt;/button&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;button onClick = &#123;add&#125;&gt;+&lt;/button&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;button onClick = &#123;subtract&#125;&gt;-&lt;/button&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div style={{paddingBottom: "20px"}}>&#125; </div>
                  
                  </div>
                  <div className='project--bg'>
                  <div className='counter--practice'>
                  <div className='yes-circle'>
                  <div>{count}</div>
                  </div>
                  </div>
                  
                  <div className='counter-practice-plus-minus'>
                  <button onClick={subtract} className='counter--minus'><div>-</div></button>
                  <button onClick={add} className='counter--plus'><div>+</div></button>
                  </div> 
                  </div>
                  </div>   
              </li>

              {/* Changing State With a Callback Function: */}
              <li id='topic21'><b>Changing State With a Callback Function:</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import memesData from './memesData.js';</div>
                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>const [count, setCount] = React.useState(0)</div>
                  <div style={{paddingTop: "20px"}}>function add&#123;</div>
                  <div style={{paddingLeft: "20px"}}><mark>setCount (prevCount =&gt; prevCount + 1)</mark></div>
                  <div>&#125;</div>
                  <div style={{paddingTop: "20px"}}>function subtract&#123;</div>
                  <div style={{paddingLeft: "20px"}}><mark>setCount (prevCount =&gt; prevCount - 1)</mark></div>
                  <div>&#125;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;button&gt;&#123;count&#125;&lt;/button&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;button onClick = &#123;add&#125;&gt;+&lt;/button&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;button onClick = &#123;subtract&#125;&gt;-&lt;/button&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div style={{paddingBottom: "20px"}}>&#125; </div>
                  </div>
                  <div className='project--bg'>
                  <div className='counter--practice'>
                  <div className='yes-circle'>
                  <div>{count}</div>
                  </div>
                  </div>
                  <div className='counter-practice-plus-minus'>
                  <button onClick={subtract} className='counter--minus'><div>-</div></button>
                  <button onClick={add} className='counter--plus'><div>+</div></button>
                  </div>  
                  </div>
                  <div className='p3'>In this example, 'count' is the state variable, and 'setCount' is the function used to update the state. Instead of passing a new state value directly to setCount, we provide a callback function that receives the previous state value as an argument (prevCount). Inside the callback function, you can perform any necessary logic or calculations based on the previous state value and return the new state value.<br></br><br></br>If you ever need the old value of state to help you determine the new value of state, you should pass a callback function to your state setter function instead of using state directly. This callback function receive the old value of state as its parameter, which you can then use to determine new value of state.</div> 
                  </div>
              </li>

              {/* Flliping State Back and Forth: */}
              <li id='topic22'><b>Flliping State Back and Forth:</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>const [isGoingOut, setisGoingOut] = React.useState(true)</div>
                  <div style={{paddingTop: "20px"}}>function handleClick&#123;</div>
                  <div style={{paddingLeft: "20px"}}>setisGoingOut (previsGoingOut =&gt; <mark>previsGoingOut ? false : true OR !previsGoingOut</mark>)</div>
                  <div>&#125;</div>
                  
                  <div>&#125;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;div onClick = &#123;handleClick&#125;&gt;</div>
                    <div style={{paddingLeft: "50px"}}>&lt;h1&gt;&#123;isGoingOut ? "Yes" : "No"&#125;&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                  <div style={{paddingBottom: "20px"}}>&#125; </div>
                  
                  </div>
                  <div className='project--bg'>
                  <div className='counter--practice'>
                  <div onClick={handleClick} className='yes-circle'>
                      <div>{isGoingOut ? "Yes" : "No"}</div>
                  </div>
                  </div>
                  </div>
                  <div className='p3'><b>Challenge : </b>Initialize State for 'isGoingOut' as a boolean. Make it so Clicking div.onClick flips that boolean value (true → false, false → true). 
                  Display 'Yes' if isGoingOut is 'true', Otherwise "No".</div> 
                  </div>
              </li>

              {/* Arrays in State: */}
              <li id='topic23'><b>Arrays in State:</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>const [thingsArray, setthingsArray] = React.useState(<mark>["Thing 1", "Thing 2"]</mark>)</div>
                  <div style={{paddingTop: "20px"}}>function additem&#123;</div>
                  <div style={{paddingLeft: "20px"}}>setthingsArray (prevthingsArray =&gt; [...prevthingsArray, `Thing $&#123;thingsArray.length + 1&#125;`])</div>
                  <div>&#125;</div>
                  <div style={{paddingTop: "20px"}}>const Elements = thingsArray.map(item =&gt; &lt;p&gt;&#123;item&#125;&lt;/p&gt;)</div>
                  
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;div onClick = &#123;additem&#125;&gt;</div>
                    <div style={{paddingLeft: "50px"}}>&#123;Elements&#125;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                  <div style={{paddingBottom: "20px"}}>&#41;</div>
                  
                  </div>
                  <div className='project--bg'>
                  <button onClick={addItem} className='add-item-btn'>Add Item</button>
                  <div  className='add-item-p'>{Elements}</div>
                  </div>
                  </div>
              </li>

              {/* Objects in State and updating object in state: */}
              <li id='topic24'><b>Objects in State and updating object in state:</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import AvatarPerson from './Assets/Avatar Person.png';</div>
                  <div>import img1 from './Assets/filledStar.png';</div>
                  <div>import img2 from './Assets/emptyStar.png';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>const [contact, setContact] = React.useState(<mark>&#123;<br></br>firstName : "John"<br></br>lastName : "Doe"<br></br>phone : "+1 (712) 522-7169"<br></br>email : "johndoeexam@gmail.com"<br></br>isfavorite : true<br></br>&#125;</mark>)</div>
                  <div style={{paddingTop: "20px"}}>function additem&#123;</div>
                  <div style={{paddingLeft: "20px"}}>setContact(prevContact =&gt; &#123;<br></br></div>
                  <div style={{paddingLeft: "30px"}}>return &#123;<br></br>
                  firstName : prevContact.firstName,<br></br>
                  lastName : prevContact.lastName,<br></br>
                  Phone : prevContact.Phone,<br></br>
                  email : prevContact.email<br></br>
                  isfavorite : !prevContact.isfavorite, <mark>(!) means opposite value</mark><br></br>
                  &#125;<br></br></div>

                  <div>OR</div>
                  <div style={{paddingLeft: "30px"}}>return &#123;<br></br>
                  ...prevContact, <mark>("...") using spread operator</mark><br></br>
                  isfavorite : !prevContact.isfavorite, <br></br>
                  &#125;<br></br></div>
                  &#125;)
                  
                  <div>&#125;</div>
                  
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div className="container"&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div className="card"&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;div className="card-img"&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;img className='avatar-person' src=&#123;AvatarPerson&#125; alt='AvatarPerson' /&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;div className="card-info"&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;img className='Staricons' src=&#123;contact.isfavorite ? img1 : img2&#125; alt='StarIcons' onClick=&#123;toggle&#125; /&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;h2 className='card--name'&gt;&#123;contact.firstName&#125; &#123;contact.lastName&#125;&lt;/h2&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;p className='card-email'&gt;&#123;contact.Phone&#125;&lt;/p&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;p className='card-email'&gt;&#123;contact.email&#125;&lt;/p&gt;</div>  
                    <div style={{paddingLeft: "30px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px", paddingBottom: "10px"}}>&#41;</div>
                  
                  </div>
                  <div className='project--bg'>
                  <div style={{display: "grid", placeItems: "center", margin: "20px 0px"}}>
                  <div className='card'>
                  <div className='card-img'>
                  <img className='avatar-person' src={AvatarPerson} alt='AvatarPerson' />
                  </div>
                  <div className='card-info'>
                  <img  onClick={toggle} className='Staricons' src={contact.isfavorite ? img1 : img2} alt='StarIcons' />
                  <h2 className='card--name'>{contact.firstName} {contact.lastName}</h2>
                  <div className='card-email'>{contact.Phone}</div>
                  <div className='card-email'>{contact.email}</div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
              </li>

              {/* Setting State From Child Component: */}
              <li id='topic25'><b>Setting State From Child Component:</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import Head from './Head';</div>
                  <div>import Body from './Body';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123; </div>
                  <div style={{paddingLeft: "20px"}}>const [user, setUser] = React.useState("Joe")</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;Head user = &#123;user&#125; /</div>
                    <div style={{paddingLeft: "20px"}}>&lt;Body user = &#123;user&#125; /</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px", paddingBottom: "10px"}}>&#41;</div>
                    <div style={{paddingBottom: "10px"}}>&#125;</div>
                  </div>

                  <div className="router-code-grey">Head.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div style={{paddingTop: "10px"}}>export default function Head(props) &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;p&gt;Current User : &#123;props.user&#125;&lt;p&gt;</div> 
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px", paddingBottom: "10px"}}>&#41;</div>
                    <div style={{paddingBottom: "10px"}}>&#125;</div>
                  </div>

                  <div className="router-code-grey">Body.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div style={{paddingTop: "10px"}}>export default function Body(props) &#123;</div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;h3&gt;Welcome Back, &#123;props.user&#125;!&lt;h3&gt;</div> 
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px", paddingBottom: "10px"}}>&#41;</div>
                    <div style={{paddingBottom: "10px"}}>&#125;</div>
                  </div>
                  <div className='project--bg'>
                    <div>Current User: Joe</div>
                    <h3 style={{paddingTop: "20px"}}>Welcome back, Joe!</h3>
                  </div>
                  </div>
              </li>

              {/* Dynamic styles in boxes challenge: */}
              <li id='topic26'><b>Dynamic styles in boxes challenge:</b>
                  <div className='code'>
                  <div className="router-code-grey">Index.js</div>
                  <div className="router-code-black">
                  <div>import ReactDOM from 'react-dom';</div>
                  <div>import App from './App';</div>

                  <div style={{padding: "20px 0px"}}>ReactDOM.render&#40;&lt;App darkmode=&#123;true&#125; /&gt;, document.getElementById&#40;"root"&#41;&#41;</div>
                  </div>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import Data from './Data';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>const [box, setBox] = React.useState(Data)</div>
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>const style = &#123;</div>
                  <div style={{paddingLeft: "40px"}}>backgroundColor : props.darkmode ? "aqua" : "transparent"</div>
                  <div style={{paddingLeft: "20px"}}>&#125;</div>
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>const Elements = square.map&#40;item =&gt; &#40;</div>
                  <div style={{paddingLeft: "40px"}}>&lt;div style=&#123;style&#125; className='box' key=&#123;item.id&#125; on=&#123;item.on&#125;&gt;&lt;/div&gt;</div>
                  <div style={{paddingLeft: "30px"}}>&#41;</div>
                  <div style={{paddingLeft: "20px"}}>&#41;</div>
                  
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div className="container"&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;h1&gt;Boxes will go here!&lt;/h1&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&#123;Elements&#125;</div> 
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                    <div style={{paddingBottom: "10px"}}>&#125;</div>
                  </div>
                  <div className='project--bg'>
                  <h3>Boxes Will Goes Here!</h3>
                  <div style={{marginTop: "30px"}}>{boxElements}</div>
                  </div>
                  </div>
              </li>

              {/* Conditional rendering: */}
              <li id='topic27'><b>Conditional rendering:</b>
              <div className='code'>
                  {/* logical operator (&&) */}
                  <div style={{paddingTop: "20px"}}><b>Logical operator (&& - double ampersand):</b></div>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black"> 
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>const [isShown, setIsShown] = React.useState(false)</div>
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>function toggle() &#123;</div>
                  <div style={{paddingLeft: "40px"}}>setIsShown(prevbtn =&gt; !prevbtn)</div>        
                  <div style={{paddingLeft: "20px"}}>&#125;</div>
                
                  
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div className='single-joke'&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;h3&gt;&#123;props.setup&#125;&lt;/h3&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&#123; isShown && &lt;p&gt;&#123;props.punchline&#125;&lt;/p&gt;&#125;</div> 
                    <div style={{paddingLeft: "40px"}}>&#123; isShown && &lt;button&gt; onClick= &#123;toggle&#125;&gt;Hide Punchline&lt;/button&gt;&#125;</div> 
                    <div style={{paddingLeft: "40px"}}>&#123; !isShown && &lt;button&gt; onClick= &#123;toggle&#125;&gt;Show Punchline&lt;/button&gt;&#125;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                    <div style={{paddingBottom: "10px"}}>&#125;</div>
                  </div>
                  <div className='project--bg'>
                  <div className='joke-container'> 
                        <h4 className='joke--h4'>setup: I have got my daughter a fridge for her birthday.</h4>
                       { isShown && <div className='joke--p'>punchline: I can't wait to see her face light up when she opens it.</div>}
                     <button className='joke--btn' onClick={joketoggle}>Click Me to display a Punchline</button>
                   </div>
                  </div>
                 
                  {/* Ternery operator: */}
                  <div style={{paddingTop: "20px"}}><b>Ternery operator: </b></div>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px"}}>const [isShown, setIsShown] = React.useState(false)</div>
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>function toggle() &#123;</div>
                  <div style={{paddingLeft: "40px"}}>setIsShown(prevbtn =&gt; !prevbtn)</div>        
                  <div style={{paddingLeft: "20px"}}>&#125;</div>
                
                  
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div className='single-joke'&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;h3&gt;&#123;props.setup&#125;&lt;/h3&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;p style=&#123;&#123;display: isShown ? "block" : "none"&#125;&#125;&gt;&#123;props.punchline&#125;&lt;/p&gt;&#125;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;button&gt; onClick= &#123;toggle&#125;&gt;&#123;isShown ? "Hide" : "Show"&#125; Punchline&lt;/button&gt;</div> 
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                    <div style={{paddingBottom: "10px"}}>&#125;</div>
                  
                  </div>
                  <div className='project--bg'>
                  <div className='joke-container'> 
                        <h4 className='joke--h4'>setup: I have got my daughter a fridge for her birthday.</h4>
                       <div style={{display: isShown ? "block" : "none"}} className='joke--p'>punchline: I can't wait to see her face light up when she opens it.</div>
                     <button className='joke--btn' onClick={joketoggle}>{isShown ? "Hide" : "Show"} Punchline</button>
                   </div>
                  </div>

                  {/* If Statement: */}
                  <div style={{paddingTop: "20px"}}><b>If Statement: </b></div>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
  
                    <div style={{paddingTop: "10px"}}>export default function App() &#123; </div>
                    <div style={{paddingTop: "10px"}}>const date = new Date();</div>
                    <div>const hours = date.getHours()</div>
                    <div style={{paddingLeft: "20px", paddingTop: "10px"}}>let TimeOfDay;</div>
                    <div style={{paddingLeft: "40px", paddingTop: "20px"}}>if (hours &lt; 12) &#123;</div>
                    <div style={{paddingLeft: "60px"}}>TimeOfDay = "Good morning"</div>
                    <div style={{paddingLeft: "40px", paddingTop: "20px"}}>&#125; else if (hours &gt;= 12 && hours &lt; 17) &#123;</div>
                    <div style={{paddingLeft: "60px"}}>TimeOfDay = "Good Afternoon"</div>
                    <div style={{paddingLeft: "40px", paddingTop: "20px"}}>&#125; else &#123;</div>
                    <div style={{paddingLeft: "60px"}}>TimeOfDay = "Good night"</div>
                    <div style={{paddingLeft: "40px"}}>&#125; </div>
                    <div style={{paddingTop: "5px"}}>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;&#123;TimeOfDay&#125;!&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                    <div>&#125; </div>
                   
                    </div>  
                  <div className='project--bg'> 
                        <center><h4 style={{fontSize: "25px"}}>Hello, {TimeOfDay} 😊</h4></center>
                  </div>
                  <div>
                  <div className='p3'>In react, Logical operator is great when you want to display or not display and Ternery operator is great if you want to choose between one of two things to display. If your conditions are more complex than just having one or two options to display usually it'll be the best to turn to a regular old if statement as we have seen in the past.</div>
                  </div>
                  </div>
              </li>

              {/* React Forms : */}
              <li id='topic28'><b>React Forms :</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px", paddingTop: "10px"}}> const [forms, setForms] = React.useState&#40;&#123;</div>
                  <div style={{paddingLeft: "40px"}}>email : "",</div>
                  <div style={{paddingLeft: "40px"}}>Password : "",</div>
                  <div style={{paddingLeft: "40px"}}>confirmPassword : "",</div>
                  <div style={{paddingLeft: "40px"}}>joining : false,</div>
                  <div style={{paddingLeft: "20px"}}>&#125;&#41;</div>
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>function toggle(event) &#123;</div>
                  <div style={{paddingLeft: "60px"}}>const &#123;name, value, type, checked&#125; = event.target</div>
                  <div style={{paddingLeft: "40px"}}>setForms&#40;prevForms =&gt; &#123;</div> 
                  <div style={{paddingLeft: "60px"}}>return &#123;</div>
                  <div style={{paddingLeft: "80px"}}>...prevForms,</div>
                  <div style={{paddingLeft: "80px"}}>[name] : type === "checkbox" ? checked : value</div>
                  <div style={{paddingLeft: "60px"}}>&#125;</div>
                  <div style={{paddingLeft: "40px"}}>&#125;&#41;</div>
                  <div style={{paddingLeft: "20px"}}>&#125;</div>
                  
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>function handleSubmit(event) &#123;</div>
                  <div style={{paddingLeft: "60px"}}>event.preventDefault()</div>
                  <div style={{paddingLeft: "40px"}}>if(form.password === form.confirmPassword) &#123;</div> 
                  <div style={{paddingLeft: "60px"}}>alert("Successfully Signed up")</div>
                  <div style={{paddingLeft: "40px"}}>&#125; else &#123;</div>
                  <div style={{paddingLeft: "60px"}}>alert("Passwords do not match")</div>
                  <div style={{paddingLeft: "40px"}}>&#125;</div>
                  <div style={{paddingLeft: "20px"}}>&#125;</div>
                  
                    <div style={{paddingTop: "20px"}}>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div className="two-forms"&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;form className="react-forms" onSubmit=&#123;handleSubmit&#125;&gt;</div> 
                    <div style={{paddingLeft: "60px"}}>&lt;input</div> 
                    <div style={{paddingLeft: "80px"}}>
                        className="input-box"<br />
                        type="text"<br />
                        placeholder="Email"<br />
                        onChange=&#123;toggle&#125;<br />
                        name="email"<br />
                        value=&#123;form.email&#125;</div>
                    <div style={{paddingLeft: "60px"}}>/&gt;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;input</div> 
                    <div style={{paddingLeft: "80px"}}>
                        className="input-box"<br />
                        type="password"<br />
                        placeholder="Password"<br />
                        onChange=&#123;toggle&#125;<br />
                        name="password"<br />
                        value=&#123;form.password&#125;</div>
                    <div style={{paddingLeft: "60px"}}>/&gt;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;input</div> 
                    <div style={{paddingLeft: "80px"}}>
                        className="input-box"<br />
                        type="password"<br />
                        placeholder="Confirm Password"<br />
                        onChange=&#123;toggle&#125;<br />
                        name="Confirmpassword"<br />
                        value=&#123;form.confirmpassword&#125;
                    </div>
                    <div style={{paddingLeft: "60px"}}>/&gt;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;input</div> 
                    <div style={{paddingLeft: "80px"}}>
                        className="input-box"<br />
                        type="checkbox"<br />
                        id="joining"<br />
                        onChange=&#123;toggle&#125;<br />
                        name="joining"<br />
                        checked=&#123;form.joining&#125;
                    </div>
                    <div style={{paddingLeft: "60px"}}>/&gt;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;label className="checkbox-label" htmlFor="joining"&gt;I want to join the <br />newsletter&lt;/label&gt;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;button className="signup-btn"&gt;Sign Up&lt;/button&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;/form&gt;</div> 
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>

                  </div>
                  <div className='project--bg'>
                  <div className="form-container">
                    <form className="react-form" onSubmit={handleSubmit}>
                    <input 
                        className="input-box"
                        type="text"
                        placeholder="Email"
                        onChange={formtoggle}
                        name="email"
                        value={form.email}
                      />
                      <input 
                        className="input-box"
                        type="password"
                        placeholder="Password"
                        onChange={formtoggle}
                        name="password"
                        value={form.password}
                      />
                      <input 
                        className="input-box"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={formtoggle}
                        name="confirmPassword"
                        value={form.confirmPassword}
                      />
                      <br />
                      <div className="input-label">
                      <input 
                        className="input-checkbox"
                        type="checkbox"
                        id="joining"
                        onChange={formtoggle}
                        name="joining"
                        checked={form.joining}
                      />
                      <label className="checkbox-label" htmlFor="joining">I want to join the <br />newsletter</label>
                      </div>
                      <br />
                      <button className="signup-btn">Sign Up</button>
                    </form>
                  </div>
                  </div>
                  </div>
              </li>

              {/* Making API Calls in React : */}
              <li id='topic29'><b>Making API Calls in React :</b>
                  <div>
                  <div className='p3'>To make API calls in React, you can use various methods and libraries. The most common approach is to use the built-in fetch() function or third-party libraries like Axios. Here's how you can make API calls in React using these methods:</div>
                    <div style={{paddingTop: "20px"}}><b>Step 1 : Import Dependencies</b></div>
                    <div style={{padding: "20px"}}>Start by importing the necessary dependencies in your React component file. For the fetch() method, no additional packages are required as it's a native JavaScript feature. If you prefer using Axios, you need to install it first and then import it in your component.</div>
                    <div><b>Step 2 : Declare State</b></div>
                    <div style={{padding: "20px"}}>Declare a state variable using the useState hook to store the data retrieved from the API. This state will be updated once the API call is successful.</div>
                    <div><b>Step 3 : Make the API Call</b></div>
                    <div style={{padding: "20px"}}>Inside a useEffect hook (if you want to fetch data when the component mounts), use either fetch() or Axios to make the API call. Provide the API endpoint URL as the argument to the fetch function or use the Axios get() method with the URL.</div>
                    <div><b>Step 4 : Handle the Response</b></div>
                    <div style={{padding: "20px"}}>Use .then() to handle the response once the API call is successful. Convert the response to JSON format using response.json() for fetch(), or access the data directly from the Axios response (response.data).</div>
                    <div><b>Step 5 : Update the State</b></div>
                    <div style={{padding: "20px"}}>In the response handling block, update the state using the setter function (e.g., setData()) with the data received from the API.</div>
                    <div><b>Step 6 :  Error Handling</b></div>
                    <div style={{padding: "20px"}}>Use .catch() to handle any errors that may occur during the API call. Log the error or implement error handling logic as needed.</div>
                    <div><b>Step 7 : Render the Data</b></div>
                    <div style={{padding: "20px"}}>In the return statement, render the data received from the API. You can use JSX to display the data in any format you desire, such as a list, table, or cards.</div>
                    <div><b>Step 8 : Use the Component</b></div>
                    <div style={{padding: "20px"}}>Finally, use the component where you want to display the API data in your application.</div>
                    <div>Here's a basic code outline for reference:</div>
                    <div className="router-code-grey">App.js</div>
                    <div className="router-code-black">
                    <div style={{paddingTop: "10px"}}>import React from 'react</div>
                    <div style={{paddingTop: "10px"}}><mark> If using Axios, import it here: import axios from 'axios';</mark></div>
                    <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                    <div style={{paddingTop: "10px"}}><mark> Step 2: Declare state</mark></div>
                  <div style={{paddingLeft: "20px", paddingTop: "10px"}}> const [starWarsData, setStarWarsData] = React.useState&#40;&#123;&#125;&#41;</div><br />
                  <div style={{paddingTop: "10px"}}>React.useEffect&#40;() =&gt; &#123;</div>
                  <div style={{paddingTop: "10px"}}><mark> Step 3: Make the API call</mark></div>
                  <div style={{paddingLeft: "20px"}}>const apiURL = "https:swapi.dev/api/people/1"; </div>
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}> for fetch</div>
                  <div style={{paddingLeft: "20px"}}>fetch(apiURL) </div>
                  <div style={{paddingLeft: "40px"}}>.then(res =&gt; res.json()) <mark> Step 4: Handle the response</mark></div>
                  <div style={{paddingLeft: "40px"}}>.then(data =&gt; setStarWarsData(data)) <mark> Step 5: Update the state</mark></div>  
                  <div style={{paddingLeft: "40px"}}>.catch((error) =&gt; console.error('Error fetching data:', error)); <mark> Step 6: Error handling</mark></div> 
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}> for axios</div>
                  <div style={{paddingLeft: "20px"}}>axios.get(apiURL) </div>
                  <div style={{paddingLeft: "40px"}}>.then((response) =&gt; setData(response.data))</div>  
                  <div style={{paddingLeft: "40px"}}>.catch((error) =&gt; console.error('Error fetching data:', error));</div>  
                  <div style={{paddingTop: "10px"}}>&#125;, [] &#41;</div> 
                    <div style={{paddingTop: "20px"}}> <mark>Step 7: Render the data</mark></div>  
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;pre&gt;&#123;JSON.stringify(starWarsData, null, 2)&#125;&lt;/pre&gt;</div> 
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    </div>
                  </div>
              </li>

              {/* useEffect : */}
              <li id='topic30'><b>useEffect :</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px", paddingTop: "10px"}}> const [starWarsData, setStarWarsData] = React.useState&#40;&#123;&#125;&#41;</div>
                  <div style={{paddingTop: "20px", paddingLeft: "40px"}}>console.log("Component rendered")</div> 
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>React.useEffect&#40;() =&gt; &#123;</div>
                  <div style={{paddingLeft: "20px"}}><mark>fetch("https://swapi.dev/api/people/1")</mark></div>
                  <div style={{paddingLeft: "40px"}}><mark>.then(res =&gt; res.json())</mark>   ← SIDE EFFECTS CODE</div>
                  <div style={{paddingLeft: "40px"}}><mark>.then(data =&gt; setStarWarsData(data))</mark></div>   
                  <div style={{paddingLeft: "30px"}}>&#125;</div>
                  <div style={{paddingLeft: "20px"}}>&#41;</div>    
                    <div style={{paddingTop: "20px"}}>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;pre&gt;&#123;JSON.stringify(starWarsData, null, 2)&#125;&lt;/pre&gt;</div> 
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&#41;</div>
                    <div style={{paddingLeft: "20px"}}>&#125;</div>
                    
                  </div>                  
                  <div className='p3'>The useEffect hook is a function that accepts two arguments: a function and an optional array of dependencies.<br></br><br></br>We're still having the same problem when we're having before where we stuck in an infinite loop. It's because the code we put inside of this callback function doesn't have an optional array of dependencies.</div>
                  </div>
                  
              </li>

              {/* useEffect dependencies array: */}
              <li id='topic31'><b>useEffect dependencies array:</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px", paddingTop: "10px"}}> const [starWarsData, setStarWarsData] = React.useState&#40;&#123;&#125;&#41;</div>
                  <div style={{paddingTop: "20px", paddingLeft: "40px"}}>console.log("Component rendered")</div> 
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>React.useEffect&#40;() =&gt; &#123;</div>
                  <div style={{paddingLeft: "20px"}}>fetch("https://swapi.dev/api/people/1")</div>
                  <div style={{paddingLeft: "40px"}}>.then(res =&gt; res.json())</div>
                  <div style={{paddingLeft: "40px"}}>.then(data =&gt; setStarWarsData(data))</div>   
                  <div style={{paddingLeft: "30px"}}>&#125;, [ ] &#41;</div>    
                    <div style={{paddingTop: "20px"}}>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;pre&gt;&#123;JSON.stringify(starWarsData, null, 2)&#125;&lt;/pre&gt;</div> 
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&#41;</div>
                    <div style={{paddingLeft: "20px"}}>&#125;</div>
                    </div>
                  
                  </div>
                  <div>
                  <div className='p3'>--------write the sentence--------------</div>
                  </div>  
              </li>

              {/* useEffect - when to use dependencies array: */}
              <li id='topic32'><b>useEffect - when to use dependencies array:</b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px", paddingTop: "10px"}}> const [starWarsData, setStarWarsData] = React.useState&#40;&#123;&#125;&#41;</div>
                  <div style={{paddingLeft: "20px"}}> const [count, setCount] = React.useState&#40;1&#41;</div>
                  <div style={{paddingTop: "20px", paddingLeft: "40px"}}>console.log("Component rendered")</div> 
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>React.useEffect&#40;() =&gt; &#123;</div>
                  <div style={{paddingLeft: "20px"}}>fetch(`https://swapi.dev/api/people/$&#123;count&#125;`)</div>
                  <div style={{paddingLeft: "40px"}}>.then(res =&gt; res.json())</div>
                  <div style={{paddingLeft: "40px"}}>.then(data =&gt; setStarWarsData(data))</div>   
                  <div style={{paddingLeft: "30px"}}>&#125;, [count] &#41;</div>    
                    <div style={{paddingTop: "20px"}}>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;h1&gt;The count is &#123;count&#125;&lt;/h1&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;button onClick = &#123;() =&gt; setCount(prevCount =&gt; prevCount + 1)&#125;&gt;Get Next Chapter&lt;/button&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;pre&gt;&#123;JSON.stringify(starWarsData, null, 2)&#125;&lt;/pre&gt;</div> 
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&#41;</div>
                    <div style={{paddingLeft: "20px"}}>&#125;</div>
                  </div>
                  <div className='project--bg'> 
                        <h1>The Count is {counter}</h1>
                        <button className='joke--btn' onClick={() => {setCounter(prevCounter => prevCounter + 1)}}>Get Next Character</button>
                        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
                  </div>
                  </div>
                  <div>
                  <div className='p3'>Empty depedencies array '[]' means the effect runs only once on mount </div>
                  </div>  
              </li>

              {/* useEffect CleanUp Function :  */}
              <li id='topic33'><b>useEffect CleanUp Function : </b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                  <div>import WindowTracker from './WindowTracker';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px", paddingTop: "10px"}}> const [show, setShow] = React.useState(false)</div>
                  <div style={{paddingLeft: "40px"}}>function toggle() &#123;</div> 
                  <div style={{paddingLeft: "60px"}}>setShow(prevShow =&gt; !prevShow)</div>
                  <div style={{paddingLeft: "40px"}}>&#125;</div>

                    <div style={{paddingLeft: "20px"}}>return&#40;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;div&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;button onClick=&#123;toggle&#125;className='window-btn'&gt;Toggle window tracker&lt;/button&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&#123;show && &lt;WindowTracker /&gt;&#125;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&#41;</div>
                    <div style={{paddingLeft: "10px"}}>&#125;</div>
                  </div>


                  <div className="router-code-grey">WindowTracker.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>

                  <div style={{paddingTop: "10px"}}>export default function WindowTracker() &#123; </div>
                  <div style={{paddingLeft: "20px", paddingTop: "10px"}}> const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)</div>
                  <div style={{paddingTop: "20px"}}> React.useEffect&#40;() =&gt; &#123;</div>
                  <div style={{paddingLeft: "40px"}}>function watchWidth() &#123;</div> 
                  <div style={{paddingLeft: "60px"}}>console.log("setting up...")</div>
                  <div style={{paddingLeft: "60px"}}>setWindowWidth(window.innerWidth)</div>
                  <div style={{paddingLeft: "40px"}}>&#125;</div>
                  <div style={{paddingLeft: "60px"}}>window.addEventListener("resize", watchWidth)</div>   
                  <div style={{paddingTop: "20px", paddingLeft: "40px"}}><mark>return function() &#123;</mark></div>    
                    <div style={{paddingLeft: "60px"}}><mark>console.log("Cleaning up...")</mark></div>
                    <div style={{paddingLeft: "60px"}}><mark>window.removeEventListener("resize", watchWidth)</mark></div>
                    <div style={{paddingLeft: "40px"}}><mark>&#125;</mark></div>    
                    <div style={{paddingTop: "20px"}}> &#125;, []&#41;</div>
                    <div style={{paddingLeft: "20px"}}>return&#40;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;div&gt;</div> 
                     
                    <div style={{paddingLeft: "60px"}}>&lt;h1&gt; window width : &#123;windowWidth&#125;&lt;/h1&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&#41;</div>
                    <div style={{paddingLeft: "10px"}}>&#125;</div>
                  </div>
                  <div className='project--bg'> 
                        <button className='joke--btn' onClick={windowtoggle}>Toggle Window Tracker</button>
                        {show && <h1>Window Width : {window.innerWidth}</h1>}
                        <div style={{paddingTop: "30px"}}>It's not Completed Visit <mark>window-width</mark> page in React Apps</div>
                  </div>
                  <div>
                    </div>
                  <div className='p3'>In React, it is important to perform cleanup operations when using certain side effects in components, like event listeners, timers, or subscriptions. The main reason for doing cleanup is to prevent memory leaks and unnecessary computations when a component is unmounted or no longer needed. </div>  
                  </div>
              </li>

              {/* useEffect - async and await :  */}
              <li id='topic34'><b>useEffect - async and await : </b>
                  <div className='code'>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>

                  <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                  <div style={{paddingLeft: "20px", paddingTop: "10px"}}> const [starWarsData, setStarWarsData] = React.useState&#40;&#123;&#125;&#41;</div>
                  <div style={{paddingLeft: "20px"}}> const [count, setCount] = React.useState&#40;1&#41;</div>
                  <div style={{paddingTop: "20px", paddingLeft: "40px"}}>console.log("Component rendered")</div> 
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>React.useEffect&#40;() =&gt; &#123;</div>
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>async function fetchData() &#123;</div>
                  <div style={{ paddingLeft: "30px"}}>try &#123;</div>
                  <div style={{paddingLeft: "40px"}}>const response = await fetch(`https://swapi.dev/api/people/$&#123;count&#125;`)</div>
                  <div style={{paddingLeft: "40px"}}>const data = await response.json()</div>
                  <div style={{paddingLeft: "40px"}}>setStarWarsData(data);</div>   
                  <div style={{paddingLeft: "30px"}}>&#125; catch (error) &#123;</div>
                  <div style={{paddingLeft: "60px"}}>console.error('Error fetching data:', error);</div>
                  <div style={{paddingLeft: "50px"}}>&#125;</div> 
                  <div style={{paddingLeft: "30px"}}>&#125;</div> 
                  <div style={{paddingLeft: "30px"}}>fetchData();</div> 
                  <div style={{paddingLeft: "30px"}}>&#125;, [count] &#41;</div> 

                  <div style={{padding: "20px", paddingLeft: "50px"}}>OR</div>

                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>React.useEffect&#40;() =&gt; &#123;</div>
                  <div style={{paddingTop: "20px", paddingLeft: "20px"}}>async function fetchData() &#123;</div>
                  <div style={{paddingLeft: "40px"}}>const response = await fetch(`https://swapi.dev/api/people/$&#123;count&#125;`)</div>
                  <div style={{paddingLeft: "40px"}}>const data = await response.json()</div>
                  <div style={{paddingLeft: "40px"}}>setStarWarsData(data);</div>   
                  <div style={{paddingLeft: "30px"}}>&#125;</div> 
                  <div style={{paddingLeft: "50px"}}>fetchData();</div> 
                  <div style={{paddingLeft: "20px"}}>&#125;, [count] &#41;</div> 

                    <div style={{paddingTop: "20px"}}>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&lt;h1&gt;The count is &#123;count&#125;&lt;/h1&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;button onClick = &#123;() =&gt; setCount(prevCount =&gt; prevCount + 1)&#125;&gt;Get Next Chapter&lt;/button&gt;</div> 
                    <div style={{paddingLeft: "40px"}}>&lt;pre&gt;&#123;JSON.stringify(starWarsData, null, 2)&#125;&lt;/pre&gt;</div> 
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&#41;</div>
                    <div style={{paddingLeft: "20px"}}>&#125;</div>

                  </div>
                  <div className='project--bg'> 
                        <h1>The Count is {counting}</h1>
                        <button className='joke--btn' onClick={() => {setCounting(prevCounting => prevCounting + 1)}}>Get Next Character</button>
                        <pre>{JSON.stringify(starW, null, 2)}</pre>
                  </div>
                  <div>
                    
                  <div className='p3'>Empty depedencies array '[]' means the effect runs only once on mount </div>
                  </div> 
                  </div> 
              </li>

              {/* Class Component */}
              <li id='topic35'><b>Class Component:</b>
                <div className='code'>
                  <div className='p3'>Whenever we have to use Class component we need to include two imports "React, Component"</div>
                  <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import &#123; React, Component &#125; from 'react';</div>
                  <div>import './App.css';</div>
                  <div style={{paddingTop: "10px"}}>export default class App extends Component &#123;</div>
                  <div style={{paddingLeft: "20px"}}>render() &#123;</div>
                    <div style={{paddingLeft: "40px"}}>return &#40;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "80px"}}>&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&#41;</div>
                  <div style={{paddingLeft: "20px"}}>&#125; </div>
                  <div>&#125; </div>
                  </div>
                   <div className='p3'>Without two imports </div>
                   <div className="router-code-grey">App.js</div>
                  <div className="router-code-black">
                  <div>import React from 'react';</div>
                  <div>import './App.css';</div>
                   <div style={{paddingTop: "10px"}}>export default class App extends React.Component &#123;</div>
                  <div style={{paddingLeft: "20px"}}>render() &#123;</div>
                    <div style={{paddingLeft: "40px"}}>return &#40;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "80px"}}>&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "60px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "40px"}}>&#41;</div>
                  <div style={{paddingLeft: "20px"}}>&#125; </div>
                  <div>&#125; </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          </div>
          </div>
    )
  }
  