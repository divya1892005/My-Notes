import React from 'react';
import './App.css';

export default function ReactRouterQuestions() {
    return(
        <div>
            <div className='topics'>
               <h1>ReactRouterQuestions</h1>
               <h2 style={{padding: "30px 30px 20px 30px"}}>What We'll Learn:</h2>
                <ol className='first-order-list'>
                  <li>Routing Basics</li>
                  <li>Navigation</li>
                  <li>Layout And Index Routes</li>
                  <li>Nested Routes</li>
                  <li>Route and search parameters</li>
                  <li>Protected Routes</li>
                </ol>
                <h2 style={{padding: "30px 30px 20px 30px"}}>What We'll Build:</h2>
                <ol className='first-order-list'>
                  <li>SPA with 10+ Routes</li>
                  <li>Filter by Van Type</li>
                  <li>Active Nav Link Styling</li>
                  <li>Protected Routes</li>
                  <li>Nested Routes (Multiple Level Deep)</li>
                  <li>Using A real Database (Firebase)</li>
                  <li>Deployed (Netlify)</li>
                </ol>
            </div>
        </div>
    )
}