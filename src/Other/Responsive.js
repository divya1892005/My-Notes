import React from "react";
import '../App';
import { Link } from 'react-scroll';

export default function Responsive() {

    return(
        <div>
            <div className='topics'>
                <h1>Responsive Code</h1>
                <div style={{paddingBottom: "30px"}}>
                                    {/* Topics */}
          <div style={{paddingBottom: "30px"}}>
          <h2 className='Reacttopics'>Topics:</h2>
          <ol className='w3-order-list'>
            <li><Link className='w3-link' activeClass="active" to="topic0" spy={true} smooth={true} offset={-70} duration={500}>Responsive Font Size</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic1" spy={true} smooth={true} offset={-70} duration={500}>Width and Max-width:</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic2" spy={true} smooth={true} offset={-70} duration={500}>CSS FlexBox</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic3" spy={true} smooth={true} offset={-70} duration={500}>Responsive Navbar</Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic4" spy={true} smooth={true} offset={-70} duration={500}></Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic5" spy={true} smooth={true} offset={-70} duration={500}></Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic6" spy={true} smooth={true} offset={-70} duration={500}></Link></li>
            <li><Link className='w3-link' activeClass="active" to="topic7" spy={true} smooth={true} offset={-70} duration={500}></Link></li>
          </ol>
          </div>

                <ol className='second-order-list'>

                    {/* Responsive Font Size */}
                    <li id="topic0" style={{paddingTop: "10px"}}><b>Responsive Font Size</b>
                    <div className='code'>
                    <div className="router-round-corner">
                    <div>&lt;h1 style="font-size:10vw"&gt;Hello World&lt;/h1&gt;</div>                    
                    </div>  
                    <div style={{padding: "20px 0px"}}>Viewport units (vw, vh, vmin, vmax) are measurement units that depend on the size of the visible area of a webpage (the part you can see without scrolling). For instance, using "vw" (viewport width) units to set font size makes the font's size a portion of the width of the visible area. This helps the font size change as the user makes the browser window bigger or smaller.<br /><br />Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.</div>
                    </div> 
                    </li>

                    {/* Width and Max-width: */}
                    <li id="topic1" style={{paddingTop: "10px"}}><b>Width and Max-width:</b>
                    <div className='code'> 
                    <div style={{padding: "20px 0px"}}>Use 'width' when you want to ensure a specific, fixed width for an element.<br /><br />Use 'max-width' when you want an element to be flexible and responsive, adjusting its width based on the available space while never exceeding a certain limit.<br /><br />In many cases, for responsive designs, using 'max-width' is recommended as it helps create a better user experience across various devices and screen sizes.</div>
                    </div>  
                    </li>

                    {/* Flexbox */}
                    <li id="topic2" style={{paddingTop: "10px"}}><b>CSS FlexBox</b>
                    <div className='code'> 
                    <div style={{padding: "20px 0px"}}>Flexbox (Flexible Box Layout) is a CSS layout model that allows you to create complex layouts with ease. It's especially useful for designing responsive and dynamic web pages. Flexbox introduces a more efficient way to distribute space and align items within a container.</div>
                        <div style={{paddingBottom: "20px"}}>
                        <b>display: flex;</b> If you apply the "display: flex;" property to a parent container, its child elements (containers or other elements) will, by default, be displayed side by side along the main axis, which is usually horizontal (row) when using the default flex-direction of row. This is a key feature of the Flexbox layout model, allowing you to easily create horizontal layouts where child elements are placed next to each other.</div>
                        <div style={{paddingBottom: "20px"}}>
                        <b>justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;</b> This property aligns the flex items along the main axis. It controls the spacing and distribution of items.
                    </div>
                    <div style={{paddingBottom: "20px"}}>
                        <a className="youtube-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/shorts/wLlnJXe0gAU">justify-content youTube Link</a>
                        </div>
                    <div>
                        <b>align-items: flex-start | flex-end | center | baseline | stretch;</b> This property aligns the flex items along the cross axis (perpendicular to the main axis).
                    </div>
                        <div style={{paddingTop: "20px"}}>
                        <a className="youtube-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/shorts/MBwxZQnFl5g">align-items youTube Link</a>
                        </div>  
                    <div style={{padding: "20px 0px"}}>
                        <b>flex-direction: row | row-reverse | column | column-reverse;</b> This property determines the direction of the main axis along which the flex items will be arranged. It can be set to row, column, row-reverse, or column-reverse.
                        <div>
                        <div style={{padding: "20px 40px"}}>
                        • row - Default value. The flexible items are displayed horizontally, as a row<br />
                        • row-reverse - Same as row, but in reverse order<br />
                        • column - The flexible items are displayed vertically, as a column<br />
                        • column-reverse - Same as column, but in reverse order<br />
                        </div>
                        <a className="youtube-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/shorts/d5NE6n9d2VQ">flex-direction youTube Link</a>
                    </div>
                    </div>
                    <div style={{paddingTop: "20px"}}>
                        <b>flex-wrap: nowrap | wrap | wrap-reverse;</b>
                    </div>
                    <div style={{padding: "20px 40px"}}>
                        • nowrap - Default value. Specifies that the flexible items will not wrap<br />
                        • wrap - Specifies that the flexible items will wrap if necessary<br />
                        • wrap-reverse - Specifies that the flexible items will wrap, if necessary, in reverse order<br />
                    </div>
                    <div>
                        <a className="youtube-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/shorts/310Kj2kmptg">flex-Wrap youTube Link</a>
                    </div>
                    <div style={{padding: "20px 0px"}}>
                        <b>align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch;</b> This property controls the distribution of space between flex lines (when there are multiple rows/columns of items). It's useful when flex-wrap is set to "wrap".
                    </div>
                    <div>
                        <a className="youtube-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/shorts/o6QSA7PpRSI">align-content youTube Link</a>
                    </div>
                    <div style={{padding: "20px 0px"}}>
                        <b>flex-grow: number;</b> This property specifies how much a flex item can grow in relation to its siblings if there's extra space available. It's a good way to control the distribution of available space.
                    </div>
                    <div style={{padding: "20px 0px"}}>
                        <b>flex-shrink: number;</b> This property determines how much a flex item should shrink if the container is too small to fit its content along with the content of other flex items.
                    </div>
                    <div style={{padding: "20px 0px"}}>
                        <b>flex-basis: auto | width;</b> Defines the initial size of a flex item along the main axis as either "auto" or a specific width value.
                    </div>
                    <div style={{padding: "20px 0px"}}>
                        <b>flex:</b> The flex property is a shorthand property for the flex-grow, flex-shrink, and flex-basis properties.
                    </div>
                    <div>
                        <a className="youtube-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=sanswTlz4ZY">flex-grow, flex-shrink, flex-basis youTube Link</a>
                    </div>
                    <div style={{padding: "20px 0px"}}>
                        <b>flex-flow: row wrap;</b> The flex-flow property is a shorthand property for setting both the flex-direction and flex-wrap properties.
                    </div>
                    <div style={{padding: "20px 0px"}}>
                        <b>order: number;</b> The 'order' property allows you to rearrange flex items in a flex container without changing the HTML code. By adjusting the order values, you can control the visual arrangement of items, making certain items appear before or after others, while keeping their original position in the code unchanged. Lower order values bring items to the front, and higher values push them back. The default order value is 0, and negative values can also be used.
                    </div>
                    <div style={{padding: " 0px 0px 20px 0px"}}>
                        <a className="youtube-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/shorts/xC_ae_UxK-0">order youTube Link</a>
                    </div>
                    <div style={{padding: "20px 0px"}}>
                        <b>align-self: flex-start | flex-end | center | baseline | stretch;</b> The 'align-self' property in CSS is used within a flex container to control the alignment of an individual flex item along the cross axis. It allows you to override the default alignment set by the align-items property for that specific item.
                    </div>
                    <div>
                        <a className="youtube-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=D611vS7j1N4">align-self youTube Link</a>
                    </div>
                    </div> 
                    </li>

                    {/* Responsive Navbar */}
                    <li id="topic3" style={{paddingTop: "10px"}}><b>Responsive Navbar</b>
                    <div className='code'> 
                    <div className="router-code-grey">App.js</div>
                    <div className="router-code-black">
                        <div>import React from 'react';</div>
                        <div>import './App.css';</div>
                        <div>import './Index.css';</div>
                        <div style={{paddingTop: "10px"}}><mark>We can import a single CSS file, two CSS files, or more than two CSS files.</mark></div>
                        <div style={{paddingTop: "20px"}}>&lt;div className = 'header-bg'&gt;</div>
                        <div>&lt;div className = 'flexCenter paddings innerWidth header'&gt;</div>
                        <div style={{paddingLeft: "40px"}}>&lt;Link className='header-links logo' to='/'&gt;SweetFruits&lt;/Link&gt;</div>
                        <div style={{paddingLeft: "20px"}}>&lt;div className='flexCenter rightSide-links'&gt;</div>
                        <div style={{paddingLeft: "40px"}}>&lt;Link className='header-links' to='/fruits'&lt;Fruits&lt;/Link&gt;</div>
                        <div style={{paddingLeft: "40px"}}>&lt;Link className='header-links' to='/about'&gt;About&lt;/Link&gt;</div>
                        <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                        <div>&lt;/div&gt;</div>
                        <div>&lt;/div&gt;</div>
                    </div>

                    <div className="router-code-grey">Index.css</div>
                    <div className="router-code-black">
                        <div>.flexCenter &#123;</div>
                        <div style={{paddingLeft: "20px"}}>
                          display: flex;<br />
                          align-items: center;<br />
                          justify-content: center;<br />
                          row-gap: 2rem;<br />
                          flex-wrap: wrap;
                        </div>
                        <div>&#125;</div><br />
                        <div>.paddings &#123;</div>
                        <div style={{paddingLeft: "20px"}}>
                          padding: 2.5rem;<br />
                          box-sizing: border-box;
                        </div>
                        <div>&#125;</div><br />
                        <div>.innerWidth &#123;</div>
                        <div style={{paddingLeft: "20px"}}>
                          width: 100%;<br />
                        </div>
                        <div>&#125;</div><br />
                        <div>@media (min-width: 1536px) &#123;</div>
                        <div style={{paddingLeft: "20px"}}>.innerWidth &#123;</div>
                        <div style={{paddingLeft: "40px"}}>max-width: 1280px;<br />margin: auto;</div>
                        <div style={{paddingLeft: "20px"}}>&#125;</div>
                        <div>&#125;</div>
                    </div>

                    <div className="router-code-grey">App.css</div>
                    <div className="router-code-black">
                        <div>.header-bg &#123;</div>
                        <div style={{paddingLeft: "20px"}}>
                          background-color: black;
                        </div>
                        <div>&#125;</div><br />
                        <div>.header &#123;</div>
                        <div style={{paddingLeft: "20px"}}>
                          justify-content: space-between;
                        </div>
                        <div>&#125;</div><br />
                        <div>.logo &#123;</div>
                        <div style={{paddingLeft: "20px"}}>
                          font-size: 30px;
                        </div>
                        <div>&#125;</div><br />
                        <div>.header-links &#123;</div>
                        <div style={{paddingLeft: "20px"}}>
                        color: white;<br />text-decoration: none;<br />font-size: 25px;
                        </div>
                        <div>&#125;</div><br /><div>.rightSide-links &#123;</div>
                        <div style={{paddingLeft: "20px"}}>
                          gap: 2rem;
                        </div>
                        <div>&#125;</div>
                    </div>
                    <div style={{paddingTop: "40px"}}>This CSS className ".innerWidth" class take up the full width of their container when the viewport is less than 1536 pixels wide. However, when the viewport is 1536 pixels or wider, these elements will have a maximum width of 1280 pixels and be centered horizontally within their container. This can be useful for responsive web design to adapt the layout of a webpage based on the screen size.</div>
                    
                    <div style={{paddingTop: "20px"}}>This CSS className ".flexCenter" is used to create a flexible container that centers its contents both vertically and horizontally. It also adds a gap between rows of content and allows content to wrap onto multiple lines if necessary. It's commonly used for creating centered and responsive layouts in web design.</div>
                    </div>  
                    </li>

                </ol>
                </div>
            </div>
        </div> 
    )
}