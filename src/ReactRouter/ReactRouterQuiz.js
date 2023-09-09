import React from "react";
import './App.css';


export default function ReactRouterQuiz() {

    return(
        <div>
            <div className='topics'>
                <h1>React Quiz</h1>
                <div style={{paddingBottom: "30px"}}>

                    {/* Route Params */}
                    <h2 className="chall-header">Route Params : </h2>
                    <ol className='rquiz-list'>

                        {/* question 1 */}
                        <li><b>What is a route/url parameter?</b><input type="checkbox" className="ing" /></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b></p>

                        {/* question 2 */}
                        <li><b>Add route parameter called 'productId' to the route path below.<input type="checkbox" className="ing" /> <br />&lt;Route path='/products' element=&#123;&lt;ProductDetail /&gt;&#125; /&gt;</b></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>&lt;Route path='/products/:productId' element=&#123;&lt;ProductDetail /&gt;&#125;</p>

                        {/* question 3 */}
                        <li><b>Add whatever you need to add for the component below to display the route parameter in the &lt;h1&gt;<input type="checkbox" className="ing" /><br /><br />function ProductDetail() &#123;
                        <div style={{paddingLeft: "20px"}}>return &lt;h1&gt;Product DetailPage Goes Here&lt;/h1&gt;</div>
                        &#125;</b></li>
                        <p style={{padding: "10px 0px 30px 0px"}}><b>A. </b>
                        import &#123; useParams &#125; from 'react-router-dom';
                          <div style={{paddingTop: "10px"}}>function ProductDetail() &#123;</div>
                          <div style={{paddingLeft: "20px"}}>const productid = useParams()</div>
                          <div style={{paddingLeft: "20px"}}>return &lt;h1&gt;Product id is &#123; productid &#125;&lt;/h1&gt;</div>
                          <div>&lt;/Link&gt;</div>
                          <div>&#125;</div>
                        </p>

                    </ol>
                </div>
            </div>
        </div> 
    )
}