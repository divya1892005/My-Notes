import React from "react";
import '../App';


export default function Sass() {

    return(
        <div>
            <div className='topics'>
                <h1>SASS Notes</h1>
                <div style={{paddingBottom: "30px"}}>
                <ol className='second-order-list'>

                    {/* SASS Setup: */}
                    <li style={{paddingTop: "10px"}}><b>SASS Setup:</b>
                    <div className='code'> 
                    <div>
                        <a className='youtube-link' rel="noopener noreferrer" target='-blank' href="https://www.youtube.com/watch?v=9F8bzIlgJ4g">Sass Setup youtube Link</a>
                    </div>
                    </div> 
                    </li>

                    {/* SASS Variables: */}
                    <li style={{paddingTop: "10px"}}><b>SASS Variables:</b>
                    <div className='code'> 
                    <div>
                        <a className='youtube-link' rel="noopener noreferrer" target='-blank' href="https://www.youtube.com/watch?v=JsHQwmirC6s">Sass Variable youtube Link</a>
                    </div>
                    <div style={{paddingTop: "20px"}}>With Sass, you can store information in variables, like: </div>
                        <div style={{padding: "10px 40px"}}>• strings<br />• numbers<br />• colors<br />• booleans<br />• lists<br />• nulls</div>
                    
                    <div>
                        <a className='youtube-link' rel="noopener noreferrer" target='-blank' href="https://www.w3schools.com/sass/sass_variables.php">Sass Variable scope and using !global w3schools Link</a>
                    </div>
                    </div> 
                    </li>

                    {/* SASS Nesting And Nested Properties: */}
                    <li style={{paddingTop: "10px"}}><b>SASS Nesting And Nested Properties:</b>
                    <div className='code'> 
                    <div style={{padding: "20px"}}><b>SASS Nesting: </b>Sass lets you nest CSS selectors in the same way as HTML.</div>
                    <div className="router-code-grey">App.scss</div>
                        <div className="router-code-black">
                            <div>nav &#123;</div>
                            <div style={{padding: "10px 0px 0px 30px"}}>ul &#123;</div>
                            <div style={{padding: "0px 0px 0px 60px"}}>margin: 0;<br />padding: 0;<br />list-style: none;</div>
                            <div style={{padding: "0px 0px 0px 30px"}}>&#125;</div>
                            <div style={{padding: "10px 0px 0px 30px"}}>li &#123;</div>
                            <div style={{padding: "0px 0px 0px 60px"}}>display: inline-block;</div>
                            <div style={{padding: "0px 0px 0px 30px"}}>&#125;</div>
                            <div style={{padding: "10px 0px 0px 30px"}}>a &#123;</div>
                            <div style={{padding: "0px 0px 0px 60px"}}>display: block;<br />text-decoration: none;<br />padding: 6px 12px;</div>
                            <div style={{paddingLeft: "0px 0px 0px 30px"}}>&#125;</div>
                            <div>&#125;</div>
                        </div>
                    <div style={{padding: "20px"}}><b>SASS Nested Properties: </b>Many CSS properties have the same prefix, like font-family, font-size and font-weight or text-align, text-transform and text-overflow.<br /><br />With Sass you can write them as nested properties:</div>
                    <div className="router-code-grey">App.scss</div>
                        <div className="router-code-black">
                            <div>.mainText &#123;</div>
                            <div style={{padding: "10px 0px 0px 30px"}}>color: white;</div>
                            <div style={{paddingLeft: "30px"}}>padding: 20px 30px;</div>
                            <div style={{padding: "10px 0px 0px 30px"}}>font: &#123;</div>
                            <div style={{paddingLeft: "60px"}}>family: 'poppins', sans-serif;<br />size: 25px;<br />weight: bold;</div>
                            <div style={{padding: "0px 0px 0px 30px"}}>&#125;</div>
                            <div style={{padding: "10px 0px 0px 30px"}}>text: &#123;</div>
                            <div style={{paddingLeft: "60px"}}>align: center;<br />transform: lowercase;<br />overflow: hidden;</div>
                            <div style={{padding: "0px 0px 0px 30px"}}>&#125;</div>
                            <div>&#125;</div>
                        </div>
                    </div> 
                    </li>

                </ol>
                </div>
            </div>
        </div> 
    )
}