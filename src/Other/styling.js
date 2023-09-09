import React from 'react';
import '../App';
import { Link } from 'react-scroll';

export default function Styling() {
    return(
        <div>
            <div className='topics'>
                <h1>CSS Styling</h1>
                <div style={{paddingBottom: "30px"}}>
                           {/* Topics */}
          <div style={{paddingBottom: "30px"}}>
          <h2 className='Reacttopics'>Topics:</h2>
          <ol className='w3-order-list'>
            <li><Link className='w3-link' activeClass="active" to="topic0" spy={true} smooth={true} offset={-70} duration={500}>Inline CSS in React</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic1" spy={true} smooth={true} offset={-70} duration={500}>When Image and text are in same 'div' container "Z-index" property is not working?</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic2" spy={true} smooth={true} offset={-70} duration={500}>When Image and text are in different 'div' containers "Z-index" property is not working?</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic3" spy={true} smooth={true} offset={-70} duration={500}>How to center an Image?</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic4" spy={true} smooth={true} offset={-70} duration={500}>How to center a Container?</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic5" spy={true} smooth={true} offset={-70} duration={500}>How to center a single Container vertically and horizontally?</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic6" spy={true} smooth={true} offset={-70} duration={500}>The position Property</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic7" spy={true} smooth={true} offset={-70} duration={500}>CSS Variables</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic8" spy={true} smooth={true} offset={-70} duration={500}>To change the background color for different values of "van.type"</Link></li>
          </ol>
          </div>

                    <ol className='second-order-list'>

                    {/* Inline CSS in React */}
                    <li id="topic0" style={{paddingTop: "10px"}}><b>Inline CSS in React</b>
                        <div className='code'>
                        <div className="router-code-grey">App.js</div>
                        <div className="router-code-black"> 
                            <div style={{paddingTop: "10px"}}>import React from 'react';</div>
                            <div>import './App.css';</div>
                            <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                            <div style={{padding: "10px"}}>const myFunctionStyle = &#123;</div>
                                  <div style={{paddingLeft: "10px"}}>color: 'blue',<br></br>
                                  fontSize: '16px',<br></br>
                                  fontWeight: 'bold',<br></br></div>
                                <div>&#125;;</div>
                            <div>return &#40;</div>
                               <div style={{paddingLeft: "20px"}}>&lt;div className = "container"&gt;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;h1  style=&#123;myFunctionStyle&#125;&gt;Hello World!&lt;/h1&gt;</div>
                               
                               <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                               <div style={{paddingLeft: "10px"}}>&#41;</div>
                               <div>&#125; </div>
                            </div>
                            <div style={{paddingTop: "30px"}}>You can apply inline styles directly to the elements within your function component. This involves using the style attribute and providing an object with CSS properties and values. For example:</div> 
                        </div>  
                    </li>    

                    {/* When Image and text are in same 'div' container "Z-index" property is not working? */}
                    <li id="topic1" style={{paddingTop: "10px"}}><b>When Image and text are in same 'div' container "Z-index" property is not working?</b>
                        <div className='code'>
                        <div className="router-code-grey">App.js</div>
                  <div className="router-code-black"> 
                            <div style={{paddingTop: "10px"}}>import React from 'react';</div>
                            <div>import './App.css';</div>
                            <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                               <div>return &#40;</div>
                               <div style={{paddingLeft: "20px"}}>&lt;div className = "container"&gt;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;h1&gt;Hello-World! Hello-World! Hello-World! Hello-World! Hello-World! Hello-World! Hello-!Hello-World!&lt;/h1&gt;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;'https://cute-puppy-images.jpg'&#125; alt="girl pics" width="100" height="100" /&gt;</div>
                               <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                               <div style={{paddingLeft: "10px"}}>&#41;</div>
                               <div>&#125; </div>
                            
                            <div style={{paddingTop: "20px"}}><b>App.css File:</b></div>
                            <div style={{paddingTop: "10px"}}>.container &#123;</div>
                               <div style={{paddingLeft: "30px"}}>position: relative;</div>
                            <div>&#125;</div> 
                            <div style={{paddingTop: "10px"}}>img &#123;</div>
                               <div style={{paddingLeft: "30px"}}>position: relative;</div>
                               <div style={{paddingLeft: "30px"}}>z-index: 1;</div>
                            <div>&#125;</div> 
                            <div style={{paddingTop: "10px"}}>h1 &#123;</div>
                               <div style={{paddingLeft: "30px"}}>position: relative;</div>
                               <div style={{paddingLeft: "30px"}}>z-index: 2;</div>
                            <div>&#125;</div>  
                            </div>
                            <div style={{paddingTop: "30px"}}>To display the image behind the text, set the z-index value of the text to 2, the z-index value of the image to 1, and ensure that the container, text, and image have a position set to relative.</div> 
                            <div style={{paddingTop: "30px"}}>To display the text behind the image,we don't have to use any Z-index or position properties. Just set the margin-top value to negative values (-100px).</div> 
                        </div>  
                    </li>

                    {/* When Image and text are in different 'div' containers "Z-index" property is not working? */}
                    <li id="topic2" style={{paddingTop: "10px"}}><b>When Image and text are in different 'div' containers "Z-index" property is not working?</b>
                        <div className='code'>
                        <div className="router-code-grey">App.js</div>
                  <div className="router-code-black"> 
                            <div style={{paddingTop: "10px"}}>import React from 'react';</div>
                            <div>import './App.css';</div>
                            <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                               <div>return &#40;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;div&gt;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;div className = "container1"&gt;</div>
                               <div style={{paddingLeft: "40px"}}>&lt;h1&gt;Hello-World! Hello-World! Hello-World! Hello-World! Hello-World! Hello-World! Hello-!Hello-World!&lt;/h1&gt;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;/div&gt;</div><br></br>
                               <div style={{paddingLeft: "30px"}}>&lt;div className = "container2"&gt;</div>
                               <div style={{paddingLeft: "40px"}}>&lt;img src=&#123;'https://cute-puppy-images.jpg'&#125; alt="girl pics" width="100" height="100" /&gt;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;/div&gt;</div>
                               <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                               <div style={{paddingLeft: "10px"}}>&#41;</div>
                               <div>&#125; </div>
                            </div>
                            <div className="router-code-grey">App.css</div>
                            <div className="router-code-black"> 
                            <div style={{paddingTop: "10px"}}>.container1, .container2 &#123;</div>
                               <div style={{paddingLeft: "30px"}}>position: relative;</div>
                            <div>&#125;</div> 
                            <div style={{paddingTop: "10px"}}>img &#123;</div>
                               <div style={{paddingLeft: "30px"}}>position: absolute;</div>
                               <div style={{paddingLeft: "30px"}}>z-index: 1;</div>
                            <div>&#125;</div> 
                            <div style={{paddingTop: "10px"}}>h1 &#123;</div>
                               <div style={{paddingLeft: "30px"}}>position: absolute;</div>
                               <div style={{paddingLeft: "30px"}}>z-index: 2;</div>
                            <div>&#125;</div>
                            </div>  
                            <div style={{paddingTop: "30px"}}>To display the image behind the text, set the z-index value of the text to 2, the z-index value of the image to 1, and ensure that the text and image have a position set to relative. Additionally, the containers holding the text and image should have a position set to absolute.</div> 
                        </div>  
                    </li>

                    {/* How to center an Image? */}
                    <li id="topic3" style={{paddingTop: "10px"}}><b>How to center an Image?</b>
                    <div className='code'>
                    <div className="router-code-grey">App.js</div>
                    <div className="router-code-black"> 
                            <div style={{paddingTop: "10px"}}>import React from 'react';</div>
                            <div>import './App.css';</div>
                            <div>import Img1 from './Assets/girl image.png';</div>
                            <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                               <div>return &#40;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;div&gt;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;div className = "container"&gt;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;img src=&#123;Img1&#125; alt="Example Image" /&gt;</div>
                               <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                               <div style={{paddingLeft: "10px"}}>&#41;</div>
                               <div>&#125; </div>
                               </div>
                            
                               <div className="router-code-grey">App.css</div>
                               <div className="router-code-black"> 
                            <div style={{paddingTop: "10px"}}>.container &#123;</div>
                               <div style={{paddingLeft: "30px"}}>text-align: center;</div>
                            <div>&#125;</div> 
                            </div>
                    <div style={{paddingTop: "30px"}}>To center an Image create a separate container to img tag and add css property (text-align: center;)</div> 
                    </div>
                    </li>

                    {/* How to center a Container? */}
                    <li id="topic4" style={{paddingTop: "10px"}}><b>How to center a Container?</b>
                    <div className='code'>
                    <div className="router-code-grey">App.js</div>
                    <div className="router-code-black"> 
                           <div style={{paddingTop: "10px"}}>import React from 'react';</div>
                           <div>import './App.css';</div>
                           <div>import Img1 from './Assets/girl image.png';</div>
                           <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                               <div>return &#40;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;div&gt;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;div className = "container"&gt;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;h1&gt;Hello world&lt;/h1&gt;</div>
                               <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                               <div style={{paddingLeft: "10px"}}>&#41;</div>
                               <div>&#125; </div>
                            </div>
                            <div className="router-code-grey">App.css</div>
                           <div className="router-code-black"> 
                           <div style={{paddingTop: "30px"}}><b>Centering Horizontally:</b></div>
                           <div style={{paddingTop: "30px"}}><b>Method 1:</b> Using 'margin: 0 auto;' - Apply this style to the container element. It sets the left and right margins to "auto," which automatically centers the container horizontally within its parent element.</div>   
                           <div style={{paddingTop: "10px"}}>.container &#123;</div>
                               <div style={{paddingLeft: "30px"}}>margin: 0 auto;</div>
                           <div>&#125;</div>       
                            
                           <div style={{paddingTop: "30px"}}><b>Method 2:</b> Using Flexbox - Apply the following styles to the parent element of the container:</div>  
                           <div style={{paddingTop: "10px"}}>.parent &#123;</div>
                               <div style={{paddingLeft: "30px"}}>display: flex;</div>
                               <div style={{paddingLeft: "30px"}}>justify-content: center;</div>
                           <div>&#125;</div> 

                           <div style={{paddingTop: "30px"}}><b>Centering Vertically:</b></div>
                           <div style={{paddingTop: "30px"}}><b>Method 1:</b> Using Flexbox - Apply the following styles to the parent element of the container:</div>   
                           <div style={{paddingTop: "10px"}}>.parent &#123;</div>
                               <div style={{paddingLeft: "30px"}}>display: flex;</div>
                               <div style={{paddingLeft: "30px"}}>align-items: center;</div>
                           <div>&#125;</div>       
                            
                           <div style={{paddingTop: "30px"}}><b>Method 2:</b> Using CSS Grid - Apply the following styles to the parent element of the container:</div>  
                           <div style={{paddingTop: "10px"}}>.parent &#123;</div>
                               <div style={{paddingLeft: "30px"}}>display: grid;</div>
                               <div style={{paddingLeft: "30px"}}>place-items: center;</div>
                           <div>&#125;</div>  

                           <div style={{paddingTop: "30px"}}><b>Centering horizontally and vertically:</b></div>
                           <div style={{paddingTop: "30px"}}>These methods can be combined to center a container both horizontally and vertically:</div>   
                           <div style={{paddingTop: "10px"}}>.parent &#123;</div>
                               <div style={{paddingLeft: "30px"}}>display: flex;</div>
                               <div style={{paddingLeft: "30px"}}>justify-content: center;</div>
                               <div style={{paddingLeft: "30px"}}>align-items: center;</div>
                           <div>&#125;</div>       
                            </div>
                           <div style={{paddingTop: "30px"}}>Remember to adjust the class names (.container and .parent) to match your specific HTML structure.</div>
                           </div>  
                    </li>

                    {/* How to center a single Container vertically and horizontally? */}
                    <li id="topic5" style={{paddingTop: "10px"}}><b>How to center a single Container vertically and horizontally?</b>
                    <div className='code'>
                    <div className="router-code-grey">App.js</div>
                           <div className="router-code-black">
                           <div style={{paddingTop: "10px"}}>import React from 'react';</div>
                           <div>import './App.css';</div>
                           <div>import Img1 from './Assets/girl image.png';</div>
                           <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                               <div>return &#40;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;div&gt;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;div className = "container"&gt;</div>
                               <div style={{paddingLeft: "30px"}}>&lt;h1&gt;Hello world&lt;/h1&gt;</div>
                               <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                               <div style={{paddingLeft: "10px"}}>&#41;</div>
                               <div>&#125; </div>
                           </div>
                               <div className="router-code-grey">App.css</div>
                           <div className="router-code-black">                    
                           <div style={{paddingTop: "30px"}}><b>Centering horizontally and vertically:</b></div>  
                           <div style={{paddingTop: "10px"}}>.container &#123;</div>
                               <div style={{paddingLeft: "30px"}}>position: absolute;</div>
                               <div style={{paddingLeft: "30px"}}>top: 50%;</div>
                               <div style={{paddingLeft: "30px"}}>left: 50%</div>
                               <div style={{paddingLeft: "30px"}}>transform: translate(-50%, -50%);</div>
                           <div>&#125;</div> 
                           </div>      
                           <div style={{paddingTop: "30px"}}>In the above example, the container is positioned absolutely using the CSS position: absolute; property. Then, the top: 50%; and left: 50%; properties move the container's top-left corner to the middle of the screen.<br></br>
                           <br></br>To adjust the position precisely to the center, the transform: translate(-50%, -50%); property is used. This translation moves the container halfway back up and halfway back to the left, resulting in a perfectly centered container both vertically and horizontally on the screen.</div>  
                    </div>
                    </li>

                    {/* The position Property */}
                    <li id="topic6" style={{paddingTop: "10px"}}><b>The position Property</b>
                    <div className='code'>                               
                        <div>The 'position' property specifies the type of positioning method used for an element.</div> 
                        <div style={{padding: "10px"}}>There are five different position values:</div>
                        <ul style={{padding: "0px 60px 40px 60px"}}>
                            <li>static</li>
                            <li>relative</li>
                            <li>fixed</li>
                            <li>absolute</li>
                            <li>sticky</li>
                        </ul>
                        <a className='youtube-link' rel="noopener noreferrer" target='-blank' href='https://www.youtube.com/watch?v=Mau4o17qUEY&list=PLcNVy1DudNLqOSzB94WOseufpBXe97P7n&index=2&t=471s'>Position Property Video</a>
                        <div style={{paddingTop: "20px"}}>Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.</div>

                        <div style={{padding: "20px 0px"}}><b>Static (default) : </b><br />Elements with 'position: static' are positioned according to the normal flow of the document. They are not affected by the top, bottom, left, right, or z-index properties. This is the default behavior for most elements.</div>

                        <div><b>Relative : </b><br />Elements with 'position: relative' are positioned relative to their normal position in the document flow. The top, bottom, left, and right properties can be used to shift the element from its original position without affecting the surrounding elements. Other elements still treat the space the element would have occupied as if it were still there.</div>

                        <div style={{padding: "20px 0px"}}><b>Absolute : </b><br />Elements with 'position: absolute' are positioned relative to their nearest positioned ancestor (an ancestor with a position value other than static), or the containing block if there's no such ancestor. They are taken out of the normal flow, so they don't affect the position of surrounding elements. The top, bottom, left, and right properties are used to position the element precisely.</div>

                        <div><b>Fixed : </b><br />Elements with 'position: fixed' are positioned relative to the viewport (the browser window) rather than their containing element. They remain in the same position even when the user scrolls. top, bottom, left, and right properties are used to specify their position.</div>

                        <div style={{padding: "20px 0px"}}><b>Sticky : </b><br />Elements with 'position: sticky' are positioned based on the user's scroll position. They behave like relative until they reach a certain threshold, at which point they become fixed. This creates a "sticky" effect where the element sticks to the top or bottom of the viewport when scrolling.</div>

                        <div style={{padding: "20px 0px 0px 0px"}}>In Summary</div>
                        <ul>
                            <li>Use "static" for elements that should follow the normal document flow.</li>
                            <li>Use "relative" for minor adjustments within the normal flow.</li>
                            <li>Use "absolute" for precise positioning within a containing element.</li>
                            <li>Use "fixed" for elements that should remain visible as the user scrolls.</li>
                            <li>Use sticky for elements that should become fixed after reaching a certain scroll position.</li>
                        </ul>
                    </div>
                    </li>

                    {/* CSS Variables */}
                    <li id="topic7" style={{paddingTop: "10px"}}><b>CSS Variables</b>
                    <div className='code'>
                        <div>CSS variables, called custom properties, let you store values for reuse. They begin with "--" and can hold colors, sizes, and more.</div>
                        <div style={{paddingTop: "20px"}}>CSS variables have both global and local scopes.</div>
                        <div style={{paddingTop: "20px"}}><b>Global Scope:</b> CSS variables defined in the ':root' selector have a global scope. This means they can be accessed and used anywhere in your stylesheet. They're great for defining values that are used across your entire website. <br /><mark>The ':root' selector matches the document's root element.</mark></div>
                    <div className="router-code-grey">App.css</div>
                    <div className="router-code-black"> 
                        <div style={{paddingTop: "10px"}}>:root &#123;</div>
                        <div style={{paddingLeft: "20px"}}>--main-color: #007bff; /* Global scope variable */</div>
                        <div>&#125;</div>
                        <div style={{paddingTop: "10px"}}>button</div>
                        <div style={{paddingLeft: "20px"}}>background-color: var(--main-color); /* Using global scopevariable */</div>
                        <div>&#125;</div>
                        </div>
                        <div style={{paddingTop: "20px"}}><b>Local Scope:</b> CSS variables can also be defined within a specific selector, giving them a local scope. These variables are only accessible within that selector and its descendants. They're useful when you want to limit the scope of a variable to a particular section of your stylesheet.</div>
                    <div className="router-code-grey">App.css</div>
                    <div className="router-code-black"> 
                        <div style={{paddingTop: "10px"}}>.section &#123;</div>
                        <div style={{paddingLeft: "20px"}}>--section-background: #f0f0f0; /* Local scope variable */</div>
                        <div style={{paddingLeft: "20px"}}>background-color: var(--section-background); /* Using local scope variable */</div>
                        <div>&#125;</div>
                        </div>
                    <div style={{paddingTop: "30px"}}><b>Note:</b> The variable name must begin with two dashes (--) and it is case sensitive!</div> 
                    <div style={{paddingTop: "20px"}}>Remember, variables defined in a local scope will not be accessible outside of that scope. Global scope variables, defined in :root, are accessible from anywhere in the stylesheet. This distinction helps you manage the visibility and scope of your variables effectively.</div> 
                    </div>
                    </li>

                    {/* To change the background color for different values of "van.type" */}
                    <li id="topic8" style={{paddingTop: "10px"}}><b>To change the background color for different values of "van.type"</b>
                    <div className='code'>
                        <div>To change the background color for different values of van.type when rendering it with the given JSX code, you can apply conditional styling based on the value of van.type. Here's how you can do it using CSS classes:</div>
                        <div style={{paddingTop: "20px"}}>Define CSS classes for each background color you want to apply:</div>
                    <div className="router-code-grey">App.css</div>
                    <div className="router-code-black"> 
                        <div style={{paddingTop: "10px", paddingBottom: "10px"}}>.nameofthevalue-classname</div>
                        <div>.Simple-simple &#123;</div>
                        <div style={{paddingLeft: "20px"}}>background-color: aqua;</div>
                        <div style={{paddingBottom: "10px"}}>&#125;</div>
                        <div>.Luxury-luxury &#123;</div>
                        <div style={{paddingLeft: "20px"}}>background-color: pink;</div>
                        <div style={{paddingBottom: "10px"}}>&#125;</div>
                        <div>.Rugged-rugged &#123;</div>
                        <div style={{paddingLeft: "20px"}}>background-color: green;</div>
                        <div>&#125;</div>
                        </div>
                        <div style={{paddingTop: "20px"}}>Modify your JSX code to conditionally apply these CSS classes based on the van.type value:</div>
                    <div className="router-code-grey">App.css</div>
                    <div className="router-code-black"> 
                        <div>&lt;i className=&#123;`van-type $&#123;van.type&#125;-simple $&#123;van.type&#125;-luxury $&#123;van.type&#125;-rugged`&#125;&gt;&#123;van.type&#125;&lt;/i&gt;</div>
                        </div>
                    <div style={{paddingTop: "30px"}}><b>Note: </b>Ensure that you write the value exactly as it is. For instance, if the type is 'Simple,' remember to capitalize the first letter in the CSS class name; otherwise, it won't work.</div> 
                    </div>
                    </li>

                    </ol>
                </div>
            </div>
        </div> 
    )
}