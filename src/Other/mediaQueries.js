import React from "react";
import '../App';


export default function MediaQueries() {

    return(
        <div>
            <div className='topics'>
                <h1>Media Queries</h1>
                <div style={{paddingBottom: "30px"}}>
                <ol className='second-order-list'>

                    {/* Media Query Syntax */}
                    <li style={{paddingTop: "10px"}}><b>Media Query Syntax</b>
                    <div className='code'>
                    <div style={{paddingBottom: "20px"}}>The @media rule is used to apply a set of CSS rules when certain conditions are met. Its syntax is as follows:</div>
                    <div className="router-round-corner">
                    <div>@media not|only mediatype and (expressions) &#123;</div>  
                    <div style={{padding: "10px 30px"}}>CSS-Code</div>
                    <div>&#125;</div>                  
                    </div>  
                    <div style={{padding: "20px 0px"}}>"not|only" refers to whether the media query is targeting only a specific type of media or not targeting that media type.</div>
                    <div>"mediatype" represents the type of media being targeted, such as screen, print, all, etc.</div>
                    
                    <div style={{padding: "20px 0px"}}>"(expressions)" contains one or more expressions that define the conditions for the media query to be true.</div>
                    <div>Inside the curly braces, you place the CSS code that you want to apply when the conditions specified in the media query are met.</div>
                    </div> 
                    </li>

                    {/* Media Types */}
                    <li style={{paddingTop: "10px"}}><b>Media Types</b>
                    <div className='code'>
                    <div>
                        <div>all - Used for all media type devices</div>
                        <div>print - Used for printers</div>
                        <div>screen - Used for computer screens, tablets, smart-phones etc.</div>
                        <div>speech - Used for screenreaders that "reads" the page out loud</div>
                    </div>
                    <div style={{paddingTop: "20px"}}>Even without specifying 'screen' or 'all', the default value will automatically be 'all'.</div>
                    </div> 
                    </li>

                    {/* not and only */}
                    <li style={{paddingTop: "10px"}}><b>not and only</b>
                    <div className='code'>
                    <div>The <b>'not'</b> keyword is used to negate a media query, meaning the styles within the media query will be applied when the condition specified is not met. Here's an example:</div>
                    <div className="router-round-corner">
                    <div>@media not screen and (max-width: 768px) &#123;</div>  
                    <div style={{padding: "10px 30px"}}>CSS-Code</div>
                    <div>&#125;</div>                  
                    </div> 
                    <div>In this example, the styles within the media query will be applied to screens with a width of 768px or less.</div>
                    <div style={{paddingTop: "20px"}}>The <b>'only'</b> keyword is used to target a specific range of devices or screens, ignoring any other styles outside of that range. This can be helpful to ensure that styles meant for a specific size range aren't accidentally applied to other sizes.</div>
                    <div className="router-round-corner">
                    <div>@media only screen and (min-width: 768px) and (max-width: 1024px) &#123;</div>  
                    <div style={{padding: "10px 30px"}}>CSS-Code</div>
                    <div>&#125;</div>                  
                    </div> 
                    <div>In this example, the styles within the media query will apply to screens with a width between 768px and 1024px.</div>
                    <div style={{padding: "30px 0px 20px 0px"}}><b>When to Use:</b> The <b>'not'</b> keyword is useful when you want to target devices that don't match a certain condition. The <b>'only'</b> keyword is generally used to indicate that the media query is intentionally targeting a specific media type to ensure compatibility.</div>
                    <div><b>Must I Use Them?:</b> The use of 'not' and 'only' keywords in media queries is optional. They provide additional control over how styles are applied, but you can still use media queries without them. If you don't use 'only', the media query will apply to all media types, and if you don't use 'not', the media query will target devices that match the conditions.</div>
                    <div style={{padding: "20px 0px 0px 0px"}}>In many cases, you might not need to use 'not' or 'only', but they can be helpful for more precise targeting and improving compatibility with various devices and browsers.</div>
                    </div> 
                    </li>

                    {/* Desktop-First Approach And Mobile-First Approach */}
                    <li style={{paddingTop: "10px"}}><b>Desktop-First Approach And Mobile-First Approach</b>
                    <div className='code'>
                    <div>In desktop-first design, you begin by designing and developing for larger screens and then use media queries to adjust for smaller screens. This can be suitable if your application has a complex layout that works well on larger screens and you want to take advantage of the extra space.</div>
                    <div style={{paddingTop: "20px"}}>On the other hand, in mobile-first design, you start by designing for mobile devices and progressively enhance the design for larger screens. This approach prioritizes essential content and performance, making it a good choice if you want to ensure a smooth experience on mobile devices and gradually add features for larger screens.</div> 
                    <div style={{paddingTop: "20px"}}>In Summary:</div>
                    <div style={{padding: "20px"}}>If you want to write your media queries first, you would typically start with the styles for the largest screens and then work your way down to smaller screens. This approach is called "desktop-first" design</div>
                    <div style={{padding: "0px 20px"}}>If you want to write your media queries first, you would typically start with the styles for the smallest screens and then work your way up to larger screens. This approach is called "mobile-first" design</div>
                    </div>
                    </li>
                </ol>
                </div>
            </div>
        </div> 
    )
}