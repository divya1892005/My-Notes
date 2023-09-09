import React from "react";
import './App';


export default function ReactChallenges() {

    return(
        <div>
            <div className='topics'>
                <h1>React Challenges</h1>
                <div style={{paddingBottom: "30px"}}>
                <h2 className="chall-header">Small projects :</h2>
                    <ol className='first-order-list'>
                        <li>Unread Messages<input type="checkbox" className="ing" /></li>
                        <li>Jokes<input type="checkbox" className="ing" /></li>
                        <li>React Forms<input type="checkbox" className="ing" /></li>
                    </ol>
                <h2 className="chall-header">Challenges : </h2>
                    <ol className='first-order-list'>
                        <li>Challenge : <input type="checkbox" className="ing" /></li>
                        <li>Challenge : <input type="checkbox" className="ing" /></li>
                    </ol>
                </div>
            </div>
        </div> 
    )
}