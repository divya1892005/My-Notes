import React, { useState, useEffect } from "react";
import '../App';


export default function Javascript() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {setTime(new Date());}, 1000);
            return () => {
                clearInterval(interval);
            };
        
    }, []);

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


    return(
        <div>
            <div className='topics'>
                <h1>Javascript in ReactJS</h1>
                <div style={{paddingBottom: "30px"}}>
                    <h2>JS Topics</h2>
                    <ol className='second-order-list'>

                    {/* How to upade time for every second in react: */}
                    <li style={{paddingTop: "10px"}}><b>How to upade time for every second in react:</b>
                    <div className='code'>
                    <div className="router-code-grey">App.js</div>
                    <div className="router-code-black">
                    <div>import React, &#123; useSate, useEffect &#125; from 'react';</div>
  
                    <div style={{paddingTop: "10px"}}>export default function Clock() &#123;</div>
                    <div style={{paddingTop: "5px"}}>const [time, setTime] = useState(new Date());</div>
                    <div>useEffect &#40;() =&gt; &#123;</div>
                    <div style={{paddingLeft: "20px"}}>const interval = setInterval(() =&gt; &#123;setTime(new Date()); &#125;, 1000);</div>
                    <div style={{paddingLeft: "40px"}}>return () =&gt; &#123;</div>
                    <div style={{paddingLeft: "60px"}}>clearInterval(interval);</div>
                    <div style={{paddingLeft: "40px"}}>&#125; </div>
                    <div>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;Hello World!&lt;/h1&gt;</div>
                    <div style={{paddingLeft: "30px"}}>&lt;p&gt;&#123;time.toString()&#125;&lt;/p&gt;</div> 
                    <div style={{paddingLeft: "30px"}}>&lt;p&gt;&#123;time.toLocaleTimeString()&#125;&lt;/p&gt;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
                    <div>&#125; </div>
                    <div style={{margin: "0px 250px", textAlign: "center", padding: "2px", border: "2px solid white"}}>{time.toLocaleTimeString()}</div>
                    <div style={{marginLeft: "40px", textAlign: "center", marginTop: "10px", padding: "2px", border: "2px solid white"}}>{time.toString()}</div>
                    </div>
                    </div>
                    </li>
                    

                    {/* If and else If Statement in react: */}
                    <li style={{paddingTop: "10px"}}><b>If and else If Statement in react:</b>
                    <div className='code'>
                    <div className="router-code-grey">App.js</div>
                    <div className="router-code-black">
                    <div>import React from 'react';</div>
  
                    <div style={{paddingTop: "10px"}}>export default function App() &#123;</div>
                    <div style={{paddingTop: "5px"}}>const date = new Date();</div>
                    <div>const hours = date.getHours()</div>
                    <div style={{paddingLeft: "20px"}}>let TimeOfDay</div>
                    <div style={{paddingLeft: "40px", paddingTop: "20px"}}>if (hours &lt; 12) &#123;</div>
                    <div style={{paddingLeft: "60px"}}>TimeOfDay = "Good morning"</div>
                    <div style={{paddingLeft: "40px", paddingTop: "20px"}}>&#125; else if (hours &gt;= 12 && hours &lt; 17) &#123;</div>
                    <div style={{paddingLeft: "60px"}}>TimeOfDay = "Good Afternoon"</div>
                    <div style={{paddingLeft: "40px", paddingTop: "20px"}}>&#125; else &#123;</div>
                    <div style={{paddingLeft: "60px"}}>TimeOfDay = "Good night"</div>
                    <div style={{paddingLeft: "40px"}}>&#125; </div>
                    <div style={{paddingTop: "5px"}}>return &#40;</div>
                    <div style={{paddingLeft: "20px"}}>&lt;div&gt;</div>
                    <div  style={{display: "flex"}}>
                    <div style={{paddingLeft: "30px"}}>&lt;h1&gt;&#123;TimeOfDay&#125;!&lt;/h1&gt;</div>
                    <div style={{marginLeft: "40px", padding: "5px", border: "2px solid black"}}>{TimeOfDay}!</div>
                    </div>
                    <div style={{paddingLeft: "20px"}}>&lt;/div&gt;</div>
                    <div style={{paddingLeft: "10px"}}>&#41;</div>
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