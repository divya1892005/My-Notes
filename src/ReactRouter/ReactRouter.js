import React from "react";
import '../App';
import { Link } from 'react-scroll';


export default function ReactRouter() {

    return(
        <div>
            <div className='topics'>
                <h1>React Router Notes (C.W)</h1>
                <div style={{paddingBottom: "30px"}}>
                
                {/* Topics */}
          <div style={{padding: "20px 0px"}}>
          <h2>Topics:</h2>
          <ol className='w3-order-list'>
            <li><Link className='w3-link' activeClass="active" to="topic0" spy={true} smooth={true} offset={-70} duration={500}>MPA vs SPA</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic1" spy={true} smooth={true} offset={-70} duration={500}>React Router Setup - BrowserRouter, Routes, Route, Link</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic2" spy={true} smooth={true} offset={-70} duration={500}>NavLink and Link</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic3" spy={true} smooth={true} offset={-70} duration={500}>Navigating Programatically</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic4" spy={true} smooth={true} offset={-70} duration={500}>No Match Route</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic5" spy={true} smooth={true} offset={-70} duration={500}>Nested Routes</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic6" spy={true} smooth={true} offset={-70} duration={500}>Index Route</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic7" spy={true} smooth={true} offset={-70} duration={500}>Dynamic Routes</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic8" spy={true} smooth={true} offset={-70} duration={500}>URL Params ( Path Params)</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic9" spy={true} smooth={true} offset={-70} duration={500}>Search Params ( Query Params )</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic10" spy={true} smooth={true} offset={-70} duration={500}>Relative and Absolute Links</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic11" spy={true} smooth={true} offset={-70} duration={500}></Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic12" spy={true} smooth={true} offset={-70} duration={500}></Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic13" spy={true} smooth={true} offset={-70} duration={500}></Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic14" spy={true} smooth={true} offset={-70} duration={500}></Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic15" spy={true} smooth={true} offset={-70} duration={500}></Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic16" spy={true} smooth={true} offset={-70} duration={500}></Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic17" spy={true} smooth={true} offset={-70} duration={500}></Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic18" spy={true} smooth={true} offset={-70} duration={500}></Link></li>
          </ol>
          </div>
                </div>
                <div style={{paddingBottom: "30px"}}>
                <h2 style={{paddingBottom: "20px"}}>Class Notes:</h2>
                <ol className='second-order-list'>

                    {/* MPA vs SPA */}
                    <li id="topic0"><b>MPA vs SPA</b>
                      <div className='code'>
                        <div>MPA (Multi-Page Application) is a traditional web approach where each page is a separate HTML file, causing full page reloads when navigating.
                        </div>
                        <div style={{paddingTop: "10px"}}>SPA (Single-Page Application) is a modern method where all content resides on one page, updating dynamically using JavaScript, leading to smoother user experiences with faster interactions.<br /><br />React Router 6 supports both approaches, managing navigation for a seamless user journey.
                        </div>
                      </div>
                    </li>

                    {/* React Router Setup - BrowserRouter, Routes, Route, Link */}
                    <li id="topic1"><b>React Router Setup - BrowserRouter, Routes, Route, Link</b>
                      <div className='code'>
                        <div>Install React Router:</div>
                        <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                          npm install react-router-dom
                        </div>
                        <div style={{paddingTop: "20px"}}>Here's a simple example of how you might set up basic routing using React Router in your App.js file</div>
                        <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                          <div>Import React from 'react';</div>
                          <div>Import './App.css';</div>
                          <div>Import Home from './Home';</div>
                          <div>Import About from './About';</div>
                          <div>Import &#123; BrowserRouter, Routes, Route, Link &#125; from 'react-router-dom';</div>
                          <div style={{paddingTop: "20px"}}>function App() &#123;</div>
                          <div style={{paddingLeft: "20px"}}>return &#40;</div>
                          <div style={{paddingLeft: "40px"}}>&lt;BrowserRouter&gt;</div>
                          <div style={{paddingLeft: "80px"}}>&lt;Link to="/home"&gt;Home Page&lt;/Link&gt;</div>
                          <div style={{paddingLeft: "80px"}}>&lt;Link to="/about"&gt;About Page&lt;/Link&gt;</div>
                          <div style={{paddingLeft: "60px"}}>&lt;Routes&gt;</div>
                          <div style={{paddingLeft: "80px"}}>&lt;Route path="/home" element=&#123;&lt;Home /&gt;&#125; /&gt;</div>
                          <div style={{paddingLeft: "80px"}}>&lt;Route path="/about" element=&#123;&lt;About /&gt;&#125; /&gt;</div>
                          <div style={{paddingLeft: "60px"}}>&lt;Routes&gt;</div>
                          <div style={{paddingLeft: "40px"}}>&lt;/BrowserRouter&gt;</div>
                          <div style={{paddingLeft: "20px"}}>&#41;</div>
                          <div>&#125;</div>
                        </div>
                        <div className="router-text"><b>BrowserRouter :</b> This React Router component simplifies navigation in your application by utilizing browser-specific methods for routing.</div>
                        <div className="router-text"><b>Routes :</b> As a component, it defines the mapping between different paths and the corresponding components they should display in your application.</div>
                        <div className="router-text"><b>Route :</b> Used to specify which specific component should be presented when a particular path in your application is accessed.</div>
                        <div className="router-text"><b>Link :</b> This component generates clickable links, enhancing navigation between distinct routes without the need to reload the entire page.</div>
                      </div>
                    </li>

                    {/* NavLink and Link */}
                    <li id="topic2"><b>NavLink and Link</b>
                      <div className='code'>
                        <div>Both 'Link' and 'NavLink' are essential components in React Router for creating navigation within your React applications. 'Link' is a simple way to navigate between routes, while 'NavLink' adds more functionality for styling and highlighting active links, making it a great choice for building navigation menus in your application.</div>
                        <div style={{paddingTop: "20px"}}><b>Link : </b></div>
                        <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                          <div>import &#123; Link &#125; from 'react-router-dom';</div>
                          <div style={{paddingTop: "20px"}}>&lt;Link to="/dashboard"&gt;Go to Dashboard&lt;/Link&gt;</div>
                        </div>
                        <div style={{paddingTop: "20px"}}><b>NavLink : </b></div>
                        <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                          <div>import &#123; NavLink &#125; from 'react-router-dom';</div>
                          <div style={{paddingTop: "20px"}}>export default function App() &#123;</div>
                          <div style={{paddingLeft: "20px"}}><mark>const navLinkStyling = (&#123; isActive &#125;) =&gt; &#123;</mark></div>
                          <div style={{paddingLeft: "40px"}}><mark>return &#123;</mark></div>
                          <div style={{paddingLeft: "60px"}}><mark>fontWeight: isActive ? "bold" : "none"</mark></div>
                          <div style={{paddingLeft: "40px"}}><mark>&#125;</mark></div>
                          <div style={{paddingLeft: "20px"}}><mark>&#125;</mark></div>
                          <div style={{paddingLeft: "20px", paddingTop: "20px"}}>return &#40;</div>
                          <div style={{paddingLeft: "40px"}}>&lt;NavLink to="/dashboard"&gt;Go to Dashboard&lt;/NavLink&gt;</div>
                          <div style={{paddingLeft: "20px"}}>&#41;</div>
                          <div>&#125;</div>
                        </div>
                        <div style={{paddingTop: "20px"}}><b>NavLink Styling : </b></div>
                        <div className="router-code-grey">App.css</div>
                        <div className="router-code-black">
                          <div>.nav-links.active &#123;</div>
                          <div style={{paddingLeft: "20px"}}>font-weight: bold;</div>
                          <div>&#125;</div>
                        </div>
                      </div>
                    </li>

                    {/* Navigating Programatically */}
                    <li id="topic3"><b>Navigating Programatically</b>
                      <div className='code'>
                        <div>The useNavigate hook is a feature provided by the React Router library, which is commonly used for building navigation and routing functionality in web applications. This hook is used to obtain a function that allows you to perform programmatic navigation within your application.</div>
                        <div style={{paddingTop: "20px"}}><b>Go to Order Page : </b></div>
                        <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                        <div>import &#123; useNavigate &#125; from 'react-router-dom';</div>
                          <div style={{paddingTop: "20px"}}>export default function Home() &#123;</div>
                          <div style={{paddingLeft: "20px", paddingTop: "20px"}}>const navigate = useNavigate()</div>
                          <div style={{paddingLeft: "20px", paddingTop: "20px"}}>return &#40;</div>
                          <div style={{paddingLeft: "40px"}}>&lt;button onClick=&#123;() =&gt; navigate('order-summary')&#125; className="place-order-btn"&gt;Place Order&lt;/button&gt;</div>
                          <div style={{paddingLeft: "20px"}}>&#41;</div>
                          <div>&#125;</div>
                        </div>
                        <div style={{paddingTop: "20px"}}><b>Go back to home page: </b></div>
                        <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                        <div>import &#123; useNavigate &#125; from 'react-router-dom';</div>
                          <div style={{paddingTop: "20px"}}>export default function Order() &#123;</div>
                          <div style={{paddingLeft: "20px", paddingTop: "20px"}}>const navigate = useNavigate()</div>
                          <div style={{paddingLeft: "20px", paddingTop: "20px"}}>return &#40;</div>
                          <div style={{paddingLeft: "40px"}}>&lt;button onClick=&#123;() =&gt; navigate(-1)&#125; &gt;Go Back&lt;/button&gt;</div>
                          <div style={{paddingLeft: "20px"}}>&#41;</div>
                          <div>&#125;</div>
                        </div>
                        <div style={{paddingTop: "20px"}}><b>Using 'Link' to go back : </b></div>
                        <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                          <div>import &#123; Link &#125; from 'react-router-dom';</div>
                          <div style={{paddingTop: "20px"}}>export default function Order() &#123;</div>
                          <div style={{paddingLeft: "20px", paddingTop: "20px"}}>return &#40;</div>
                          <div style={{paddingLeft: "40px"}}>&lt;Link to = '/home'&gt;</div>
                          <div style={{paddingLeft: "60px"}}>&lt;button&gt;Go Back&lt;/button&gt;</div>
                          <div style={{paddingLeft: "40px"}}>&lt;/Link&gt;</div>
                          <div style={{paddingLeft: "20px"}}>&#41;</div>
                          <div>&#125;</div>
                        </div>
                      </div>
                    </li>

                    {/* No Match Route */}
                    <li id="topic4"><b>No Match Route</b>
                      <div className='code'>
                        <div>when a user enters an incorrect URL or tries to access a route that doesn't exist, they will be redirected to your "Page Not Found" component, which provides a clear message that the requested page does not exist.</div>
                        <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                        <div>import NoRoute from './NoRoute';</div>
                          <div style={{paddingTop: "20px"}}>&lt;Route path=' * ' element=&#123;&lt;NoRoute /&gt;&#125; /&gt;</div>
                        </div>
                      </div>
                    </li>

                    {/* Nested Routes */}
                    <li id="topic5"><b>Nested Routes</b>
                      <div className='code'> 
                        <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                        <div>import Products from './Products';</div>
                          <div style={{paddingTop: "20px"}}>&lt;Route path='/products' element=&#123;&lt;Products /&gt;&#125;&gt;</div>
                          <div style={{paddingLeft: "20px"}}>&lt;Route path='featured' element=&#123;&lt;FeaturedProducts /&gt;&#125; /&gt;</div>
                          <div style={{paddingLeft: "20px"}}>&lt;Route path='new' element=&#123;&lt;NewProducts /&gt;&#125; /&gt;</div>
                          <div>&lt;/Route&gt;</div>
                          </div>
                          <div style={{paddingTop: "20px"}}>Write self closing tag ('&lt;Route /&gt;') as closing tag('&lt;Route&gt;&lt;/Route&gt;')</div>
                        <div className="router-code-grey">Products.js</div>
                        <div className="router-code-black">
                        <div>import &#123; Link, Outlet &#125; from 'react-router-dom';</div>
                          <div style={{paddingTop: "20px"}}>&lt;Link className='nav-links' to='featured'&gt;Featured&lt;/Link</div>
                          <div>&lt;Link className='nav-links' to='new'&gt;New&lt;/Link&gt;</div>
                          <div>&lt;Outlet /&gt;</div>
                        </div>
                        <div style={{paddingTop: "20px"}}>Remember to eliminate the '/' slash in the 'product.js' file. Ensure that you have imported and added the 'outlet' to the nested routes; otherwise, it won't Work correctly.</div>
                      </div>
                    </li>

                    {/* Index Route */}
                    <li id="topic6"><b>Index Route</b>
                      <div className='code'> 
                          <div>An index route is a route definition that typically represents the default route for a particular section or page of your application. It's the route that is displayed when you visit that section without specifying a specific sub-route.</div>
                          <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                        <div>import Products from './Products';</div>
                          <div style={{paddingTop: "20px"}}>&lt;Route path='/products' element=&#123;&lt;Products /&gt;&#125;&gt;</div>
                          <div style={{paddingLeft: "20px"}}>&lt;Route index element=&#123;&lt;FeaturedProducts /&gt;&#125; /&gt;</div>
                          <div style={{paddingLeft: "20px"}}>&lt;Route path='featured' element=&#123;&lt;FeaturedProducts /&gt;&#125; /&gt;</div>
                          <div style={{paddingLeft: "20px"}}>&lt;Route path='new' element=&#123;&lt;NewProducts /&gt;&#125; /&gt;</div>
                          <div>&lt;/Route&gt;</div>
                          </div>
                      </div>
                    </li>

                    {/* Dynamic Routes */}
                    <li id="topic7"><b>Dynamic Routes</b>
                      <div className='code'> 
                          <div>A dynamic route in React Router lets you create flexible routes with variable segments (e.g., :id) in the path. These segments capture values from the URL, allowing your components to adapt and render content based on those values. This is useful for scenarios like user profiles or product details where URL parameters influence the displayed data..</div>
                          <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                        <div>import User from './User';</div>
                        <div>import UserDetails from './UserDetails';</div>
                          
                          <div style={{paddingTop: "20px"}}>&lt;Route path='/user' element=&#123;&lt;User /&gt;&#125; /&gt;</div>
                          <div>&lt;Route path='/user/:userId' element=&#123;&lt;UserDetails /&gt;&#125; /&gt;</div>
                          </div>  
                          <div style={{paddingTop: "20px"}}>When you click 'localhost:3000/user/1' it display user detail page. The users Id can be any 'string' not just a 'number'</div>   
                          <div style={{paddingTop: "20px"}}>Dynamic Routes can be nested as well.</div>   
                          <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                        <div>import User from './User';</div>
                        <div>import UserDetails from './UserDetails';</div>
                        <div>import Admin from './Admin';</div>
                        <div style={{paddingTop: "20px"}}>&lt;Route path='/user' element=&#123;&lt;User /&gt;&#125; /&gt;</div>
                          <div style={{paddingLeft: "20px"}}>&lt;Route path=':userId' element=&#123;&lt;UserDetails /&gt;&#125; /&gt;</div>
                          <div style={{paddingLeft: "20px"}}>&lt;Route path='admin' element=&#123;&lt;Admin /&gt;&#125; /&gt;</div>
                          <div>&lt;/Route&gt;</div>
                          </div>                
                      </div>
                    </li>

                    {/* URL Params ( Path Params) */}
                    <li id="topic8"><b>URL Params ( Path Params)</b>
                      <div className='code'>
                        <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                        <div>import &#123; useParams &#125; from 'react-router-dom';</div>
                          <div style={{paddingTop: "20px"}}><mark>const params = useParams()</mark></div>
                          <div><mark>const userId = params.userId</mark></div>
                          <div style={{paddingTop: "20px"}}>OR</div>
                          <div style={{paddingTop: "20px"}}><mark>const &#123; userId &#125; = useParams()</mark> using destructor</div>
                          <div style={{paddingTop: "20px"}}>&lt;h2&gt;User Detail Page &#123;userId&#125; goes here 🙂&lt;/h2&gt;</div>
                          </div>                   
                      </div>
                    </li>

                    {/* Search Params ( Query Params ) */}
                    <li id="topic9"><b>Search Params ( Query Params )</b>
                      <div className='code'>
                        <div className="router-code-grey">App.js</div>
                        <div className="router-code-black">
                        <div>import &#123; useSearchParams &#125; from 'react-router-dom';</div>
                          <div style={{paddingTop: "20px"}}>const [searchParams, setSearchParams] = useSearchParams()</div>
                          <div>const ShowActiveUsers = searchParams.get('filter') === 'active'</div>
                          <div style={{paddingTop: "20px"}}>&lt;button onClick=&#123;() =&gt; setSearchParams(&#123;filter: "active"&#125;)&#125; className="btn"&gt;Active Users&lt;/button&gt;</div>
                          <div>&lt;button onClick=&#123;() =&gt; setSearchParams(&#123;&#125;)&#125; className="btn"&gt;Reset Filter&lt;/button&gt;</div>
                          <div>&#123; ShowActiveUsers ? &lt;h2&gt;Showing Active Users&lt;/h2&gt; : &lt;h2&gt;Showing all users&lt;/h2&gt;&#125;</div>
                          </div>       
                          <div style={{paddingTop: "20px"}}>'useSearchParams' is similar to 'useState'</div>            
                      </div>
                    </li>

                    {/* Relative and Absolute Links */}
                    <li id="topic10"><b>Relative and Absolute Links</b>
                      <div className='code'>
                        <div><b>Relative Links : </b></div>
                      <div className="router-code-grey">Products.js</div>
                        <div className="router-code-black">
                        <div>import &#123; Link, Outlet &#125; from 'react-router-dom';</div>
                          <div style={{paddingTop: "20px"}}>&lt;Link to='featured'&gt;Featured&lt;/Link</div>
                          <div>&lt;Link to='new'&gt;New&lt;/Link&gt;</div>
                          <div>&lt;Outlet /&gt;</div>
                        </div>   
                          <div style={{paddingTop: "20px"}}><b>Absolute Links : </b></div>
                      <div className="router-code-grey">Products.js</div>
                        <div className="router-code-black">
                        <div>import &#123; Link, Outlet &#125; from 'react-router-dom';</div>
                          <div style={{paddingTop: "20px"}}>&lt;Link to='/products/featured'&gt;Featured&lt;/Link</div>
                          <div>&lt;Link to='/products/new'&gt;New&lt;/Link&gt;</div>
                          <div>&lt;Outlet /&gt;</div>
                        </div>            
                        <div style={{paddingTop: "20px"}}>Relative links are based on the current location and are often used for internal project references, while absolute links provide the full path from the project's root directory and are used for specifying resources regardless of their location within the project.</div> 
                      </div>
                    </li>
                </ol>
                </div>
            </div>
        </div> 
    )
}